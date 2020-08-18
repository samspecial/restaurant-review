import React from 'react';
import styled from 'styled-components'
const HeroSection = () => {
  return (
    <Section>
      <h1>Find Restaurants near you</h1>
      <p>Search, rate and review restaurants in your area or find your new favorite spot</p>

    </Section>
  )
}

const Section = styled.div`
padding:4rem 8rem;
height:600px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1,p {
  color:white;
}
h1{
  font-weight:700;
  font-size:3rem;
  margin-bottom:1rem;
}
p{
  font-weight:400;
  font-size:1.2rem;
  margin-bottom:2rem;
}
`
export default HeroSection;