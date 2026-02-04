import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CultureSection from './components/CultureSection';
import TeamSection from './components/TeamSection';
import OpenPositions from './components/OpenPositions';
import BenefitsSection from './components/BenefitsSection';
import ApplicationProcess from './components/ApplicationProcess';
import Footer from 'components/ui/Footer';
import HeroBanner from './components/banner';
import JobListing from "./components/JobListings";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Snap Into Growth with SnapDesk</title>
        <meta 
          name="description" 
          content="We make your workday simpler — with reliable Virtual Assistants and IT support tailored to your needs." 
        />
        <meta name="keywords" content="virtual assistant, va, remote work, flexible schedule, customer service, support, tech support, virtual assistant jobs" />
        <meta property="og:title" content="Snap Into Growth with SnapDesk" />
        <meta property="og:description" content="We make your workday simpler — with reliable Virtual Assistants and IT support tailored to your needs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/careers" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
          <HeroBanner />
          <JobListing />
          {/* <HeroSection />
          <CultureSection />
          <TeamSection />
          <OpenPositions />
          <BenefitsSection />
          <ApplicationProcess /> */}
        

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;