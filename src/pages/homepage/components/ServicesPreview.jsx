import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "Starter Package",
      priceText: "Starts at $1,400",
      description: "Designed for businesses that need reliable day-to-day support without the need for highly specialized or strategic roles.",
      features: [
        "Email management",
        "Calendar scheduling",
        "Data entry",
        "Internet research",
      ],
      color: "from-accent to-accent/80"
    },
    {
      id: 2,
      title: "Growth Package",
      priceText: "Starts at $1,900",
      description: "Designed for businesses that need more advanced support—handling complex tasks and coordinating day-to-day operations with ease.",
      isPopular: true,
      features: [
        "Administrative support and advanced scheduling",
        "CRM updates and client communications",
        "Basic bookkeeping or invoicing",
        "Small project coordination",
      ],
      color: "from-primary to-primary/80"
    },
    {
      id: 3,
      title: "Enterprise Package",
      priceText: "Custom packages, tailored to your needs.",
      description: "Designed for businesses that require high-touch, dedicated support—capable of managing complex operations and driving strategic growth.",
      features: [
        "Strategic project management",
        "Team coordination",
        "Advanced reporting & analytics",
        "Automation support",
      ],
      color: "from-trust to-trust/80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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

  return (
    <section className="py-20 bg-muted">
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
            {/* Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span> */}
            Scale Smarter with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Flexible Packages</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From managing schedules to streamlining admin, our Virtual Assistant packages are designed to fit seamlessly into both business and lifestyle needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 mb-16"
        >
          {services?.map((service) => (
            <motion.div
              key={service?.id}
              variants={cardVariants}
              className={`group relative bg-white border rounded-2xl p-5 hover:shadow-strong transition-all duration-500 card-elevated mb-5 min-w-[80%] sm:min-w-[65%] md:min-w-0 snap-center ${service?.isPopular ? 'border-primary shadow-strong ring-1 ring-primary/20' : 'border-border'}`}
                    >
                    {service?.isPopular && (
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                        <span className="rounded-full bg-text-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                          Most Popular
                        </span>
                      </div>
                    )}
              {/* Icon */}
              {/* <div className={`w-16 h-16 bg-gradient-to-br ${service?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service?.icon} size={28} className="text-white" />
              </div> */}

              {/* Content */}
              <h3 className="text-2xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {service?.title}
              </h3>
              <p className="text-text-secondary mb-2 leading-relaxed">
                {service?.priceText}
              </p>
              <p className="text-text-primary mb-6 leading-relaxed">
                {service?.description}
              </p>
              <p className="text-sm font-semibold uppercase tracking-wide text-text-primary mb-3">
                Services May Include, But Are Not Limited To:
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-text-secondary">
                    <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-base text-text-primary">{feature}</p>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
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
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
