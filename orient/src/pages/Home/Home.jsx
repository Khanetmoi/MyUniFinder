import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from '../../components/Navbar/Navbar';
import Blog from '../../components/Blog/Blog';
import SubscribeModal from '../../components/Modal/SubscribeModal';
import LoginModal from '../../components/Modal/loginModal';
import SignupPromptModal from '../../components/Modal/signupModal';
import SiteFooter from '../../components/Footer/Footer';

import Hero from './HomeComponents/Hero';
import Universities from './HomeComponents/universities';
import Simulation from './HomeComponents/simulation';
import Orientation from './HomeComponents/orientation';
import Subscription from './HomeComponents/subscription';
import Cta from './HomeComponents/cta';





const Page = styled.div`
  font-family: Inter, Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #1f2937;
  background: #f7fafc;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
`;

// ---------------------------
// Home Component
// ---------------------------
export default function Home() {
    
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  return (
    <Page>
      <Container>
        
        <Navigation/>
        <Hero/>
        <Universities/>
        <Simulation/>
        <Orientation/>
        <Subscription/>
        <Blog/>
        <Cta/>
        <SiteFooter />

      </Container>
      <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
      <SignupPromptModal show={showSignupModal} onClose={() => setShowSignupModal(false)} />
      <SubscribeModal show={showSubscribeModal} onClose={() => setShowSubscribeModal(false)} />
    </Page>
  );
}
