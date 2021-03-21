import React from 'react';
import MainHeader from './components/MainHeader';
import ArquitectureGardening from './components/ArchitectureGardening';
import Electrician from './components/Electrician';
import PlumbingGasOperator from './components/PlumbingGasOperator';
import AboutUs from './components/About';
import BottomBanner from './components/BottomBanner';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ boxSizing: 'border-box' }}>
      <MainHeader />
      <ArquitectureGardening />
      <Electrician />
      <PlumbingGasOperator />
      <AboutUs />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default App;
