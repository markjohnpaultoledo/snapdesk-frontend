import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
 
const HERO_VIDEO_URL = 'https://www.pexels.com/download/video/7706819/';
const HERO_POSTER_URL = '/assets/images/va-hero-banner.jpg';


const HeroSection = () => {
  return (
    <section className="heroBanner relative overflow-hidden">
      <div className="relative flex min-h-[560px] items-end px-4 py-8 sm:px-8 sm:py-10 md:min-h-[760px] md:px-10 md:py-16">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-[62%_center] md:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER_URL}
          aria-label="Virtual assistant at work"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,197,94,0.18),transparent_44%),linear-gradient(125deg,rgba(4,24,38,0.93)_0%,rgba(9,42,61,0.8)_48%,rgba(7,20,30,0.9)_100%)] md:bg-[radial-gradient(circle_at_72%_24%,rgba(34,197,94,0.25),transparent_48%),linear-gradient(120deg,rgba(4,24,38,0.88)_0%,rgba(9,42,61,0.7)_50%,rgba(7,20,30,0.85)_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/12 p-5 shadow-2xl backdrop-blur-md sm:rounded-3xl sm:p-7 md:p-10"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:px-4 sm:text-xs sm:tracking-[0.22em]">
            <Icon name="Sparkles" size={14} color="#FFFFFF" />
            Virtual Assistant Solutions
          </p>

          <h1 className="mb-4 text-3xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Snap Into
            <br />
            Virtual Assistant Support
            <br />
            with SnapDesk
          </h1>

          <p className="max-w-2xl text-sm text-white/90 sm:text-lg md:text-xl">
            Get matched with a skilled Virtual Assistant who fits your workload, lifestyle, and goals so you can focus on what matters most.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;