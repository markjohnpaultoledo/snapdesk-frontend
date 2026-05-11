import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { Link } from 'react-router-dom';

const HERO_VIDEO_URL = 'https://www.pexels.com/download/video/7706819/';
const HERO_POSTER_URL = 'https://d1c5khxbu1u21j.cloudfront.net/group-banner.png';

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[700px] items-end px-6 py-12 sm:px-10 md:min-h-[760px] md:py-16">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER_URL}
          aria-label="Customer support team at work"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(34,197,94,0.24),transparent_48%),linear-gradient(120deg,rgba(4,24,38,0.88)_0%,rgba(9,42,61,0.72)_50%,rgba(7,20,30,0.86)_100%)]" />

        <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            <Icon name="Sparkles" size={14} color="#FFFFFF" />
            Built for Continuity. Governed for Growth.
          </p>

          <h1 className="mb-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Accelerate Growth
            <br />
            and Business Opportunity
          </h1>

          <p className="max-w-2xl text-base text-white/90 sm:text-lg md:text-xl">
            Scale your operations with structured support services designed to strengthen service quality, reduce operational drag, and unlock measurable business momentum.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full px-7" iconName="ArrowRight" iconPosition="right">
              <Link to="/contact">Explore Our Solutions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/50 bg-transparent px-7 text-white hover:bg-white/15 hover:text-white"
              iconName="Calendar"
              iconPosition="left"
            >
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm sm:gap-6">
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="Shield" size={16} color="#FFFFFF" />
              Governance-led delivery
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="Clock3" size={16} color="#FFFFFF" />
              Fast deployment
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <Icon name="TrendingUp" size={16} color="#FFFFFF" />
              Outcome-focused support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;