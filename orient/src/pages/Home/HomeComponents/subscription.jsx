import React, {useState} from 'react';
import styled from 'styled-components';
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

const Subscription = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const { isLoggedIn } = useAuth();
    return (
        <Section>
          <SectionHeader>
            <div>
              <Title>Abonnements</Title>
              <Subtitle>Choisissez un plan adapté — gratuit pour commencer.</Subtitle>
            </div>
            <div />
          </SectionHeader>

          <Grid>
            <div style={{background:'#fff', padding:'1rem', borderRadius:12}}>
              <h3>Gratuit</h3>
              <p>Recherche d'universités • Inscription • Accès limité aux outils</p>
              <SmallBtn onClick={() => window.location.href='/signup'} style={{background:'#e6f5ef'}}>S'inscrire</SmallBtn>
            </div>

            <div style={{background:'#fff', padding:'1rem', borderRadius:12}}>
              <h3>Standard</h3>
              <p>Simulation complète • Support basique</p>
              <SmallBtn onClick={() => {
                // flow recommandé : inscrire d'abord, puis paiement
                if (!isLoggedIn) setShowLoginModal(true);
                else window.location.href='/subscribe?plan=standard';
              }} style={{background:'#1EB980', color:'#fff'}}>Choisir</SmallBtn>
            </div>

            <div style={{background:'#fff', padding:'1rem', borderRadius:12}}>
              <h3>Premium</h3>
              <p>Conseils personnalisés • Priorité • Révisions de dossier</p>
              <SmallBtn onClick={() => {
                if (!isLoggedIn) setShowLoginModal(true);
                else window.location.href='/subscribe?plan=premium';
              }} style={{background:'#0D3B2E', color:'#fff'}}>Choisir</SmallBtn>
            </div>
          </Grid>
        </Section>
    );
};

export default Subscription;