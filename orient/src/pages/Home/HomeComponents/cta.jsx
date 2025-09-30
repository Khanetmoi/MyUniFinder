import React from 'react';
import styled from 'styled-components';

const CTASection = styled.div`
  background:#111827; color:#fff; padding:2rem; border-radius:12px; margin-top:2rem; text-align:center;
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
const Cta = () => {
    return (
        <CTASection>
          <h3 style={{margin:'0 0 0.4rem 0'}}>Prêt à commencer ?</h3>
          <p style={{margin:0}}>Créez un compte gratuit et explorez vos options dès maintenant.</p>
          <div style={{marginTop:'0.9rem'}}>
            <PrimaryBtn onClick={() => window.location.href = '/signup'}>Créer un compte gratuitement</PrimaryBtn>
          </div>
        </CTASection>
    );
};

export default Cta;