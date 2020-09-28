import React from 'react';
import Navigation from '../components/Navigation';
import '../App.css'
import App1 from '../App1';
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
      <App1 />
    </div>
  )
}
export default Home;