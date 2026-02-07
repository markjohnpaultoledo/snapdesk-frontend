import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from 'components/AppImage';

const HowItWorks = () => {
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

    const HowItWorksData = [
        {
            img: 'VA_page_Contact_Discovery.png',
            title: 'Contact & Discovery',
            text: 'Reach out and tell us what you need.'
        },
        {
            img: 'VA_page_Proposal_Agreement.png',
            title: 'Proposal & Agreement',
            text: 'Get a customised proposal, sign the contract, and secure it with a deposit'
        },
        {
            img: 'VA_Page_ Sourcing_your_VA.png',
            title: 'Sourcing your VA',
            text: 'We start internal hiring and endorse the best-fit candidates.'
        },
        {
            img: 'VA_page_Secure_your_VA.png',
            title: 'Secure your VA',
            text: 'Once you choose, your Virtual Assistant is officially hired and ready to support you.'
        }
    ]

    return (
        <section className="bg-muted py-10">
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
                        {/* Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span> */}
                        How It Works with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SnapDesk</span>
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
                    className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0"
                >
                    {HowItWorksData?.map((card, ind) => (
                        <motion.div
                            key={ind}
                            variants={cardVariants}
                            className="group text-center relative bg-[#fbfaf2] border-2 border-border border-[#7e7e7d] rounded-2xl p-5 hover:shadow-strong transition-all duration-500 card-elevated mb-5 min-w-[80%] sm:min-w-[65%] md:min-w-0 snap-center"
                        >
                            <Image
                                src={`/assets/images/${card.img}`}
                                width={167}
                                height={167}
                                alt="banner image"
                                className="h-[167px] w-[167px] object-contain block mx-auto mb-6"
                            />
                            

                            {/* Content */}
                            <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
                                {card?.title}
                            </h3>
                            <p className="text-sm text-text-primary mb-6 leading-relaxed">
                                {card?.text}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <p className="text-xl text-text-primary max-w-3xl mx-auto">
                        Ready to find the perfect Virtual Assistant to match your business and lifestyle? <br/> Book your consultation today!
                    </p>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-5"
                >
                    <Link to="/contact">
                        <Button
                            variant="default"
                            size="lg"
                            className="btn-magnetic animate-breathe"
                            iconName="ArrowRight"
                            iconPosition="right"
                        >
                            Book your consultation today!
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;