import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from 'components/AppIcon';

import Button from '../../../components/ui/Button';

const HowWeSnapIn = () => {
    const [activeProject, setActiveProject] = useState(0);

    const boards = [
        {
            title: 'Virtual Assistant Support',
            image: '',
            description: '',
            list: [
                {
                    title: "Time & Communication Management",
                    description: "Seamlessly manage schedules, inboxes, and client communications to keep your day running with clarity and precision."
                },
                {
                    title: "Data Management & Research Support",
                    description: "Deliver structured data handling, documentation, and research that ensures accuracy, efficiency, and informed decision-making."
                },
                {
                    title: "Operations & Team Support",
                    description: "Strengthen business performance through streamlined processes, project coordination, and reliable operational support."
                },
                {
                    title: "Bookkeeping & Financial Support",
                    description: "Maintain financial accuracy and compliance with reliable bookkeeping, payroll assistance, and clear financial reporting."
                },
                {
                    title: "Personal Assistance",
                    description: "Provide proactive executive and lifestyle support to help you stay organised, balanced, and focused on what matters most."
                },
                {
                    title: "Customer Service Support",
                    description: "Enhance customer satisfaction through professional, timely communication and end-to-end support across multiple service channels."
                }
            ]
        },
        {
            title: 'IT & Business Services',
            image: '',
            description: '',
            list: [
                {
                    title: "Time & Communication Management",
                    description: "Seamlessly manage schedules, inboxes, and client communications to keep your day running with clarity and precision."
                },
                {
                    title: "Data Management & Research Support",
                    description: "Deliver structured data handling, documentation, and research that ensures accuracy, efficiency, and informed decision-making."
                },
                {
                    title: "Operations & Team Support",
                    description: "Strengthen business performance through streamlined processes, project coordination, and reliable operational support."
                },
                {
                    title: "Bookkeeping & Financial Support",
                    description: "Maintain financial accuracy and compliance with reliable bookkeeping, payroll assistance, and clear financial reporting."
                },
                {
                    title: "Personal Assistance",
                    description: "Provide proactive executive and lifestyle support to help you stay organised, balanced, and focused on what matters most."
                },
                {
                    title: "Customer Service Support",
                    description: "Enhance customer satisfaction through professional, timely communication and end-to-end support across multiple service channels."
                }
            ]
        }
    ]

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
                        How we <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Snap In</span>
                    </h2>
                    <p className="text-xl text-text-secondary">
                        SnapDesk bridges the gap between Australia and Philippines by delivering tailored Virtual Assistant and IT solutions. <br/>We hand-pick, filter, and align talent to your business and lifestyle for seamless support.
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
                            <div className="grid lg:grid-cols-2 gap-20">
                                { boards.map((board, ind) => (
                                <motion.div
                                    key={activeProject}
                                    initial={{ opacity: 0, x: 0 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-card rounded-xl overflow-hidden ">

                                    {/* Project Image */}
                                    <div className="relative h-[300px] overflow-hidden">
                                        <Image
                                            src={''}
                                            alt={''}
                                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />

                                    </div>

                                    {/* Project Metrics */}
                                    <div className="py-6">
                                        <div className="">
                                            <h4 className="text-primary text-xl font-semibold mb-2">
                                                { board?.title }
                                            </h4>
                                            <ul className="space-y-2 mb-6">
                                                {board?.list?.map((list, index) => (
                                                <li key={index} className="flex items-start text-sm text-text-secondary">
                                                    <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                                                    <div>
                                                    <h4 className='text-base font-semibold text-text-primary'>{list?.title}</h4>
                                                    <p className='text-sm'>{list?.description}</p>
                                                    </div>
                                                </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Button
                                            className="btn btn-black"
                                        >

                                            Learn more
                                        </Button>
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

export default HowWeSnapIn;