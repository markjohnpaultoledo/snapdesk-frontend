import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import TeamIntroduction from './components/TeamIntroduction';
import LocationMap from './components/LocationMap';
import FAQ from './components/FAQ';
import Footer from '../../components/ui/Footer';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Contact Us - Snapdesk | Snap Into Growth ';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Ready to transform your vision into reality? Contact Snapdesk for project consultations, partnerships, and strategic technology advisory. Your technology partner for the future you\'re building.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <ContactHero />

        {/* Main Content Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Quick Contact Info */}
                <div className="bg-card rounded-2xl p-8 card-elevated">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">Response Time</div>
                        <div className="text-text-secondary">Within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" stroke="currentColor" strokeWidth="2"/>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">Headquarters</div>
                        <div className="text-text-secondary">Brisbane, QLD, Australia</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                          <rect width="4" height="12" x="2" y="9" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-text-primary">Team Size</div>
                        <div className="text-text-secondary">25+ Experts</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                {/* <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"> */}
                  {/* <h4 className="text-lg font-bold text-text-primary mb-4">
                    Why Choose Snapdesk?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary text-sm">
                        100+ successful projects delivered from combined careers
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary text-sm">
                        guaranteed client satisfaction
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary text-sm">
                        20+ years combined experience
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-text-secondary text-sm">
                        Enterprise-grade security & compliance
                      </span>
                    </div> */}
                  {/* </div> */}
                {/* </div> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <ContactMethods />

        {/* Team Introduction */}
        <TeamIntroduction />

        {/* Location & Map */}
        <LocationMap />

        {/* FAQ Section */}
        {/* <FAQ /> */}

        {/* Final CTA */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Every great project starts with a conversation. Let's discuss your vision 
                and explore how we can bring it to life together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="mailto:hello@snapdesk.com.au"
                  className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium btn-magnetic"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Start Your Project</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center space-x-2 bg-card text-text-primary border border-border px-8 py-4 rounded-lg hover:bg-primary/5 hover:border-primary transition-colors font-medium"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Schedule Call</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>
      {/* Footer */}
              <Footer />
    </div>
  );
};

export default ContactPage;