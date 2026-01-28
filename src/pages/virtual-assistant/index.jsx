import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/heroBanner';
import VABoards from './components/va-boards';
import Packages from './components/packages';
import HowItWorks from './components/howItWorks';
import CoreSection from './components/core';



const VirtualAssistantPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoreSection />
      {/* <VABoards /> */}
      <Packages />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default VirtualAssistantPage;