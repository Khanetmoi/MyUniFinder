import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px,1fr));
  gap: 1rem;
`;

const Universities = () => {

    const sampleUnis = [
    { id: 1, name: 'Université Marien Ngouabi', city: 'Brazzaville', img: null },
    { id: 2, name: 'Université de kinsoundi', city: 'Brazzaville', img: null },
    { id: 3, name: 'Université Protestante au Congo', city: 'Pointe-noire', img: null },
  ];
  const [query, setQuery] = useState('');
  const filtered = sampleUnis.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  
  
    return (
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
    );
};

export default Universities;