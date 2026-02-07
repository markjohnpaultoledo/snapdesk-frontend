import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from 'components/AppImage';

const Packages = () => {
  const services = [
    {
      id: 1,
      title: "Starter Package",
      description: "Starts at $",
      features: [
        {
          title: "4hrs per day",
          text: "Efficient support for essential admin such as inbox, scheduling, and routine organisation."
        },
        {
          title: "6hrs per day",
          text: "Enhanced support covering admin, research, coordination, and daily task management."
        },
        {
          title: "8hrs per day",
          text: "Reliable full-day assistance to keep your admin and workflow running smoothly."
        },
      ],
      color: "from-accent to-accent/80"
    },
    {
      id: 2,
      title: "Growth Package",
      description: "Starts at $",
      isPopular: true,
      features: [
        {
          title: "4hrs per day",
          text: "Structured support for growing teams needing consistent daily organisation."
        },
        {
          title: "6hrs per day",
          text: "Balanced assistance across admin, documentation, research, and client engagement."
        },
        {
          title: "8hrs per day",
          text: "Robust coverage for busy teams requiring admin, operations help, and day-to-day oversight."
        },
      ],
      color: "from-primary to-primary/80"
    },
    {
      id: 3,
      title: "Enterprise Package",
      description: "Starts at $",
      features: [
        {
          title: "4hrs per day",
          text: "Ideal for high-level coordination and specialised admin requirements."
        },
        {
          title: "6hrs per day",
          text: "Strong operational support including client management, reporting, and process-driven tasks."
        },
        {
          title: "8hrs per day",
          text: "End-to-end support for complex workflows, executive admin, operations, and high-volume tasks."
        },
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
    <section className="bg-background">
        <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[40%]">
                <Image 
                    src={`/assets/images/select-package.png`}
                    width={1200}
                    height={600}
                    alt="banner image"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 sm:p-10 w-full lg:w-[60%]">
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
                        Flexible Packages for Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Business</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Get matched with a skilled Virtual Assistant who fits your workload, lifestyle, and goals -- so you can focus on what matters most.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0"
                >
                {services?.map((service) => (
                    <motion.div
                    key={service?.id}
                    variants={cardVariants}
                    className={`group relative bg-white border rounded-2xl p-5 hover:shadow-strong transition-all duration-500 card-elevated mb-5 min-w-[80%] sm:min-w-[65%] md:min-w-0 snap-center pt-7 ${service?.isPopular ? 'border-primary shadow-strong ring-1 ring-primary/20' : 'border-border'}`}
                    >
                    {service?.isPopular && (
                      <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-text-primary px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
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
                    <p className="text-text-secondary mb-6 leading-relaxed">
                        {service?.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                        {service?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-text-secondary">
                            <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                            <div>
                            <h4 className='text-lg font-semibold text-text-primary'>{feature?.title}</h4>
                            <p className='text-sm'>{feature?.text}</p>
                            </div>
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
                className="text-center mt-5"
                >
                <Link to="/services">
                    <Button
                        variant="default"
                        size="lg"
                        className="btn-magnetic animate-breathe"
                        iconName="ArrowRight"
                        iconPosition="right"
                    >
                        Request for Pricing
                    </Button>
                </Link>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Packages;