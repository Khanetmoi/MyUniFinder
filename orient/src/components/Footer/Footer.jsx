import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #f9fafb; /* light gray to match page sections */
  color: #374151;     /* dark gray text */
  padding: 3rem 0 2rem;
  border-top: 1px solid #e5e7eb; /* subtle divider */
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Column = styled.div``;

const Title = styled.h3`
  font-weight: 600;
  color: #111827; /* slightly darker for headings */
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
`;

const Text = styled.p`
  margin: 0.3rem 0;
  color: #4b5563;
  font-size: 0.95rem;
`;

const LinkText = styled.a`
  color: #2563eb; /* primary accent (blue like CTAs) */
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Copy = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #6b7280;
`;

const SiteFooter = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Column>
          <Title>Contacts</Title>
          <Text>
            Email :{" "}
            <LinkText href="mailto:contact@orientationplus.cg">
              contact@orientationplus.cg
            </LinkText>
          </Text>
          <Text>
            Tél :{" "}
            <LinkText href="tel:+242060000000">+242 06 000 0000</LinkText>
          </Text>
        </Column>

        <Column>
          <Title>Partenaires</Title>
          <Text>Université A</Text>
          <Text>Université B</Text>
          <Text>Université C</Text>
        </Column>

        <Column>
          <Title>Réseaux sociaux</Title>
          <Text><LinkText href="#">Facebook</LinkText></Text>
          <Text><LinkText href="#">Instagram</LinkText></Text>
          <Text><LinkText href="#">LinkedIn</LinkText></Text>
        </Column>
      </FooterContainer>

      <Copy>
        © {new Date().getFullYear()} Orientation Congo — Tous droits réservés.
      </Copy>
    </FooterWrapper>
  );
};

export default SiteFooter;
