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
      <div className="relative flex min-h-[560px] items-end px-4 py-8 sm:min-h-[660px] sm:px-8 sm:py-10 md:min-h-[760px] md:px-10 md:py-16">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[66%_center] sm:object-[62%_center] md:object-center"
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.18),transparent_44%),linear-gradient(125deg,rgba(4,24,38,0.93)_0%,rgba(9,42,61,0.8)_48%,rgba(7,20,30,0.9)_100%)] md:bg-[radial-gradient(circle_at_72%_24%,rgba(34,197,94,0.25),transparent_48%),linear-gradient(120deg,rgba(4,24,38,0.88)_0%,rgba(9,42,61,0.7)_50%,rgba(7,20,30,0.85)_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-7 md:max-w-3xl md:p-10"
        >
          <p className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            Philippines Offshore Outsourcing
          </p>

          <h1 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Scale Faster With
            <br />
            Philippines Offshore Teams
          </h1>

          <p className="max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">
            Build a reliable extension of your business through SnapDesk Virtual Assistants and IT experts from the Philippines, delivering cost-efficient support, strong English communication, and 24/7 coverage.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
            <Button asChild size="default" className="rounded-full px-6 sm:px-7">
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="default"
              className="rounded-full border-white/50 bg-transparent px-6 text-white hover:bg-white/15 hover:text-white sm:px-7"
            >
              <Link to="/virtual-assistant">Explore Offshore Services</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm sm:mt-7 sm:gap-6">
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