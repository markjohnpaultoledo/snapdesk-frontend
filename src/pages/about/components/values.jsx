import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from 'components/AppIcon';

import Button from '../../../components/ui/Button';

const OurValuesSection = () => {
    const [activeProject, setActiveProject] = useState(0);

    const ValuesData = [
        {
            title: "Professionalism",
            description: "We deliver reliable, respectful, and high-quality support in every interaction."
        },
        {
            title: "Confidentiality",
            description: "Your trust matters -- we protect your information with the highest standards of discretion and data security."
        },
        {
            title: "Efficiency",
            description: "We help you work smarter by streamlining processes and saving you valuable time."
        },
        {
            title: "Integrity",
            description: "Built on honesty and accountability, we create partnerships that last."
        },
        {
            title: "Continuous Improvement",
            description: "We adapt, innovate, and grow alongside our clients to meet changing needs."
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
        <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16">

                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                        What We Stand For
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        At SnapDesk, our values guide every decision we make and every service we deliver. They reflect who we are, how we work, and the standard of support our clients can always expect.
                    </p>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="">

                    {/* Project Display */}
                    <motion.div variants={itemVariants} className="relative">
                        <AnimatePresence mode="wait">
                            <div className="flex flex-wrap justify-center gap-20">
                                {ValuesData.map((board, ind) => (
                                    <motion.div
                                        key={activeProject}
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.6, delay: (ind + 1) * 0.3}}
                                        className="bg-card rounded-xl overflow-hidden py-6 w-[calc(33.3%-53.3px)]"
                                        
                                    >
                                        {/* Project Metrics */}
                                        <div key={ind}>
                                            <div className="text-center border-t border-[#cfcfcf] pt-5">
                                                <h4 className="text-text-primary text-2xl font-semibold mb-2 italic">
                                                    {board?.title}
                                                </h4>
                                                <p className="text-base text-text-secondary">
                                                    { board?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

            </div>
        </section>);

};

export default OurValuesSection;