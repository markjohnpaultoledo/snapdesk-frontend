import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const phrases = [
    "Technology with Soul",
    "Digital Experiences that Matter",
    "Innovation Meets Design",
    "Your Future Partner"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-accent/10 to-trust/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-trust/10 to-primary/10 rounded-full blur-xl"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl sm:text-5xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            You're reliable support team, in a {' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Snap.
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg text-text-secondary  mx-auto leading-relaxed">
            <b>SnapDesk Virtual Solutions</b> helps professionals, entrepreneurs, and businesses of every size unlock growth with dedicated Virtual Assistant and IT services. We streamline day-to-day operations and technology needs with a strong focus on efficiency, confidentiality, and service quality.
            <br/><br/>
            Whether you're an executive, a startup founder, or leading a growing team, SnapDesk works as an extension of your business -- delivering reliable, professional support that scales with you, without the overhead of in-house staff.
          </p>
          
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;