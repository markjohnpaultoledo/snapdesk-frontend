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
      phones: [
        { label: 'Virtual Assistant Support', number: '+61 402 331 126', href: 'tel:6140233126' },
        { label: 'IT & Business Solutions', number: '+61 402 331 771', href: 'tel:61402331771' }
      ],
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
          href: 'https://www.facebook.com/profile.php?id=61589151928186'
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
                {method?.icon === 'Phone' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L.057 23.882a.5.5 0 0 0 .61.61l6.05-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.432l-.374-.222-3.87.937.955-3.773-.244-.389A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                ) : (
                  <Icon 
                    name={method?.icon} 
                    size={24} 
                    className="text-primary" 
                  />
                )}
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
                {method?.phones && (
                  <div className="flex flex-col gap-2 mb-2">
                    {method.phones.map((p) => (
                      <div key={p.href} className="text-sm">
                        <div className="text-text-secondary/70 text-xs mb-0.5">{p.label}</div>
                        <a href={p.href} className="text-primary font-semibold hover:underline">
                          {p.number}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
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

              {!method?.socialLinks && !method?.phones && (
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