import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const AboutTeam = () => {
    const enableAutoplay = true;
    const autoplayIntervalMs = 4500;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const teamMembers = [
        {
            id: 1,
            name: "Rotsen Magtaas",
            role: "CEO",
            image: "https://d1c5khxbu1u21j.cloudfront.net/rotsen.jpg",
            alt: "Portrait of Rotsen Magtaas",
            bio: "Builds disciplined systems that bring clarity and confidence to operations. Delivers structured solutions that drive consistent success and sustainable growth.",
            expertise: ["Governance", "Finance", "Strategic Operations"],
            contact: "contact@snapdesk.com.au"
        },
        {
            id: 2,
            name: "Christina Kawase",
            role: "COO",
            image: "https://d1c5khxbu1u21j.cloudfront.net/christina.jpg",
            alt: "Portrait of Christina Kawase",
            bio: "Oversees service delivery, operations, and client relationships to ensure alignment with business goals. Builds resilient operations that support long-term client partnerships.",
            expertise: ["Service Delivery", "Client Relations", "Operations"],
            contact: "contact@snapdesk.com.au"
        },
        {
            id: 3,
            name: "Janella Marie Claus",
            role: "Chief Service Delivery Officer",
            image: "https://d1c5khxbu1u21j.cloudfront.net/janella.jpg",
            alt: "Portrait of Janella Marie Claus",
            bio: "Directs service delivery, governance, and continuity to ensure reliable and scalable operations. Turns business goals into structured frameworks and measurable outcomes.",
            expertise: ["Delivery Governance", "Continuity", "Performance Outcomes"],
            contact: "contact@snapdesk.com.au"
        },
        {
            id: 4,
            name: "Elizabeth Caoile",
            role: "Chief Recruitment Officer",
            image: "/assets/images/no_image.png",
            alt: "Placeholder portrait for Elizabeth Caoile",
            bio: "Leads recruitment strategy and talent acquisition operations to ensure SnapDesk consistently attracts, evaluates, and hires aligned talent. Translates organizational needs into structured hiring systems and measurable staffing outcomes.",
            expertise: ["Recruitment Strategy", "Talent Acquisition", "Workforce Planning"],
            contact: "contact@snapdesk.com.au"
        },
        {
            id: 5,
            name: "Mark Toledo",
            role: "CEO, IT",
            image: "https://d1c5khxbu1u21j.cloudfront.net/leds.jpg",
            alt: "Portrait of Mark Toledo",
            bio: "Leads SnapDesk's IT direction by aligning technical strategy with business outcomes. Focuses on secure, scalable solutions that improve delivery speed and long-term reliability.",
            expertise: ["IT Strategy", "Systems Architecture", "Technology Leadership"],
            contact: "contact@snapdesk.com.au"
        },
        {
            id: 6,
            name: "Kainoa Magtaas",
            role: "COO, IT",
            image: "https://d1c5khxbu1u21j.cloudfront.net/kainoa.jpg",
            alt: "Portrait of Kainoa Magtaas",
            bio: "Oversees IT operations and execution across delivery teams to keep services dependable and efficient. Builds structured workflows that maintain quality, continuity, and operational performance.",
            expertise: ["IT Operations", "Process Governance", "Service Reliability"],
            contact: "contact@snapdesk.com.au"
        }
    ];

    const primaryLeaders = teamMembers.slice(0, 4);
    const itLeaders = teamMembers.slice(4);

    useEffect(() => {
        if (!enableAutoplay || isHovered || teamMembers.length <= 1) {
            return undefined;
        }

        const timer = window.setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
        }, autoplayIntervalMs);

        return () => window.clearInterval(timer);
    }, [enableAutoplay, isHovered, teamMembers.length]);

    const renderTeamCard = (member, index = 0) => (
        <motion.div
            key={member?.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-card rounded-xl overflow-hidden card-elevated group h-full"
        >
            {/* Profile Image */}
            <div className="relative overflow-hidden">
                <Image
                    src={member?.image}
                    alt={member?.alt}
                    className="w-full h-64 object-contain bg-muted p-2 group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div className="text-center">
                    <h3 className="text-xl font-bold text-text-primary mb-1">
                        {member?.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                        {member?.role}
                    </p>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                    {member?.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                    {member?.expertise?.map((skill, skillIndex) => (
                        <span
                            key={skillIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Contact */}
                <div className="pt-2 border-t border-border">
                    <a
                        href={`mailto:${member?.contact}`}
                        className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                    >
                        <Icon name="Mail" size={14} />
                        <span>{member?.contact}</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );


    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <AnimatePresence mode="wait">
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                            Meet The People Who Make Snap Happen
                        </h2>
                        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                            Our leadership brings together diverse experience in business operations, technology, and client services to build a client-centric organization focused on long-term partnerships.
                        </p>
                    </AnimatePresence>
                </motion.div>

                {/* Mobile Carousel */}
                <div
                    className="md:hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentSlide * 100}%` }}
                            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                        >
                            {teamMembers?.map((member, index) => (
                                <div key={member?.id} className="w-full flex-shrink-0 px-1">
                                    {renderTeamCard(member, index)}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-6">
                        {teamMembers?.map((member, index) => (
                            <button
                                key={member?.id}
                                type="button"
                                aria-label={`Go to team slide ${index + 1}`}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'w-7 bg-primary' : 'w-2.5 bg-border hover:bg-primary/60'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop/Tablet Layout */}
                <div className="hidden md:block space-y-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {primaryLeaders?.map((member, index) => renderTeamCard(member, index))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {itLeaders?.map((member, index) => (
                            <div key={member?.id} className="w-full md:max-w-sm lg:max-w-xs">
                                {renderTeamCard(member, index + primaryLeaders.length)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>);

};

export default AboutTeam;