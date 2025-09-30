import React from "react";
import styled from "styled-components";


import { useAuth } from '../../../context/AuthContext';
import { useUI } from '../../../context/UIContext';


const HeroContainer = styled.section`
  background: linear-gradient(135deg,#1EB980 0%,#0D3B2E 100%);
  color: #fff;
  border-radius: 14px;
  padding: 3.5rem 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  max-width: 820px;
  margin: 0 auto 1.5rem auto;
  opacity: 0.95;
`;

const HeroCTAs = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 1rem;
`;

const PrimaryBtn = styled.button`
  background: #fff;
  color: #0d3b2e;
  font-weight: 700;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
`;

const GhostBtn = styled.button`
  background: transparent;
  color: #fff;
  font-weight: 600;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 2px solid rgba(255,255,255,0.18);
  cursor: pointer;
`;

const Hero = () => {

    const { isLoggedIn } = useAuth();
  const { setShowLoginModal } = useUI();
    return (
        <HeroContainer>
          <HeroTitle>Construisez votre avenir académique dès aujourd'hui</HeroTitle>
          <HeroSubtitle>
            Orientation Congo réunit des outils, des universités partenaires et des conseils personnalisés
            pour vous aider à choisir la meilleure voie selon vos forces et ambitions.
          </HeroSubtitle>

          <HeroCTAs>
            <PrimaryBtn onClick={() => {
              // si non connecté on peut renvoyer vers /signup ou ouvrir le search
              window.location.href = '/#universities';
            }}>Découvrir les universités</PrimaryBtn>

            <GhostBtn onClick={() => {
              // si besoin : ouvrir la simulation mais vérifier l'auth
              if (!isLoggedIn) setShowLoginModal(true);
              else window.location.href = '/dashboard';
            }}>Commencer la simulation</GhostBtn>
          </HeroCTAs>
        </HeroContainer>
    );
};

export default Hero;