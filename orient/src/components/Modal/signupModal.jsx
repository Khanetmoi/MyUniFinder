import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SimpleModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const SimpleModalContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const SignupPromptModal = ({ show, onClose }) => {
  const navigate = useNavigate();
  if (!show) return null;

  return (
    <SimpleModalOverlay onClick={onClose}>
      <SimpleModalContent onClick={(e) => e.stopPropagation()}>
        <h3>Inscrivez-vous pour accéder à cette fonctionnalité</h3>
        <button onClick={() => { onClose(); navigate("/signup"); }}>
          S’inscrire
        </button>
      </SimpleModalContent>
    </SimpleModalOverlay>
  );
};

export default SignupPromptModal;
