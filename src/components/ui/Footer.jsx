import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Virtual Assistance", href: "/virtual-assistant" },
      { name: "Technology Solutions", href: "/services" }
    ]

  },
  {
    title: "Company",
    links: [
      { name: "About SnapDesk", href: "/about" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" },
      // { name: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { name: "Book a consultation", href: "/contact" },
      // { name: "Looking for a job", href: "/virtual-assistant" }
    ]
  }
];

// {
//     title: "Social Media Platforms",
//     links: [
//       { name: "LinkedIn", href: "/portfolio" },
//       { name: "Facebook", href: "/portfolio" },
//       { name: "Instagram", href: "/portfolio" },
//       { name: "Tiktok", href: "/portfolio" }
//     ]
//   }

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/company/snapdesk-virtual-solutions/" },
    { name: "Facebook", icon: "Facebook", href: "https://www.facebook.com/profile.php?id=61589151928186" },
    { name: "Instagram", icon: "Instagram", href: "https://www.instagram.com/snapdeskvirtualsolutions" },
    // { name: "Tiktok", icon: "Tiktok", href: "#" }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const Logo = () =>
  <div className="flex items-center gap-3 group">
      <img
        src="https://d1c5khxbu1u21j.cloudfront.net/logo-snapdesk.png"
        alt="SnapDesk Logo"
        className="h-12 w-auto object-contain"
      />
      <span className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
        SnapDesk
      </span>
    </div>;


  return (
    <footer className="bg-gradient-to-br from-primary via-secondary to-primary/80 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16">

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5 bg-[rgba(255,255,255,0)]">
              <Logo />
              <p className="text-gray-200 mt-6 text-lg leading-relaxed max-w-md hover:text-white transition-colors duration-300">
                Built for Continuity. Governed for Growth.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Icon name="Mail" size={18} className="text-accent group-hover:text-white transition-colors duration-300" />
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">contact@snapdesk.com.au</span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-accent group-hover:text-white transition-colors duration-300 mt-0.5 flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L.057 23.882a.5.5 0 0 0 .61.61l6.05-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.432l-.374-.222-3.87.937.955-3.773-.244-.389A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                  <div className="space-y-1">
                    <div>
                      <a href="tel:6140233126" className="text-gray-200 hover:text-white transition-colors duration-300">+61 402 331 126</a>
                      <span className="text-gray-400 text-xs ml-1">— Virtual Assistant Support</span>
                    </div>
                    <div>
                      <a href="tel:61402331771" className="text-gray-200 hover:text-white transition-colors duration-300">+61 402 331 771</a>
                      <span className="text-gray-400 text-xs ml-1">— IT & Business Solutions</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Icon name="MapPin" size={18} className="text-accent group-hover:text-white transition-colors duration-300" />
                  <span className="text-gray-200 group-hover:text-white transition-colors duration-300">Brisbane, QLD, Australia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4 hover:text-accent transition-colors duration-300">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks?.map((social) =>
                  <a
                    key={social?.name}
                    href={social?.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                    aria-label={social?.name}>

                      <Icon
                      name={social?.icon}
                      size={18}
                      className="text-gray-200 group-hover:text-secondary transition-colors duration-300" />

                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8 bg-[rgba(176,176,176,0)]">
              {footerSections?.map((section, index) =>
              <motion.div key={section?.title} variants={itemVariants}>
                  <h4 className="text-white font-semibold text-lg mb-6 hover:text-accent transition-colors duration-300">
                    {section?.title}
                  </h4>
                  <ul className="space-y-3">
                    {section?.links?.map((link) =>
                  <li key={link?.name}>
                        <Link
                      to={link?.href}
                      className="text-gray-200 hover:text-white transition-all duration-300 flex items-center group">

                          <span className="group-hover:translate-x-1 transition-transform duration-300 text-gray-200 group-hover:text-white">
                            {link?.name}
                          </span>
                          <Icon
                        name="ArrowRight"
                        size={14}
                        className="ml-2 opacity-0 group-hover:opacity-100 text-accent transition-all duration-300" />

                        </Link>
                      </li>
                  )}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-accent/20 to-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to define your success? Snap into smarter work with <a className="underline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SnapDesk</a>
              </h3>
              {/* <p className="text-gray-200 mb-6 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
                Let's discuss how we can help you build technology solutions that drive real business results.
              </p> */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button
                  variant="default"
                  size="lg"
                  className="btn-magnetic animate-breathe"
                  iconName="ArrowRight"
                  iconPosition="right">

                  Start Your Project
                </Button> */}
                <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-magnetic border-white/30 text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                  iconName="Calendar"
                  iconPosition="left">

                  Schedule Consultation
                </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-8 border-t border-white/20">

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-200 text-sm hover:text-white transition-colors duration-300">
              © {currentYear} SnapDesk. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="text-gray-200 hover:text-white transition-colors duration-300">
                Terms and Conditions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );

};

export default Footer;