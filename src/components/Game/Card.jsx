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
    fetch("https://1705-189-29-146-118.ngrok-free.app/Question", {
      method: "GET",
      headers: {
        'ngrok-skip-browser-warning': 'true'
      },
    })
      .then(response => response.json())
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
    const isCorrect = correctOnLeft ? info.offset.x < -100 : info.offset.x > 100;

    if (Math.abs(info.offset.x) <= 100) {
      animControls.start({ x: 0 });
    } else {
      setFeedback(isCorrect ? currentQuestion.options.correta : currentQuestion.options.incorreta);
      setExplanation(isCorrect ? `Parabéns! Você ganhou ${points + 10} pontos.` : `Explicação: ${currentQuestion.explanation}`);
      setPoints((prev) => (isCorrect ? prev + 10 : prev));
      animControls.start({ x: isCorrect ? (correctOnLeft ? "-100vw" : "100vw") : (correctOnLeft ? "100vw" : "-100vw") }).then(() => {
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
  let timeString = ``;
  const getTotalTime = () => {
    if (startTime && endTime) {
      const timeDiff = Math.round((endTime - startTime) / 1000);
      const minutes = Math.floor(timeDiff / 60);
      const seconds = timeDiff % 60;
      timeString = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

      return `${minutes} minuto(s) e ${seconds} segundo(s)`;
    }
    return null;
  };

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  
  if (endTime) {
      const sendToBancoDados = async () =>  {
        try{
          const response = await axios.get(`https://1705-189-29-146-118.ngrok-free.app/Scores/attScores/user=${username};score=${points};HoraPontucao=${timeString}`, {
            headers: {
              'ngrok-skip-browser-warning': 'true'
            }
          })
        }catch (error){
          console.error(error);
        }
        }
    const messagePoint = points < 70 ? "Pode Melhorar." : "Você foi muito bem! Parabéns! ";
    return (
      <FinalScreen>
        <h2>{messagePoint}</h2>
        <p>Você fez {points} pontos.</p>
        <p>Tempo total: {getTotalTime()}</p>
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
        <StyledCardInner>{currentQuestion.text_question}</StyledCardInner>
      </StyledCard>
      <Feedback show={feedback !== ''}>{feedback}</Feedback>
      <ExplanationScreen show={showExplanation}>
        <div>
          <h3>{feedback.includes(currentQuestion.options.correta) ? 'Você Acertou!' : 'Você Errou!'}</h3>
          <p>{explanation}</p>
          <button onClick={handleNext}>Próxima Pergunta</button>
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
  width: 590px;
  height: 654px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  display: flex;
  text-align:center;
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
    width: 350px;
    height: 400px;
  }
  @media (max-width: 480px) {
    width: 250px;
    height: 360px;
  }
`;

const StyledCardInner = styled.div`
  width: 100%;
  padding-top:20px;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 10px;
  transition: all 0.2s;

  ${StyledCard}:hover & {
    transform: scale(0.98);
    border-radius: 20px;
  }
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
width: 600px;
height: 600px;
  background-color: #1a1a1a;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;

  @media (max-width: 1400px) {
    width: 350px;
    height: 450px;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
  }
  @media (max-width: 480px) {
    width: 250px;
    height: 360px;
  }
`;
