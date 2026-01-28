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
import JobListing from "./components/JobListing";

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers - Join Our Creative Technology Team | Snapdesk</title>
        <meta 
          name="description" 
          content="Join Snapdesk's team of creative technologists. Explore career opportunities where technical excellence meets creative vision. Build Technology, Designed to Evolve." 
        />
        <meta name="keywords" content="careers, jobs, creative technologist, react developer, designer, remote work, tech startup" />
        <meta property="og:title" content="Careers - Join Our Creative Technology Team | Snapdesk" />
        <meta property="og:description" content="Join Snapdesk's team of creative technologists. Explore career opportunities where technical excellence meets creative vision." />
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