import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { Link } from "react-router-dom";
import Image from 'components/AppImage';


const HeroBanner = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const phrases = [
    "Where Innovation Meets Intelligent Design",
    "From Strategy to Experience, We Build the Future",
    "Your Global Partner in Intelligent Digital Experiences"
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
    <section className='heroBanner'>
      <div className="flex flex-wrap min-h-[450px] relative items-end py-[50px]">
          <div className="absolute top-0 bottom-0 left-0 right-0">
              <Image
                  src={`/assets/images/careers-hero-banner.jpg`}
                  width={1200}
                  height={600}
                  alt="banner image"
                  className="w-full h-full object-cover"
              />
          </div>
          <div className='w-full px-4 sm:px-6 lg:px-8'>

          <div className="relative z-10">
              <h1 className='text-5xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300'>Grow Your Career, One Snap at a Time</h1>
              <p className='text-white text-xl'>We help talented Virtual Assistants and IT professionals find meaningful, long-term roles with Australian
clients — offering support, training, and stability every step of the way.</p>
          </div>
          </div>
          
      </div>
    </section>
  );
};

export default HeroBanner;