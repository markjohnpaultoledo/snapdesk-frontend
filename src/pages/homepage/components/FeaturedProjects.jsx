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
      description: "Seamlessly manage schedules, inboxes, and client communications to keep your day running with clarity and precision.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/time-mgmt.jpg"
    },
    {
      id: 2,
      title: "Data Management & Research Support",
      description: "Deliver structured data handling, documentation, and research that ensures accuracy, efficiency, and informed decision-making.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/data-mgmt.jpg"
    },
    {
      id: 3,
      title: "Operations & Team Support",
      description: "Strengthen business performance through streamlined processes, project coordination, and reliable operational support.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/opsteamsupport.jpg"
    },
    {
      id: 4,
      title: "Bookkeeping & Financial Support",
      description: "Maintain financial accuracy and compliance with reliable bookkeeping, payroll assistance, and clear financial reporting.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/bookkeeping.jpg"
    },
    {
      id: 5,
      title: "Personal Assistance",
      description: "Provide proactive executive and lifestyle support to help you stay organised, balanced, and focused on what matters most.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/pa.jpg"
    },
    {
      id: 6,
      title: "Customer Service Support",
      description: "Enhance customer satisfaction through professional, timely communication and end-to-end support across multiple service channels.",
      image: "https://d1c5khxbu1u21j.cloudfront.net/cs.jpg"
    },
    {
      id: 7,
      title: "Technology Solutions",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
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
    <section className="relative py-20 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_55%,#ffffff_100%)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(1,214,57,0.12),transparent_36%),radial-gradient(circle_at_88%_80%,rgba(17,94,89,0.1),transparent_30%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center mb-16">

          <p className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-5 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Offshore Executive Assistance
          </p>

          <h2 className="text-5xl sm:text-6xl font-bold text-text-primary mb-7">
            Snap Into <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Effortless Support</span>
          </h2>
          <p className="text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            From business admin to personal tasks, our Philippines-based Virtual Assistants help you stay organised, efficient, and focused on growth every day.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-full border border-border bg-white px-5 py-2 text-base font-medium text-text-primary">7 support lanes</span>
            <span className="rounded-full border border-border bg-white px-5 py-2 text-base font-medium text-text-primary">Fast onboarding</span>
            <span className="rounded-full border border-border bg-white px-5 py-2 text-base font-medium text-text-primary">Governed delivery model</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[32%_68%] gap-14">

          {/* Project Navigation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-3xl font-semibold text-text-primary mb-5 text-center group-hover:text-primary transition-colors duration-300">
              <span className="inline-flex items-center justify-center gap-2">
                Talent Services
                <Icon name="Globe" size={24} className="text-primary motion-safe:animate-spin" aria-hidden="true" />
              </span>
            </h3>
            {projects?.map((project, index) =>
            <motion.div
              key={project?.id}
              onClick={() => setActiveProject(index)}
              className={`rounded-xl border p-4 cursor-pointer transition-all duration-300 ${
              activeProject === index ?
              'border-primary bg-primary/5 shadow-sm' :
              'border-border bg-white hover:border-primary/40'}`
              }
              whileHover={{ x: 5 }}>

                <div className="flex items-start space-x-4">
                  <span className={`inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                    activeProject === index ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold leading-snug transition-colors duration-300 ${
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
                className="bg-white border border-border rounded-2xl p-8 shadow-xl shadow-slate-900/5 flex flex-col md:flex-row gap-8 items-stretch min-h-[340px]"
              >
                <div className="flex-1 flex flex-col justify-center">
                  <div className="mb-4 inline-flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-primary">
                      Service Lane {activeProject + 1} of {projects.length}
                    </span>
                  </div>
                  <h3 className="text-3xl font-semibold text-text-primary mb-5 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {projects?.[activeProject]?.title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {projects?.[activeProject]?.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full px-6" iconName="PhoneCall" iconPosition="left">
                      <Link to="/contact">Book a Discovery Call</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full px-6" iconName="ArrowRight" iconPosition="right">
                      <Link to="/virtual-assistant">Explore VA Services</Link>
                    </Button>
                  </div>
                  {projects?.[activeProject]?.title === 'Technology Solutions' && (
                    <div className="mt-6">
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="btn-magnetic rounded-full px-6"
                      >
                        <a
                          href="https://tech.snapdesk.com.au/services"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Go to IT Services
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
                <div className="w-full md:w-[48%]">
                  {projects?.[activeProject]?.image ? (
                    <Image
                      src={projects?.[activeProject]?.image}
                      alt={projects?.[activeProject]?.title}
                      className="h-72 md:h-[420px] w-full object-cover rounded-xl border border-border"
                    />
                  ) : (
                    <div className="h-72 md:h-[420px] bg-muted border border-dashed border-border rounded-xl flex items-center justify-center text-sm text-text-secondary/80">
                      Image Placeholder
                    </div>
                  )}
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
