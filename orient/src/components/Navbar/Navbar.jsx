// src/components/Navbar/Navbar.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



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

export default function Navigation() {
  return (
    <Navbar>
          <Logo to="/">Orientation Congo</Logo>

          <NavActions>
            
              <>
                <NavButton to="/login">Connexion</NavButton>
                <NavButton to="/signup" primary>Inscription</NavButton>
              </>
          </NavActions>
        </Navbar>
  );
}
{/* <NavActions>
            {isLoggedIn ? (
              <>
                <NavButton to="/dashboard">Mon espace</NavButton>
                <NavButton as="button" >Se déconnecter</NavButton>
              </>
            ) : (
              <>
                <NavButton to="/login">Connexion</NavButton>
                <NavButton to="/signup" primary>Inscription</NavButton>
              </>
            )}
          </NavActions> */}