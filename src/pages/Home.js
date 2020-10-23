import React from 'react';
import Navigation from '../components/Navigation';
import '../App.css'
import MapContainer from '../MapContainer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className="overlay"></div>
        <div>
          <Navigation />
          <HeroSection />
        </div>
      </div>
      <MapContainer />
    </div>
  )
}
export default Home;