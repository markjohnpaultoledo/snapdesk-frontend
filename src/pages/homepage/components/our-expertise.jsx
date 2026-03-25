import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ServicesPreview = () => {
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
        text: "A skilled workforce selected for expertise and fit, with performance and processes governed to deliver client success reliably and consistently."
      }
    ]
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
        >
            { HomepageWhyChoose?.imageData?.map((data, ind) => (
                <motion.div
                    key={ind}
                    variants={cardVariants}
                    className="rounded-2xl bg-white border border-border p-6 shadow-sm"
                >
                <div>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Image
                          src={`/assets/images/${data?.imageFile}`}
                          alt={data?.title}
                          className="w-10 h-10 object-contain"
                        />
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-text-primary">{ data?.title }</h3>
                        <p className="text-sm text-text-secondary mt-2">{ data?.text }</p>
                    </div>
                </div>
                </motion.div>
            ))
                
            }
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
