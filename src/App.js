import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Description from './Description';
import About from './About';
import Menu from './Menu';
import ImageProcessing from './ImageProcessing';
import Team from './Team';
import Akhir from './Akhir';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Description/>
      <About />
      <Menu/>
      <ImageProcessing />
      <Team />
      <Akhir/>
    </div>
  );
}

export default App;
