import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Time & Communication Management",
      description: "Seamlessly manage schedules, inboxes, and client communications to keep your day running with clarity and precision."
    },
    {
      id: 2,
      title: "Data Management & Research Support",
      description: "Deliver structured data handling, documentation, and research that ensures accuracy, efficiency, and informed decision-making."
    },
    {
      id: 3,
      title: "Operations & Team Support",
      description: "Strengthen business performance through streamlined processes, project coordination, and reliable operational support."
    },
    {
      id: 4,
      title: "Bookkeeping & Financial Support",
      description: "Maintain financial accuracy and compliance with reliable bookkeeping, payroll assistance, and clear financial reporting."
    },
    {
      id: 5,
      title: "Executive Personal Assistance",
      description: "Provide proactive executive and lifestyle support to help you stay organised, balanced, and focused on what matters most."
    },
    {
      id: 6,
      title: "Customer Service Support",
      description: "Enhance customer satisfaction through professional, timely communication and end-to-end support across multiple service channels."
    },
    {
      id: 7,
      title: "Technology Solutions",
      description: "Create seamless digital experiences — powered by strategy, AI, and modern digital solutions."
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
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
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Snap Into <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Effortless Support</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From business admin to personal tasks, our Virtual Assistants help you stay organised, efficient, and stress-free -- every day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[30%_70%] gap-12">

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary mb-4 text-center group-hover:text-primary transition-colors duration-300">
              <span className="inline-flex items-center justify-center gap-2">
                Core Services
                <Icon name="Globe" size={20} className="text-primary motion-safe:animate-spin" aria-hidden="true" />
              </span>
            </h3>
            {projects?.map((project, index) =>
            <motion.div
              key={project?.id}
              onClick={() => setActiveProject(index)}
              className={`p-3 cursor-pointer transition-all duration-300 ${
              activeProject === index ?
              'border-l-4 border-[#01d639]' :
              ''}`
              }
              whileHover={{ x: 5 }}>

                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <h3 className={`text-med font-semibold transition-colors duration-300 ${
                  activeProject === index ? 'text-text-primary' : 'text-primary'}`
                  }>
                      {project?.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Project Display */}
          <motion.div variants={itemVariants} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-stretch min-h-[240px]"
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                    {projects?.[activeProject]?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {projects?.[activeProject]?.description}
                  </p>
                </div>
                <div className="w-full md:w-[45%]">
                  <div className="h-48 md:h-full min-h-[180px] bg-muted border border-dashed border-border rounded-xl flex items-center justify-center text-sm text-text-secondary/80">
                    Image Placeholder
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16">

          <Link to="/virtual-assistant">
            <Button
              variant="default"
              size="lg"
              className="btn-magnetic"
              iconName="ArrowRight"
              iconPosition="right">

              Explore All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>);

};

export default FeaturedProjects;