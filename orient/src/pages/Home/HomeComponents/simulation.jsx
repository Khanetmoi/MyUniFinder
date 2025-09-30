import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../context/AuthContext';
import { useUI } from '../../../context/UIContext'; 


const Section = styled.section`
  margin-top: 2rem;
  background: transparent;
`;

const SectionHeader = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
  color: #4b5563;
  font-size: 0.95rem;
`;

const SmallBtn = styled.button`
  padding:0.4rem 0.6rem; border-radius:8px; border:none; cursor:pointer; font-weight:600;
`;

const Simulation = () => {

    const { isLoggedIn } = useAuth();
      const { setShowLoginModal } = useUI();
    return (
        <Section>
          <SectionHeader>
            <div>
              <Title>Simulation de notes</Title>
              <Subtitle>Faites une simulation pour découvrir les universités auxquelles vous êtes éligible.</Subtitle>
            </div>
            <div />
          </SectionHeader>

          <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
            <p style={{margin:0,color:'#4b5563'}}>Simulateur simple — entrez vos notes et obtenez une liste d'universités possibles.</p>
            <div style={{marginLeft:'auto'}}>
              <SmallBtn onClick={() => {
                if (!isLoggedIn) setShowLoginModal(true);
                else window.location.href = '/simulation';
              }} style={{background:'#1EB980', color:'#fff'}}>Commencer la simulation</SmallBtn>
            </div>
          </div>
        </Section>
    );
};

export default Simulation;