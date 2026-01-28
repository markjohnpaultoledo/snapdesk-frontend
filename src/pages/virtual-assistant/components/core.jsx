import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from 'components/AppIcon';

import Button from '../../../components/ui/Button';
import "./va-boards.css";

const CoreSection = () => {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Time & Communication Management",
            description: "We manage your calendar, emails, and client communications, ensuring you never miss an appointment or important message. From scheduling to customer support, we keep your day running smoothly",
            lists: [
                {
                    title: "Calendar & Schedule Management",
                    items: [
                        'Booking appointments and meetings',
                        'Sending calendar invites and reminders',
                        'Rescheduling or canceling meetings',
                        'Managing personal and business calendars'
                    ]
                },
                {
                    title: "Email Management",
                    items: [
                        'Sorting and organizing inboxes',
                        'Responding to routine emails',
                        'Flagging or forwarding important messages',
                        'Unsubscribing from spam or irrelevant emails'
                    ]
                },
                {
                    title: "Workforce Coordination",
                    items: [
                        'Scheduling shifts, meetings, and task assignments',
                        'Tracking attendance, deadlines, and deliverables',
                        'Supporting team communication and daily check-ins',
                        'Preparing shift or roster summaries for management'
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Data Management & Research Support",
            description: "Our team manages data entry, document preparation, and research with accuracy and efficiency. We keep your records, reports, and information organized, allowing you to focus on informed decision-making.",
            lists: [
                {
                    title: "Data Entry & Database Management",
                    items: [
                        'Inputting data into CRMs or spreadsheets',
                        'Cleaning and updating customer records',
                        'Creating and managing contact lists',
                        'Generating simple reports'
                    ]
                },
                {
                    title: "Document Preparation",
                    items: [
                        'Creating and formatting documents (Word, PDF)',
                        'Designing slide decks (PowerPoint, Canva)',
                        'Preparing reports or summaries',
                        'Transcribing audio or video files'
                    ]
                },
                {
                    title: "Online Research",
                    items: [
                        'Gathering information for blog posts, reports, or presentations',
                        'Competitor or market research',
                        'Sourcing vendors or suppliers',
                        'Finding and booking travel options'
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Operations & Team Support",
            description: "We support your business operations through task tracking, cloud file management, and SOP creation. This ensures projects stay on track and your team has the structure needed to perform at their best",
            lists: [
                {
                    title: "File & Project Management",
                    items: [
                        'Organizing cloud storage (e.g. Google Drive, Dropbox)',
                        'Tracking tasks and deadlines (using tools like Trello, Asana, ClickUp)'
                    ]
                },
                {
                    title: "Creating SOPs (Standard Operating Procedures)"
                },
                {
                    title: "Assisting with onboarding new team members"
                }
            ]
        },
        {
            id: 4,
            title: "Bookkeeping & Financial Support",
            description: "We provide reliable bookkeeping, accounts management, and invoicing support. Payroll and compliance services keep your finances organised and aligned with Australian requirements.",
            lists: [
                {
                    title: "Bookkeeping Services",
                    items: [
                        'Recording daily transactions and reconciling accounts',
                        'Managing accounts payable and receivable',
                        'Preparing invoices and following up on payments'
                    ]
                },
                {
                    title: "Payroll & Compliance Support",
                    items: [
                        'Processing payroll and superannuation contributions',
                        'Assisting with BAS and GST preparation (in consultation with your accountant)',
                        'Preparing financial summaries and reports for decision-making'
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Personal Assistance",
            description: "From managing personal tasks and travel to handling lifestyle support, we help you balance work and life. Our assistance covers everything from bills and budgets to wellness appointments and family coordination",
            lists: [
                {
                    title: "Personal Admin Support",
                    items: [
                        'Manage personal calendars, set reminders for birthdays/anniversaries, and handle subscriptions',
                        'Track reimbursements, pay bills (with approval), prepare budgets/reports',
                        'Organize flights/hotels for work trips, prepare travel itineraries, and manage frequent flyer programs'
                    ]
                },
                {
                    title: "Executive Lifestyle Support",
                    items: [
                        'Book flights/hotels, plan itineraries, manage rewards',
                        'Online shopping, track orders, schedule home maintenance, send gifts',
                        'Book medical/wellness visits, manage gym/classes, research options',
                        'Draft personal notes/cards, manage RSVPs, coordinate with family/contacts'
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Customer Service Support",
            description: "Great service builds loyal customers — and we help you keep it that way. Our Virtual Assistants provide friendly, reliable support for your clients, handling inquiries, follow-ups, and after-sales care so every interaction feels personal and professional.",
            lists: [
                {
                    title: "Customer Communication",
                    items: [
                        'Responding to inquiries via email, chat, or phone',
                        'Tracking and resolving service requests promptly',
                        'Managing helpdesk platforms (e.g., Zendesk, Gorgias, Freshdesk)'
                    ]
                },
                {
                    title: "After-Sales Support",
                    items: [
                        'Handling order, booking, and billing concerns',
                        'Following up for customer feedback and satisfaction',
                        'Coordinating product or service replacements'
                    ]
                }
            ]
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
                        Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Discover how we've transformed ideas into powerful digital solutions that drive real business results.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 ">

                    {/* Project Navigation */}
                    <motion.div variants={itemVariants} className="space-y-6 max-h-[600px] overflow-y-auto pr-5 projectNavigation">
                        {projects?.map((project, index) =>
                            <motion.div
                                key={project?.id}
                                onClick={() => setActiveProject(index)}
                                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeProject === index ?
                                        'bg-card shadow-medium border-l-4 border-primary' :
                                        'bg-background hover:bg-card hover:shadow-subtle'}`
                                }
                                whileHover={{ x: 5 }}>

                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br bg-[#4a9b9b] rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${activeProject === index ? 'text-primary' : 'text-text-primary'}`
                                        }>
                                            {project?.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {project?.description}
                                        </p>
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
                                className="overflow-hidden">

                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <h3 className="text-2xl font-semibold mb-5 transition-colors duration-300 text-primary">{  projects?.[activeProject].title }</h3>
                                    <ul>
                                        {
                                            projects?.[activeProject].lists.map((list, i) => (
                                                <li key={i} className={`flex items-start text-sm text-text-secondary ${i == 0 ? '' : 'mt-5'}`}>
                                                    {/* <Icon name="Check" size={24} className="text-primary mr-3 flex-shrink-0 mt-1" /> */}
                                                    <div>
                                                        <h4 className='text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300'>{list.title}</h4>
                                                        {
                                                            list.items &&
                                                            <>
                                                                <ul>
                                                                    {
                                                                        list.items.map((item, ind) => (
                                                                            <li className="flex items-start text-sm text-text-secondary mb-2" key={ind}>
                                                                                <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                                                                                {item}
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </>
                                                        }

                                                        {/* <div class="listBody" dangerouslySetInnerHTML={{ __html: list.body }}> </div> */}
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>

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

                    <Link to="/portfolio">
                        <Button
                            variant="default"
                            size="lg"
                            className="btn-magnetic animate-breathe"
                            iconName="ArrowRight"
                            iconPosition="right">

                            Explore Full Portfolio
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>);

};

export default CoreSection;