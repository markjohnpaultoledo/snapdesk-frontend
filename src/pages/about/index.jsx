import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import OriginStory from './components/OriginStory';
import LeadershipCollective from './components/LeadershipCollective';
import CultureCanvas from './components/CultureCanvas';
import ImpactMetrics from './components/ImpactMetrics';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import OurPurpose from './components/ourpurpose';
import HowWeSnapIn from './components/howwesnap';
import Footer from '../../components/ui/Footer';
import OurValuesSection from './components/values';
import ReliableSupportTeam from './components/reliable-support-team';
import AboutTeam from './components/about-team';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Snapdesk | Technology, Designed to Evolve</title>
        <meta 
          name="description" 
          content="Discover Snapdesk's journey from vision to revolution. Meet our leadership collective, explore our culture of human-centered innovation, and see the measurable impact we create for clients worldwide." 
        />
        <meta name="keywords" content="Snapdesk, about us, technology company, human-centered design, innovation, leadership team, company culture, tech startup" />
        <meta property="og:title" content="About Us - Snapdesk | Technology, Designed to Evolve" />
        <meta property="og:description" content="The perfect synthesis of technical excellence and human-centered design philosophy. Discover our story, team, and impact." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Snapdesk" />
        <meta name="twitter:description" content="Technology, Designed to Evolve - Where cutting-edge innovation meets mindful design" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          <OurPurpose />
          
          <HowWeSnapIn />

          <OurValuesSection />

          <ReliableSupportTeam />

          <AboutTeam />
          {/* Origin Story */}
          {/* <OriginStory /> */}
          
          {/* Leadership Collective */}
          {/* <LeadershipCollective /> */}
          
          {/* Culture Canvas */}
          {/* <CultureCanvas /> */}
          
          {/* Impact Metrics */}
          {/* <ImpactMetrics /> */}
          
          {/* Social Proof */}
          {/* <SocialProof /> */}
          
          
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;