import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ServicesPreview = () => {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const frameRef = useRef(null);
  const lastTimestampRef = useRef(0);
  const singleTrackWidthRef = useRef(0);
  const stepSizeRef = useRef(360);
  const marqueeX = useMotionValue(0);

  const whyChooseItems = [
    {
      imageFile: "Building2.png",
      title: "Enterprise Governance Framework",
      text: "Our governed delivery model embeds structured oversight, documented processes, and defined accountability into every engagement; ensuring consistency, auditability, and operational control."
    },
    {
      imageFile: "ShieldCheck.png",
      title: "Business Continuity & Operational Resilience",
      text: "Redundancy planning, knowledge documentation, and transition protocols safeguard your operations against disruption and personnel risk."
    },
    {
      imageFile: "AlertTriangle.png",
      title: "Risk, Escalation & Incident Management Controls",
      text: "Formal escalation pathways and issue-resolution governance protect service integrity and maintain performance standards."
    },
    {
      imageFile: "LockKeyhole.png",
      title: "Security & Compliance Alignment",
      text: "Access controls, data protection standards, and compliance-aware workflows are built into our operating structure, reducing exposure and strengthening regulatory readiness."
    },
    {
      imageFile: "Target.png",
      title: "Outcome-Focused, Experienced Team",
      text: "A skilled workforce selected for expertise and fit, with performance and processes governed to deliver client success reliably and consistently."
    }
  ];

  const marqueeItems = [...whyChooseItems, ...whyChooseItems];

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
    const speedPxPerSecond = 36;

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
    <section className="py-20 bg-[#fafafa]">
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
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SnapDesk?</span>
          </h2>
        </motion.div>

        {/* Why Choose Carousel */}
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
              {marqueeItems.map((data, index) => (
                <div
                  key={`${data.title}-${index}`}
                  data-marquee-card="true"
                  className="w-[320px] flex-shrink-0 px-2 sm:w-[360px] lg:w-[390px]"
                >
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="group rounded-2xl bg-white border border-border p-8 shadow-sm h-full"
                  >
                    <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={`/assets/images/${data.imageFile}`}
                        alt={data.title}
                        className="w-11 h-11 object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold leading-tight text-text-primary">{data.title}</h3>
                      <p className="text-base text-text-secondary mt-4 leading-relaxed">{data.text}</p>
                    </div>
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
          <Link to="/contact">
            <Button
              variant="default"
              size="lg"
              className="btn-magnetic"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Ready to Snap in?
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
