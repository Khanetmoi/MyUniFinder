import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const SmallBtn = styled.button`
  padding: 0.4rem 0.8rem;
  border: none;
  background: #ccc;
  border-radius: 4px;
  cursor: pointer;
`;

const NavButton = styled(Link)`
  padding: 0.4rem 0.8rem;
  background: #4caf50;
  color: white;
  border-radius: 4px;
  text-decoration: none;
`;

const LoginModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <h3>Compte requis</h3>
        <p>Vous devez créer un compte (gratuit) pour accéder à cette fonctionnalité.</p>
        <div style={{display:"flex",gap:"0.6rem",marginTop:"0.8rem",justifyContent:"flex-end"}}>
          <SmallBtn onClick={onClose}>Fermer</SmallBtn>
          <NavButton to="/signup" onClick={onClose}>S'inscrire</NavButton>
        </div>
      </ModalCard>
    </ModalBackdrop>
  );
};

export default LoginModal;
