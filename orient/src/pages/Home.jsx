import { Link } from "react-router-dom";
import styled from "styled-components";

// 🎯 === Styled Components ===
const Wrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
  background: #f9fafb;
`;

const Navbar = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1EB980;
`;

const NavLinks = styled.div`
  a {
    margin-left: 1.5rem;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    &:hover { color: #1EB980; }
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 2rem 6rem;
  background: linear-gradient(135deg,#1EB980 0%,#0D3B2E 100%);
  color: #fff;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled(Link)`
  background: ${({outline}) => outline ? 'transparent' : '#fff'};
  color: ${({outline}) => outline ? '#fff' : '#1EB980'};
  border: 2px solid #fff;
  padding: 0.8rem 1.6rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    background: ${({outline}) => outline ? '#fff' : '#1EB980'};
    color: ${({outline}) => outline ? '#1EB980' : '#fff'};
  }
`;

const Features = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  text-align: center;
  transition: 0.2s;
  &:hover { transform: translateY(-4px); }
  h3 { font-size: 1.3rem; margin-bottom: 1rem; color: #0D3B2E; }
  p { color: #555; }
  span.premium {
    display: inline-block;
    background: #ff7f50;
    color: #fff;
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const CTA = styled.section`
  background: #1EB980;
  color: #fff;
  text-align: center;
  padding: 3rem 2rem;
  h2 { font-size: 2rem; margin-bottom: 1rem; }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  color: #777;
  font-size: 0.9rem;
`;

// 🎯 === Component ===
export default function Home() {
  return (
    <Wrapper>
      {/* Header */}
      <Navbar>
        <Logo>Orientation Congo</Logo>
        <NavLinks>
          <Link to="/login">Connexion</Link>
          <Link to="/signup">Inscription</Link>
        </NavLinks>
      </Navbar>

      {/* Hero */}
      <Hero>
        <HeroTitle>Découvrez votre chemin</HeroTitle>
        <HeroText>
          Une plateforme pour orienter vos choix scolaires et professionnels
          grâce à des outils intelligents et des conseils personnalisés.
        </HeroText>
        <HeroButtons>
          <Button to="/signup">Commencer gratuitement</Button>
          <Button to="/login" outline="true">Se connecter</Button>
        </HeroButtons>
      </Hero>

      {/* Features */}
      <Features>
        <Card>
          <h3>Orientation scolaire</h3>
          <p>Trouvez le parcours académique qui vous correspond.</p>
        </Card>
        <Card>
          <span className="premium">Premium</span>
          <h3>Conseil IA</h3>
          <p>Recevez des recommandations intelligentes basées sur vos données.</p>
        </Card>
        <Card>
          <h3>Marketplace</h3>
          <p>Accédez à des ressources et services éducatifs.</p>
        </Card>
        <Card>
          <h3>Communauté</h3>
          <p>Discutez et échangez avec d'autres étudiants et experts.</p>
        </Card>
      </Features>

      {/* CTA */}
      <CTA>
        <h2>Prêt à découvrir votre avenir ?</h2>
        <Button to="/signup">Créer un compte maintenant</Button>
      </CTA>

      {/* Footer */}
      <Footer>
        © {new Date().getFullYear()} Orientation Congo — Tous droits réservés
      </Footer>
    </Wrapper>
  );
}
