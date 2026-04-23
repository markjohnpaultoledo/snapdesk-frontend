import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WhatWeOffer = () => {
  const enableAutoplay = true;
  const autoplayIntervalMs = 4500;

  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      icon: "Palette",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/client-success-governance.png",
      title: "Client Success Governance",
      description: "Aligned from day one—defining success, managing risk, and setting clear boundaries for intervention.",
      features: ["Clear success metrics and expected outcomes", "Defined risk thresholds and escalation points", "Structured intervention guidelines", "Consistent, accountable, and predictable delivery"],
      color: "from-accent to-accent/80"
    },
    {
      id: 2,
      icon: "Code",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/continuity-assurance.png",
      title: "Continuity Assurance",
      description: "Continuity built in—ensuring seamless transitions, resilient teams, and uninterrupted operations.",
      features: ["Clearly documented roles and responsibilities", "Structured transition and handover processes", "Backup talent ready when needed", "Operations that continue without disruption"],
      color: "from-primary to-primary/80"
    },
    {
      id: 3,
      icon: "Sparkles",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/workplace-enablement.png",
      title: "Workforce Enablement",
      description: "Talent, structured and scalable—built for security, continuity, and outcome-driven delivery.",
      features: ["Role-based hiring aligned to defined outcomes", "Secure onboarding with clear documentation", "Built-in continuity and replaceability", "Teams designed to adapt without disruption"],
      color: "from-trust to-trust/80"
    },
    {
      id: 4,
      icon: "Cloud",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/risk.png",
      title: "Risk, Escalation, & Incident Governance",
      description: "Governed operations—clear ownership, structured escalation, and predictable performance.",
      features: ["Defined roles, responsibilities, and ownership", "Clear escalation paths and decision flows", "Structured review and reporting cadence", "Issues identified early and resolved efficiently"],
      color: "from-trust to-trust/80"
    },
    {
      id: 5,
      icon: "Users",
      iconImage: "https://d1c5khxbu1u21j.cloudfront.net/security.png",
      title: "Security & Compliance Governance",
      description: "Practical security, built in—protecting your data without slowing operations.",
      features: ["Enforced NDAs and confidentiality standards", "Controlled access across tools and systems", "Clear data handling and usage guidelines", "Security that supports speed and efficiency"],
      color: "from-trust to-trust/80"
    }
    
  ];

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
    return Math.ceil(services.length / cardsPerView);
  }, [services.length, cardsPerView]);

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
  }, [enableAutoplay, isHovered, totalPages]);

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
        </motion.div>

        {/* Services Carousel */}
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
                {services?.map((service) => (
                  <div
                    key={service?.id}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-strong transition-all duration-500 card-elevated h-full"
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${service?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        {service?.iconImage ? (
                          <AppImage
                            src={service?.iconImage}
                            alt={`${service?.title} icon`}
                            className="w-9 h-9 object-contain"
                          />
                        ) : (
                          <Icon name={service?.icon} size={28} className="text-white" />
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                        {service?.title}
                      </h3>
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {service?.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service?.features?.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-text-secondary">
                            <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
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

            <button
              type="button"
              aria-label="Previous services"
              onClick={handlePrev}
              className="hidden sm:flex absolute -left-2 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-soft"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <button
              type="button"
              aria-label="Next services"
              onClick={handleNext}
              className="hidden sm:flex absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-card border border-border text-text-primary hover:bg-primary hover:text-white transition-colors duration-300 shadow-soft"
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