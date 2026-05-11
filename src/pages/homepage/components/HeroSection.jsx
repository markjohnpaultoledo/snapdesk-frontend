import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { Link } from "react-router-dom";
 
const HERO_VIDEO_URL = "https://www.pexels.com/download/video/6913254/";
const HERO_POSTER_URL = "https://d1c5khxbu1u21j.cloudfront.net/home-hero-banner.png";


const HeroSection = () => {
  return (
    <section className="heroBanner relative overflow-hidden">
      <div className="relative flex min-h-[700px] items-end px-6 py-12 sm:px-10 md:min-h-[760px] md:py-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER_URL}
          aria-label="Virtual agency professionals collaborating"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(34,197,94,0.25),transparent_48%),linear-gradient(120deg,rgba(4,24,38,0.88)_0%,rgba(9,42,61,0.7)_50%,rgba(7,20,30,0.85)_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-10"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            Philippines Offshore Outsourcing
          </p>

          <h1 className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Scale Faster With
            <br />
            Philippines Offshore Teams
          </h1>

          <p className="max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            Build a reliable extension of your business through SnapDesk Virtual Assistants and IT experts from the Philippines, delivering cost-efficient support, strong English communication, and 24/7 coverage.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/50 bg-transparent px-7 text-white hover:bg-white/15 hover:text-white"
            >
              <Link to="/services">Explore Offshore Services</Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="Shield" size={16} color="#FFFFFF" />
              Secure offshore workflows
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="Clock3" size={16} color="#FFFFFF" />
              Fast onboarding
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="Globe2" size={16} color="#FFFFFF" />
              Philippines-based specialists
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;