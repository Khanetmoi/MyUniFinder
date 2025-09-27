import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/*
  Home.jsx
  - Squelette React + styled-components pour la page d'accueil (version non connecté)
  - Contient : Navbar, Hero, Universities section (avec search), Simulation (verrou), Conseil (verrou), Abonnements, Footer
  - Comportement : modals qui demandent de s'inscrire / s'abonner quand l'utilisateur n'est pas connecté

  Intégration :
  - installer styled-components : npm install styled-components
  - importer Home dans App.js et ajouter la route: <Route path="/" element={<Home/>} />
  - remplacer le mockAuth par ton AuthContext quand tu auras le backend
*/

// ---------------------------
// Mock Auth hook (remplace par ton AuthContext quand prêt)
// ---------------------------
function useMockAuth() {
  // pour tester bascule entre connecté / non connecté
  const [user, setUser] = useState(null);
  const login = (u) => setUser(u);
  const logout = () => setUser(null);
  return { user, login, logout };
}

// ---------------------------
// Styled components
// ---------------------------
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

const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

const Logo = styled(Link)`
  font-weight: 700;
  color: #0d3b2e;
  text-decoration: none;
  font-size: 1.25rem;
`;

const NavActions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const NavButton = styled(Link)`
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid transparent;
  background: ${props => (props.primary ? '#1EB980' : 'transparent')};
  color: ${props => (props.primary ? '#fff' : '#1f2937')};
  border-color: ${props => (props.primary ? 'transparent' : 'rgba(31,41,55,0.08)')};
`;

const Hero = styled.section`
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

const SearchBar = styled.div`
  margin-top: 0.75rem;
  display:flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.6rem 0.9rem;
  border-radius: 10px;
  border: 1px solid rgba(15,23,42,0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1rem;
`;

const UniCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 6px 18px rgba(15,23,42,0.06);
  display:flex;
  gap: 0.8rem;
  align-items: center;
`;

const UniImage = styled.div`
  width: 84px;
  height: 60px;
  border-radius: 8px;
  background: linear-gradient(180deg,#e6f5ef,#dff3ea);
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  color:#0d3b2e;
`;

const UniInfo = styled.div`
  flex:1;
`;

const UniName = styled.h3`
  margin:0 0 0.25rem 0;
  font-size:1rem;
`;

const UniMeta = styled.p`
  margin:0; color:#6b7280; font-size:0.85rem;
`;

const CardFooter = styled.div`
  display:flex;
  gap:0.5rem;
  align-items:center;
`;

const SmallBtn = styled.button`
  padding:0.4rem 0.6rem; border-radius:8px; border:none; cursor:pointer; font-weight:600;
`;

const CTASection = styled.div`
  background:#111827; color:#fff; padding:2rem; border-radius:12px; margin-top:2rem; text-align:center;
`;

const Footer = styled.footer`
  margin-top:2.5rem; padding:1.5rem 0; color:#6b7280; text-align:center;
`;

const Badge = styled.span`
  background:#ff7f50; color:#fff; padding:0.18rem 0.5rem; border-radius:8px; font-size:0.75rem; font-weight:700;
`;

// ---------------------------
// Modal (simple)
// ---------------------------
const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index: 50;
`;
const ModalCard = styled.div`
  background: #fff; border-radius:12px; padding:1.4rem; width: min(540px, 95%);
`;

// ---------------------------
// Home Component
// ---------------------------
export default function Home() {
  const auth = useMockAuth();
  const isLoggedIn = !!auth.user;

  // universities (mock)
  const sampleUnis = [
    { id: 1, name: 'Université de Kinshasa', city: 'Kinshasa', img: null },
    { id: 2, name: 'Université de Lubumbashi', city: 'Lubumbashi', img: null },
    { id: 3, name: 'Université Protestante au Congo', city: 'Kinshasa', img: null },
  ];

  const [query, setQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const filtered = sampleUnis.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <Page>
      <Container>
        <Navbar>
          <Logo to="/">Orientation Congo</Logo>

          <NavActions>
            {isLoggedIn ? (
              <>
                <NavButton to="/dashboard">Mon espace</NavButton>
                <NavButton as="button" onClick={() => auth.logout()}>Se déconnecter</NavButton>
              </>
            ) : (
              <>
                <NavButton to="/login">Connexion</NavButton>
                <NavButton to="/signup" primary>Inscription</NavButton>
              </>
            )}
          </NavActions>
        </Navbar>

        {/* HERO */}
        <Hero>
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
        </Hero>

        {/* UNIVERSITIES */}
        <Section id="universities">
          <SectionHeader>
            <div>
              <Title>Découvrez nos universités partenaires</Title>
              <Subtitle>Donnez à votre avenir toutes les chances — recherchez et explorez.</Subtitle>
            </div>
            <div>
              <Link to="/universities">Voir plus</Link>
            </div>
          </SectionHeader>

          <SearchBar>
            <Input placeholder="Rechercher une université..." value={query} onChange={e => setQuery(e.target.value)} />
            <SmallBtn onClick={() => { /* recherche déclenchée */ }}>Rechercher</SmallBtn>
          </SearchBar>

          <Grid style={{ marginTop: '1rem' }}>
            {(filtered.length ? filtered : sampleUnis).slice(0,3).map(u => (
              <UniCard key={u.id}>
                <UniImage>{u.name.split(' ')[1] ? u.name.split(' ')[1].slice(0,2) : 'UN'}</UniImage>
                <UniInfo>
                  <UniName>{u.name}</UniName>
                  <UniMeta>{u.city} • Programmes clés: Informatique, Médecine, Droit</UniMeta>
                  <CardFooter>
                    <SmallBtn onClick={() => window.location.href = `/universities/${u.id}`}>Voir</SmallBtn>
                    <SmallBtn onClick={() => {
                      // exemple : simulation accessible sans compte? tu as dit que la recherche d'université est libre
                      window.location.href = `/universities/${u.id}`;
                    }}>Détails</SmallBtn>
                  </CardFooter>
                </UniInfo>
              </UniCard>
            ))}
          </Grid>
        </Section>

        {/* SIMULATION */}
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

        {/* CONSEIL */}
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

        {/* SUBSCRIPTION */}
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

        {/* CTA Section */}
        <CTASection>
          <h3 style={{margin:'0 0 0.4rem 0'}}>Prêt à commencer ?</h3>
          <p style={{margin:0}}>Créez un compte gratuit et explorez vos options dès maintenant.</p>
          <div style={{marginTop:'0.9rem'}}>
            <PrimaryBtn onClick={() => window.location.href = '/signup'}>Créer un compte gratuitement</PrimaryBtn>
          </div>
        </CTASection>

        <Footer>
          © {new Date().getFullYear()} Orientation Congo — Tous droits réservés • <Link to="/legal">Mentions légales</Link>
        </Footer>

      </Container>

      {/* Modals */}
      {showLoginModal && (
        <ModalBackdrop onClick={() => setShowLoginModal(false)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <h3>Compte requis</h3>
            <p>Vous devez créer un compte (gratuit) pour accéder à cette fonctionnalité.</p>
            <div style={{display:'flex',gap:'0.6rem',marginTop:'0.8rem',justifyContent:'flex-end'}}>
              <SmallBtn onClick={() => setShowLoginModal(false)}>Fermer</SmallBtn>
              <NavButton to="/signup" primary onClick={() => setShowLoginModal(false)}>S'inscrire</NavButton>
            </div>
          </ModalCard>
        </ModalBackdrop>
      )}

      {showSubscribeModal && (
        <ModalBackdrop onClick={() => setShowSubscribeModal(false)}>
          <ModalCard onClick={e => e.stopPropagation()}>
            <h3>Abonnement requis</h3>
            <p>Cette fonctionnalité est réservée aux abonnés. Voulez-vous voir nos plans ?</p>
            <div style={{display:'flex',gap:'0.6rem',marginTop:'0.8rem',justifyContent:'flex-end'}}>
              <SmallBtn onClick={() => setShowSubscribeModal(false)}>Fermer</SmallBtn>
              <NavButton to="/subscriptions" primary onClick={() => setShowSubscribeModal(false)}>Voir les abonnements</NavButton>
            </div>
          </ModalCard>
        </ModalBackdrop>
      )}

    </Page>
  );
}
