import { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

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
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  position: absolute;
  margin: auto;
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);

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
  display: ${({ show }) => (show ? 'block' : 'none')};
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
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const data = {
  "Mecanismos de Segurança": [
    {
      "situação": "Seu navegador solicita que você aceite um certificado de segurança desconhecido.",
      "ações": {
        "correta": "Investigar a procedência do certificado e apenas aceitá-lo se for de uma fonte confiável.",
        "incorreta": "Aceitar o certificado sem verificar a sua origem."
      },
      "explicação": "Aceitar certificados de fontes desconhecidas pode expor você a riscos de segurança. Sempre verifique a autenticidade antes de aceitar."
    },
    {
      "situação": "Seu navegador solicita que você aceite um certificado de segurança desconhecido.",
      "ações": {
        "correta": "Investigar a procedência do certificado e apenas aceitá-lo se for de uma fonte confiável.",
        "incorreta": "Aceitar o certificado sem verificar a sua origem."
      },
      "explicação": "Aceitar certificados de fontes desconhecidas pode expor você a riscos de segurança. Sempre verifique a autenticidade antes de aceitar."
    },
  ],
};

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [explanation, setExplanation] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [points, setPoints] = useState(0);

  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-20, 20]);
  const opacityValue = useTransform(motionValue, [-200, 200], [0.5, 1]);
  const animControls = useAnimation();

  const currentQuestion = data["Mecanismos de Segurança"][currentIndex];

  const handleDrag = (event, info) => {
    if (info.offset.x < -100) {
      setFeedback(currentQuestion.ações.incorreta);
    } else if (info.offset.x > 100) {
      setFeedback(currentQuestion.ações.correta);
    } else {
      setFeedback('');
    }
  };

  const handleDragEnd = (event, info) => {
    const isCorrect = info.offset.x > 100;
    if (Math.abs(info.offset.x) <= 100) {
      animControls.start({ x: 0 });
    } else {
      setFeedback(isCorrect ? currentQuestion.ações.correta : currentQuestion.ações.incorreta);
      setExplanation(isCorrect ? `Parabéns! Você ganhou ${points + 10} pontos.` : `Explicação: ${currentQuestion.explicação}`);
      setPoints(prev => isCorrect ? prev + 10 : prev);
      animControls.start({ x: isCorrect ? "100vw" : "-100vw" }).then(() => {
        setShowExplanation(true);
        motionValue.set(0);
      });
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data["Mecanismos de Segurança"].length);
    setFeedback('');
    setShowExplanation(false);
    animControls.start({ x: 0 }); 
    motionValue.set(0); 
  };

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
          {currentQuestion.situação}
        </StyledCardInner>
      </StyledCard>
      <Feedback show={feedback !== ''}>{feedback}</Feedback>
      <ExplanationScreen show={showExplanation}>
        <div>
          <h3>{feedback.includes(currentQuestion.ações.correta) ? 'Você Acertou!' : 'Você Errou!'}</h3>
          <p>{explanation}</p>
          <button onClick={handleNext}>Próxima Pergunta</button>
        </div>
      </ExplanationScreen>
    </Wrapper>
  );
};

export default Card;
