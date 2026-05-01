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
            image: 'https://d1c5khxbu1u21j.cloudfront.net/team-va.jpg',
            imageClassName: 'object-cover',
            description: '',
            link: '/virtual-assistant',
            external: false,
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
            image: 'https://d1c5khxbu1u21j.cloudfront.net/team-tech.jpg',
            imageClassName: 'object-contain bg-muted',
            description: '',
            link: 'https://tech.snapdesk.com.au',
            external: true,
            groups: [
                {
                    heading: "Maximize Technology",
                    description: "Build and scale modern digital infrastructure with expert-led cloud, development, and transformation services.",
                    items: ["Cloud Services", "Product Development", "Application Innovation", "DevOps & Agile Transformation"]
                },
                {
                    heading: "Mobilize Talent",
                    description: "Access structured workforce solutions that connect you with the right technical professionals when and where you need them.",
                    items: ["Managed Service Program (MSP) Support", "Talent Solutions"]
                },
                {
                    heading: "AI",
                    description: "Harness the power of artificial intelligence to automate, innovate, and accelerate your business outcomes.",
                    items: ["Applied AI Engineering", "Agent Design and Development"]
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
                                            src={board?.image}
                                            alt={board?.title}
                                            className={`w-full h-full transition-transform duration-700 hover:scale-105 ${board?.imageClassName || 'object-cover'}`} />

                                    </div>

                                    {/* Project Metrics */}
                                    <div className="py-6">
                                        <div className="">
                                            <h4 className="text-primary text-xl font-semibold mb-2">
                                                { board?.title }
                                            </h4>
                                            {board?.groups ? (
                                                <div className="space-y-4 mb-6">
                                                    {board.groups.map((group, gi) => (
                                                        <div key={gi}>
                                                            <h5 className="text-base font-semibold text-text-primary mb-1">{group.heading}</h5>
                                                            {group.description && (
                                                                <p className="text-sm text-text-secondary mb-2">{group.description}</p>
                                                            )}
                                                            <ul className="space-y-1">
                                                                {group.items.map((item, ii) => (
                                                                    <li key={ii} className="flex items-center text-sm text-text-secondary">
                                                                        <Icon name="Check" size={14} className="text-primary mr-2 flex-shrink-0" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
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
                                            )}
                                        </div>
                                        {board?.external ? (
                                            <a href={board?.link} target="_blank" rel="noreferrer">
                                                <Button className="btn btn-black">Learn more</Button>
                                            </a>
                                        ) : (
                                            <Link to={board?.link}>
                                                <Button className="btn btn-black">Learn more</Button>
                                            </Link>
                                        )}
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