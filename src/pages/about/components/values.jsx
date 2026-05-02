import React from 'react';
import { motion } from 'framer-motion';

const OurValuesSection = () => {
    const ValuesData = [
        {
            title: "Accountability",
            description: "We take ownership of outcomes, not just tasks. Through structured oversight and defined responsibilities, we ensure every engagement delivers measurable value and consistent performance."
        },
        {
            title: "Structured Governance",
            description: "We operate through systems, governance, and clearly defined processes replacing ad hoc outsourcing with disciplined execution and operational clarity."
        },
        {
            title: "Strategic Workforce",
            description: "We believe quality begins at recruitment. Every professional is rigorously vetted and aligned not only to skill requirements, but to performance standards, cultural fit, and long-term partnership potential."
        },
        {
            title: "Transparency & Integrity",
            description: "We build trust through open communication, clear reporting, and ethical practices; ensuring our clients always have visibility, control, and confidence in their offshore operations."
        },
        {
            title: "Sustainable Partnership",
            description: "We prioritise continuity, stability, and long-term collaboration creating scalable support structures that grow with our clients’ businesses."
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
        hidden: { y: 24, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section className="py-14 sm:py-20 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-14">

                    <h2 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4 sm:mb-6 leading-tight">
                        What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Stand For</span>
                    </h2>
                    <p className="text-base sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        At SnapDesk, our values guide every decision we make and every service we deliver.
                        <span className="hidden sm:inline"><br /></span>{' '}
                        They reflect who we are, how we work, and the standard of support our clients can always expect.
                    </p>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className=""
                >

                    {/* Mobile carousel */}
                    <div className="md:hidden relative">
                        <div className="-mx-4 px-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <div className="flex gap-4">
                                {ValuesData.map((value, ind) => (
                                    <motion.article
                                        key={`mobile-${value?.title}`}
                                        variants={itemVariants}
                                        transition={{ delay: ind * 0.08 }}
                                        className="snap-center shrink-0 w-[88vw] rounded-2xl border border-[#d9d9d9] bg-white px-5 py-6"
                                    >
                                        <h4 className="text-text-primary text-xl font-semibold mb-3 italic leading-snug text-left">
                                            {value?.title}
                                        </h4>
                                        <p className="text-base text-text-secondary leading-relaxed text-left">
                                            {value?.description}
                                        </p>
                                    </motion.article>
                                ))}
                            </div>
                        </div>

                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fafafa] to-transparent" />
                        <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 flex items-center rounded-full bg-white/95 px-2 py-1 border border-[#d9d9d9] shadow-sm">
                            <span className="text-sm font-bold text-text-primary animate-pulse">&gt;</span>
                        </div>
                    </div>

                    {/* Tablet and desktop grid */}
                    <motion.div className="hidden md:grid md:grid-cols-2 xl:grid-cols-6 gap-6">
                        {ValuesData.map((value, ind) => (
                            <motion.article
                                key={`desktop-${value?.title}`}
                                variants={itemVariants}
                                transition={{ delay: ind * 0.08 }}
                                className={`rounded-2xl border border-[#d9d9d9] bg-white/70 backdrop-blur-sm px-6 py-7 xl:col-span-2 ${
                                    ind === ValuesData.length - 2 ? 'xl:col-start-2' : ''
                                } ${
                                    ind === ValuesData.length - 1 ? 'xl:col-start-4' : ''
                                }`}
                            >
                                <h4 className="text-text-primary text-2xl font-semibold mb-3 italic leading-snug">
                                    {value?.title}
                                </h4>
                                <p className="text-base text-text-secondary leading-relaxed">
                                    {value?.description}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>);

};

export default OurValuesSection;