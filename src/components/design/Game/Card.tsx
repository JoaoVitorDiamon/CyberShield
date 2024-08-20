import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useAnimation } from "framer-motion";


const StyledCard = styled(motion.div)`
   width: 590px;
  height: 654px;
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  position: relative;
  margin: auto;
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);

  @media (max-width: 1400px){
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

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const Feedback = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
`;
const data = {
  "Mecanismos de Segurança": [
    {
      "situação": "Seu navegador solicita que você aceite um certificado de segurança desconhecido.",
      "ações": {
        "correta": "Investigar a procedência do certificado e apenas aceitá-lo se for de uma fonte confiável.",
        "incorreta": "Aceitar o certificado sem verificar a sua origem."
      }
    },
    {
      "situação": "Um site pede para instalar um plugin de segurança adicional.",
      "ações": {
        "correta": "Pesquisar sobre o plugin e verificar se é necessário e seguro.",
        "incorreta": "Instalar o plugin imediatamente sem investigar sua autenticidade."
      }
    },
    {
      "situação": "Um aplicativo oferece uma nova atualização com correções de segurança.",
      "ações": {
        "correta": "Atualizar o aplicativo o mais rápido possível para garantir a segurança.",
        "incorreta": "Ignorar a atualização e continuar usando a versão antiga."
      }
    },
    {
      "situação": "Você recebe um e-mail sobre uma vulnerabilidade recém-descoberta.",
      "ações": {
        "correta": "Verificar as fontes oficiais e aplicar as correções recomendadas.",
        "incorreta": "Ignorar o e-mail, assumindo que não é relevante."
      }
    }
  ],
};
const Option = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  text-align: center;
  white-space: nowrap;
  transition: opacity 0.3s, visibility 0.3s;
`;

const OptionLeft = styled(Option)`
  left: -150px;
`;

const OptionRight = styled(Option)`
  right: -150px;
`;
const categories = Object.keys(data);

export default function Card(){
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showLeftOption, setShowLeftOption] = useState(false);
  const [showRightOption, setShowRightOption] = useState(false);
  const [feedback, setFeedback] = useState("");

  const currentCategory = categories[categoryIndex];
  const questions = data[currentCategory];
  const currentQuestion = questions[questionIndex];

  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const animControls = useAnimation();

  const handleDrag = (event, info) => {
    const threshold = 100; 

    
    if (info.offset.x < -threshold) {
      setShowLeftOption(true);
      setShowRightOption(false);
    } else if (info.offset.x > threshold) {
      setShowRightOption(true);
      setShowLeftOption(false);
    } else {
      setShowLeftOption(false);
      setShowRightOption(false);
    }
  };

  const handleDragEnd = (event, info) => {
    const threshold = 100; 

    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        
        setFeedback(`Resposta correta: ${currentQuestion.ações.correta}`);
      } else {
        
        setFeedback(`Resposta incorreta: ${currentQuestion.ações.incorreta}`);
      }
      setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
      animControls.start({ x: info.offset.x > 0 ? 300 : -300, opacity: 0 });
      setTimeout(() => {
        setFeedback("");
        animControls.start({ x: 0, opacity: 1 });
      }, 300); 
    } else {
      animControls.start({ x: 0, opacity: 1 });
    }
  };

  return (
    <AppWrapper>
    <StyledCard
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
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
        {feedback && <Feedback>{feedback}</Feedback>}
        <p>{currentQuestion.situação}</p>
        <OptionLeft >{currentQuestion.ações.incorreta}</OptionLeft>
        <OptionRight>{currentQuestion.ações.correta}</OptionRight>
      </StyledCardInner>
    </StyledCard>
  </AppWrapper>
  );
};