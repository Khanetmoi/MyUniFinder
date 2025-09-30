// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";



// blog section
const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const BlogSection = styled.section`
  padding: 80px 20px;
  background: #f9f9f9;
  text-align: center;
`;

const BlogCards = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  padding-bottom: 20px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const BlogTitle = styled.h3`
  font-size: 1.3rem;
  margin: 20px 0 10px;
`;

const BlogExcerpt = styled.p`
  font-size: 0.95rem;
  padding: 0 20px;
  color: #555;
`;

const BlogButton = styled.button`
  margin-top: 10px;
  padding: 10px 18px;
  background: #2b6cb0;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover { background: #234e85; }
`;

export default function Blog() {
     const [showSignupModal, setShowSignupModal] = useState(false);
  return (
    <BlogSection>
            
  <SectionTitle>Découvrez nos articles</SectionTitle>
  <BlogCards>
    {[1, 2, 3].map((i) => (
      <BlogCard key={i}>
        <BlogImage src={`https://picsum.photos/400/200?random=${i}`} alt="blog" />
        <BlogTitle>Article exemple {i}</BlogTitle>
        <BlogExcerpt>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lire la suite...
        </BlogExcerpt>
        <BlogButton onClick={() => setShowSignupModal(true)}>Lire l’article</BlogButton>
      </BlogCard>
    ))}
  </BlogCards>
</BlogSection>
  );
}