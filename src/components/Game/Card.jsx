import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [explanation, setExplanation] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [points, setPoints] = useState(0);
  const [correctOnLeft, setCorrectOnLeft] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storageUsername = localStorage.getItem("username");
    setUsername(storageUsername || "");
  }, []);

  useEffect(() => {
    fetch("https://9fb7-189-29-146-118.ngrok-free.app/Question", {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setCorrectOnLeft(Math.random() > 0.5);
    if (currentIndex === 0) {
      setStartTime(new Date());
    }
  }, [currentIndex]);

  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-20, 20]);
  const opacityValue = useTransform(motionValue, [-200, 200], [0.5, 1]);
  const animControls = useAnimation();

  const currentQuestion = data[currentIndex];

  const handleDrag = (event, info) => {
    if (correctOnLeft) {
      if (info.offset.x < -100) {
        setFeedback(currentQuestion.options.correta);
      } else if (info.offset.x > 100) {
        setFeedback(currentQuestion.options.incorreta);
      } else {
        setFeedback("");
      }
    } else {
      if (info.offset.x < -100) {
        setFeedback(currentQuestion.options.incorreta);
      } else if (info.offset.x > 100) {
        setFeedback(currentQuestion.options.correta);
      } else {
        setFeedback("");
      }
    }
  };

  const handleDragEnd = (event, info) => {
    const isCorrect = correctOnLeft
      ? info.offset.x < -100
      : info.offset.x > 100;

    if (Math.abs(info.offset.x) <= 100) {
      animControls.start({ x: 0 });
    } else {
      setFeedback(
        isCorrect
          ? currentQuestion.options.correta
          : currentQuestion.options.incorreta
      );
      setExplanation(
        isCorrect
          ? `Parabéns! Você ganhou ${points + 10} pontos.`
          : `Explicação: ${currentQuestion.explanation}`
      );
      setPoints((prev) => (isCorrect ? prev + 10 : prev));
      animControls
        .start({
          x: isCorrect
            ? correctOnLeft
              ? "-100vw"
              : "100vw"
            : correctOnLeft
            ? "100vw"
            : "-100vw",
        })
        .then(() => {
          setShowExplanation(true);
          motionValue.set(0);
        });
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setShowExplanation(false);
      animControls.start({ x: 0 });
      motionValue.set(0);
    } else {
      setEndTime(new Date());
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.round(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  const getTotalTime = () => {
    if (startTime && endTime) {
      const timeDiff = endTime - startTime;
      return formatTime(timeDiff);
    }
    return null;
  };

  const PerformancePlayer = async () => {
    try {
      const formattedTime = getTotalTime();
      const response = await axios.get(
        `https://9fb7-189-29-146-118.ngrok-free.app/Scores/attScores/user=${username};score=${points};horaPontuacao=${formattedTime}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  if (endTime) {
    const messagePoint =
      points < 70 ? "Pode Melhorar." : "Você foi muito bem! Parabéns! ";
    PerformancePlayer();
    return (
      <FinalScreen>
        <h2>{messagePoint}</h2>
        <p>Você fez {points} pontos.</p>
        <p>Tempo total: {getTotalTime()}</p>
        <button className="mt-7 border px-4 border-green-400 rounded-xl text-green-400 hover:bg-green-400 hover:text-white">
          <a href="/ranking">Ver o Ranking Geral</a>
        </button>
      </FinalScreen>
    );
  }

  return (
    <Wrapper>
      <StyledCard
        drag="x"
        style={{
          x: motionValue,
          rotate: rotateValue,
          opacity: opacityValue,
        }}
        dragConstraints={{ left: -1000, right: 1000 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={animControls}
      >
        <StyledCardInner>
          <QuestionText>{currentQuestion.text_question}</QuestionText>
          <CardImage src={currentQuestion.imagem} alt="Imagem da Pergunta" />
        </StyledCardInner>
      </StyledCard>
      <Feedback show={feedback !== ""}>{feedback}</Feedback>
      <ExplanationScreen show={showExplanation}>
        <div>
          <h3>
            {feedback.includes(currentQuestion.options.correta)
              ? "Você Acertou!"
              : "Você Errou!"}
          </h3>
          <p>{explanation}</p>
          <button
            className="mt-7 border px-4 border-green-400 rounded-xl text-green-400 hover:bg-green-400 hover:text-white"
            onClick={handleNext}
          >
            Próxima Pergunta
          </button>
        </div>
      </ExplanationScreen>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const StyledCard = styled(motion.div)`
  width: 570px;
  height: 654px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  position: absolute;
  margin: auto;
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);

  @media (max-width: 1400px) {
    width: 350px;
    height: 450px;
  }
  @media (max-width: 768px) {
    width: 550px;
    height: 650px;
  }
  @media (max-width: 480px) {
    width: 360px;
    height: 430px;
  }
`;

const StyledCardInner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  ${StyledCard}:hover & {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

const QuestionText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

const CardImage = styled.img`
  width: 90%;
  height:60%;
  margin-top: 50px;
  border-radius: 15px;
`;

const Feedback = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  display: ${({ show }) => (show ? "block" : "none")};
  text-align: center;
`;

const ExplanationScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 10px;
  text-align: center;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const FinalScreen = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background: linear-gradient(145deg, #2d2d2d, #1a1a1a);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  color: #f0f0f0;

  h2 {
    font-size: 2rem;
    color: #e0e0e0;
    margin-bottom: 20px;
    animation: fadeIn 0.6s;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .points {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4caf50;
  }

  .time {
    font-size: 1.2rem;
    color: #f0f0f0;
  }

  .btn {
    margin-top: 20px;
    padding: 12px 24px;
    font-size: 1rem;
    color: #fff;
    background-color: #4caf50;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s, transform 0.3s;
    
    &:hover {
      background-color: #45a049;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 1400px) {
    width: 85%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    width: 95%;
    max-width: 300px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
