import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What\'s your typical project timeline?",
      answer: `Project timelines vary based on scope and complexity. A typical web application takes 8-16 weeks, while mobile apps range from 12-20 weeks. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the process.`
    },
    {
      question: "How do you handle project communication?",
      answer: `We believe in transparent, regular communication. You'll have a dedicated project manager, weekly progress calls, access to our project dashboard, and direct communication channels with the development team. We adapt our communication style to your preferences.`
    },
    {
      question: "What technologies do you specialize in?",
      answer: `We're technology-agnostic and choose the best tools for each project. Our core expertise includes React, Node.js, Python, cloud platforms (AWS, Azure, GCP), mobile development (React Native, Flutter), and emerging technologies like AI/ML integration.`
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: `Absolutely. We offer comprehensive post-launch support including maintenance, updates, performance monitoring, and feature enhancements. Our support packages are flexible and can be customized based on your needs.`
    },
    {
      question: "How do you ensure project quality?",
      answer: `Quality is built into our process through code reviews, automated testing, continuous integration, user testing, and iterative feedback loops. We follow industry best practices and maintain high standards throughout development.`
    },
    {
      question: "What\'s your approach to project pricing?",
      answer: `We offer transparent, value-based pricing tailored to your specific needs. After understanding your requirements, we provide detailed proposals with clear deliverables and timelines. We also offer flexible payment structures to accommodate different business needs.`
    },
    {
      question: "Can you work with our existing team?",
      answer: `Yes, we excel at collaborative partnerships. We can integrate with your existing team, provide technical leadership, or work as an extension of your development capabilities. We adapt to your workflow and communication preferences.`
    },
    {
      question: "Do you sign NDAs and ensure data security?",
      answer: `Absolutely. We take confidentiality and data security seriously. We're happy to sign NDAs, follow your security protocols, and implement enterprise-grade security measures. Your intellectual property and data are always protected.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Get quick answers to common questions about our process, 
            technology, and partnership approach.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden card-elevated"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq?.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className="text-text-secondary" 
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 border-t border-border">
                      <p className="text-text-secondary leading-relaxed pt-4">
                        {faq?.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-card rounded-xl p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="HelpCircle" size={24} className="text-primary" />
            <h3 className="text-xl font-bold text-text-primary">
              Still Have Questions?
            </h3>
          </div>
          <p className="text-text-secondary mb-6">
            Can't find the answer you're looking for? Our team is here to help 
            with any specific questions about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@snapdesk.com.au"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Icon name="Mail" size={18} />
              <span>Email Us</span>
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L.057 23.882a.5.5 0 0 0 .61.61l6.05-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.432l-.374-.222-3.87.937.955-3.773-.244-.389A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              <span>Call Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;