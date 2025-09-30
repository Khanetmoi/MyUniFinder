import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 🔹 Example styled-components (replace with your own)
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
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


// 🔹 Component
const SubscribeModal = ({ show, onClose }) => {
  if (!show) return null; // Don’t render if closed

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalCard onClick={e => e.stopPropagation()}>
        <h3>Abonnement requis</h3>
        <p>Cette fonctionnalité est réservée aux abonnés. Voulez-vous voir nos plans ?</p>
        <div style={{ display:'flex', gap:'0.6rem', marginTop:'0.8rem', justifyContent:'flex-end' }}>
          <SmallBtn onClick={onClose}>Fermer</SmallBtn>
          <NavButton to="/subscriptions" onClick={onClose}>
            Voir les abonnements
          </NavButton>
        </div>
      </ModalCard>
    </ModalBackdrop>
  );
};

export default SubscribeModal;
