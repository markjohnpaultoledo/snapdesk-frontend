import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ServicesPreview = () => {
  const enableAutoplay = true;
  const autoplayIntervalMs = 4500;

  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const HomepageWhyChoose = {
    title: "Why Choose SnapDesk?",
    ctaText: "Get Started",
    ctaButtonColor: "sp",
    ctaLink: "/virtual-assistant",
    imageData: [
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
        text: "Access controls, data protection standards, and compliance-aware workflows are built into our operating structure—reducing exposure and strengthening regulatory readiness."
      },
      {
        imageFile: "Target.png",
        title: "Outcome-Focused, Experienced Team",
        text: "A skilled workforce selected for expertise and fit, with performance and processes governed to deliver client success reliably and consistently"
      }
    ]
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = useMemo(() => {
    return Math.ceil(HomepageWhyChoose.imageData.length / cardsPerView);
  }, [HomepageWhyChoose.imageData.length, cardsPerView]);

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (!enableAutoplay || isHovered || totalPages <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, autoplayIntervalMs);

    return () => window.clearInterval(timer);
  }, [enableAutoplay, autoplayIntervalMs, isHovered, totalPages]);

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
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentPage * 100}%` }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) handleNext();
                  if (info.offset.x > 70) handlePrev();
                }}
              >
                {HomepageWhyChoose?.imageData?.map((data, ind) => (
                  <div
                    key={ind}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl bg-white border border-border p-6 shadow-sm h-full"
                    >
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Image
                            src={`/assets/images/${data?.imageFile}`}
                            alt={data?.title}
                            className="w-40 h-40 object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-text-primary">{data?.title}</h3>
                          <p className="text-sm text-text-secondary mt-2">{data?.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={handlePrev}
              className="hidden sm:flex absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-border text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-soft"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <button
              type="button"
              aria-label="Next slide"
              onClick={handleNext}
              className="hidden sm:flex absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-border text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-soft"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalPages })?.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-primary/60'
                }`}
              />
            ))}
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
          <Link to="/services">
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
