import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WhatWeOffer = () => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const lastTimestampRef = useRef(0);
  const singleTrackWidthRef = useRef(0);
  const stepSizeRef = useRef(400);
  const marqueeX = useMotionValue(0);

  const services = [
    {
      id: 1,
      icon: "Palette",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/client-success-governance.png",
      title: "Client Success Governance",
      description: "Aligned from day one defining success, managing risk, and setting clear boundaries for intervention.",
      features: ["Clear success metrics and expected outcomes", "Defined risk thresholds and escalation points", "Structured intervention guidelines", "Consistent, accountable, and predictable delivery"],
      color: "from-accent to-accent/80"
    },
    {
      id: 2,
      icon: "Code",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/continuity-assurance.png",
      title: "Continuity Assurance",
      description: "Continuity built in ensuring seamless transitions, resilient teams, and uninterrupted operations.",
      features: ["Clearly documented roles and responsibilities", "Structured transition and handover processes", "Backup talent ready when needed", "Operations that continue without disruption"],
      color: "from-primary to-primary/80"
    },
    {
      id: 3,
      icon: "Sparkles",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/workplace-enablement.png",
      title: "Workforce Enablement",
      description: "Talent, structured and scalable built for security, continuity, and outcome-driven delivery.",
      features: ["Role-based hiring aligned to defined outcomes", "Secure onboarding with clear documentation", "Built-in continuity and replaceability", "Teams designed to adapt without disruption"],
      color: "from-trust to-trust/80"
    },
    {
      id: 4,
      icon: "Cloud",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/risk.png",
      title: "Risk, Escalation, & Incident Governance",
      description: "Governed operations clear ownership, structured escalation, and predictable performance.",
      features: ["Defined roles, responsibilities, and ownership", "Clear escalation paths and decision flows", "Structured review and reporting cadence", "Issues identified early and resolved efficiently"],
      color: "from-trust to-trust/80"
    },
    {
      id: 5,
      icon: "Users",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/security.png",
      title: "Security & Compliance Governance",
      description: "Practical security, built in protecting your data without slowing operations.",
      features: ["Enforced NDAs and confidentiality standards", "Controlled access across tools and systems", "Clear data handling and usage guidelines", "Security that supports speed and efficiency"],
      color: "from-trust to-trust/80"
    }
    
  ];

  const marqueeServices = [...services, ...services];

  const normalizeOffset = (value) => {
    const trackWidth = singleTrackWidthRef.current;

    if (!trackWidth) {
      return value;
    }

    let nextValue = value;

    while (nextValue <= -trackWidth) {
      nextValue += trackWidth;
    }

    while (nextValue > 0) {
      nextValue -= trackWidth;
    }

    return nextValue;
  };

  useEffect(() => {
    const measureTrack = () => {
      if (!trackRef.current) {
        return;
      }

      singleTrackWidthRef.current = trackRef.current.scrollWidth / 2;

      const firstCard = trackRef.current.querySelector('[data-marquee-card="true"]');
      if (firstCard) {
        stepSizeRef.current = firstCard.getBoundingClientRect().width + 16;
      }

      marqueeX.set(normalizeOffset(marqueeX.get()));
    };

    measureTrack();
    window.addEventListener('resize', measureTrack);

    return () => {
      window.removeEventListener('resize', measureTrack);
    };
  }, [marqueeX]);

  useEffect(() => {
    const speedPxPerSecond = 38;

    const tick = (timestamp) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }

      const deltaSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (!isPaused && singleTrackWidthRef.current > 0) {
        const currentX = marqueeX.get();
        marqueeX.set(normalizeOffset(currentX - speedPxPerSecond * deltaSeconds));
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      lastTimestampRef.current = 0;
    };
  }, [isPaused, marqueeX]);

  const shiftCards = (direction) => {
    const step = stepSizeRef.current;
    const currentX = marqueeX.get();
    const delta = direction === 'prev' ? step : -step;

    marqueeX.set(normalizeOffset(currentX + delta));
    setIsPaused(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-text-secondary sm:text-xl">
            Outsourcing from the Philippines, structured for scale: dedicated offshore talent, clear governance, and delivery support designed for global businesses.
          </p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              ref={trackRef}
              className="flex w-max gap-4 py-2"
              style={{ x: marqueeX }}
            >
              {marqueeServices?.map((service, index) => (
                <div
                  key={`${service?.id}-${index}`}
                  data-marquee-card="true"
                  className="w-[340px] flex-shrink-0 px-2 sm:w-[390px] lg:w-[430px]"
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group relative bg-card border border-border rounded-2xl p-10 hover:shadow-strong transition-all duration-500 card-elevated h-full"
                  >
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${service?.color} rounded-xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300`}>
                      {service?.iconImage ? (
                        <AppImage
                          src={service?.iconImage}
                          alt={`${service?.title} icon`}
                          className="w-11 h-11 object-contain"
                        />
                      ) : (
                        <Icon name={service?.icon} size={34} className="text-white" />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-[1.7rem] font-semibold leading-tight text-text-primary mb-5 group-hover:text-primary transition-colors duration-300">
                      {service?.title}
                    </h3>
                    <p className="text-lg text-text-secondary mb-7 leading-relaxed">
                      {service?.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service?.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-base text-text-secondary">
                          <Icon name="Check" size={18} className="text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Show previous card"
              onClick={() => shiftCards('prev')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <button
              type="button"
              aria-label={isPaused ? 'Resume auto scroll' : 'Pause auto scroll'}
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex min-w-[108px] items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              {isPaused ? 'Play' : 'Pause'}
            </button>

            <button
              type="button"
              aria-label="Show next card"
              onClick={() => shiftCards('next')}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/virtual-assistant">
            <Button
              variant="outline"
              size="lg"
              className="btn-magnetic"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;