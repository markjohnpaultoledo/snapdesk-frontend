import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from 'components/AppIcon';
import Button from '../../../components/ui/Button';
import "../styles/reliable-support.css";

const OurValuesSection = () => {
    const [activeProject, setActiveProject] = useState(0);

    const snapDiffData = {
        title: 'The Snap Difference',
        text: 'At SnapDesk, we believe the difference is in the details. Our services are designed with flexibility, security, and quality in mind — giving you reliable support that truly fits.',
        lists: [
            "Flexible, scalable support designed around your business needs.",
            "A trusted focus on discretion and data security.",
            "Competitive pricing that never sacrifices quality.",
            "Support that boosts productivity and lightens your daily workload."
        ]
    }

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
        <section className="snap_diff">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5">

                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
                        {snapDiffData.title}
                    </h2>
                    <p className="text-lg text-text-primary text-left">
                        {snapDiffData.text}
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
                            <div className="snap_list">
                                <ul>
                                {snapDiffData?.lists?.map((list, ind) => (
                                    <motion.div
                                        key={activeProject}
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.6, delay: (ind + 1) * 0.3}}
                                        className=""
                                        
                                    >
                                        {/* Project Metrics */}
                                        <li key={ind}>
                                            <p className="text-base text-text-secondary">
                                                { list }
                                            </p>
                                        </li>
                                    </motion.div>
                                ))}
                                </ul>
                            </div>
                            <div className="snap_brushed">
                                <h3 className="font-semibold text-text-primary">Discover how <span className="text-brown">SnapDesk</span> can support your business and lifestyle — <span className="text-brown">start with a consultation.</span></h3>
                            </div>
                            <div className="snap_action">
                                <Button
                                    className="btn btn-brown"
                                    asChild 
                                    variant="link"
                                >
                                    <a href="/" className='underline-none'>Let's Talk</a>
                                </Button>
                            </div>
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </section> 
    )
};

export default OurValuesSection;