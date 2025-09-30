import React, {useState} from 'react';
import styled from 'styled-components';
import { useUI } from '../../../context/UIContext'; 
import { useAuth } from '../../../context/AuthContext';

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


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1rem;
`;



const SmallBtn = styled.button`
  padding:0.4rem 0.6rem; border-radius:8px; border:none; cursor:pointer; font-weight:600;
`;

const Orientation = () => {
     const [showSubscribeModal, setShowSubscribeModal] = useState(false);
    const { isLoggedIn } = useAuth();
    const { setShowLoginModal } = useUI();
    return (
        <Section>
          <SectionHeader>
            <div>
              <Title>Conseils personnalisés</Title>
              <Subtitle>Analysez vos points forts et recevez une direction précise pour vos projets d'étude et de carrière.</Subtitle>
            </div>
            <div />
          </SectionHeader>

          <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <p style={{margin:0,color:'#4b5563'}}>Nos conseillers (et nos outils IA) vous aident à tracer une feuille de route claire.</p>
            <div style={{marginLeft:'auto'}}>
              <SmallBtn onClick={() => {
                // feature premium -> ouvrir modal abonnement
                setShowSubscribeModal(true);
              }} style={{background:'#111827', color:'#fff'}}>Demander conseil</SmallBtn>
            </div>
          </div>
        </Section>
    );
};

export default Orientation;