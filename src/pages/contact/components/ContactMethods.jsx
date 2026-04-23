import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us Directly',
      description: 'Reach us directly for immediate support',
      value: '+61 402 331 126',
      action: 'Call Now',
      href: 'tel:+61402331126',
      available: '9 AM - 6 PM PST'
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      description: 'Send us a detailed message about your needs',
      value: 'contact@snapdesk.com.au',
      action: 'Send Email',
      href: 'mailto:contact@snapdesk.com.au',
      available: '24/7 Response'
    },
    {
      icon: 'Users',
      title: 'Socials',
      description: 'Join our online community to keep up with our latest insights',
      socialLinks: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/snapdesk-virtual-solutions-3bb411381/'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/snapdeskvirtualsolutions'
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/people/SnapDesk-Virtual-Solutions/61581918006119/'
        }
      ]
    },
    {
      icon: 'MessageSquare',
      title: 'Live Chat',
      description: 'Get instant answers to your questions',
      value: 'Chat Support',
      action: 'Start Chat',
      href: '#',
      available: 'Online Now'
    }
  ];

  const handleMethodClick = (method) => {
    if (method?.href === '#') {
      // Handle special cases like calendar booking or chat
      console.log(`Opening ${method?.title}`);
    } else {
      window.open(method?.href, '_blank');
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Multiple Ways to Contact Us
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Choose the communication method that works best for you. We're here to help 
            bring your vision to life.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0">
          {contactMethods?.map((method, index) => (
            <motion.div
              key={method?.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center space-y-4 card-elevated group hover:shadow-strong transition-all duration-300 min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Icon 
                  name={method?.icon} 
                  size={24} 
                  className="text-primary" 
                />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {method?.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3">
                  {method?.description}
                </p>
                <div className="text-primary font-medium text-sm mb-2">
                  {method?.value}
                </div>
                {method?.available && (
                  <div className="text-xs text-text-secondary mb-4">
                    {method?.available}
                  </div>
                )}
                {method?.socialLinks && (
                  <div className="flex flex-col gap-2 mb-2">
                    {method?.socialLinks?.map((social) => (
                      <a
                        key={social?.label}
                        href={social?.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-semibold hover:underline"
                      >
                        {social?.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {!method?.socialLinks && (
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => handleMethodClick(method)}
                  className="group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                >
                  {method?.action}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;