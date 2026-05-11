import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CurrencyToggle = () => {
  const [currency, setCurrency] = useState('USD');

  const roleData = [
    {
      role: 'Customer Support Specialist',
      local: { USD: '$38,000', AUD: '$62,000' },
      offshore: { USD: '$18,000', AUD: '$30,000', savings: { USD: '$20,000', AUD: '$32,000' } },
    },
    {
      role: 'Content Coordinator',
      local: { USD: '$48,000', AUD: '$80,000' },
      offshore: { USD: '$22,000', AUD: '$37,000', savings: { USD: '$26,000', AUD: '$43,000' } },
    },
    {
      role: 'Administrative Manager',
      local: { USD: '$58,000', AUD: '$97,000' },
      offshore: { USD: '$28,000', AUD: '$47,000', savings: { USD: '$30,000', AUD: '$50,000' } },
    },
  ];

  const toggleCurrency = () => {
    setCurrency(currency === 'USD' ? 'AUD' : 'USD');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 px-4 md:px-8 lg:px-12 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Build Your Team <span className="text-primary">Globally</span>, Scale Your Impact Locally
          </h2>
          <p className="text-lg text-text-secondary mb-6 max-w-3xl mx-auto">
            Companies investing in distributed teams unlock access to world-class talent while significantly reducing overhead costs. This strategic approach empowers you to allocate resources toward growth and innovation.
          </p>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Combine onshore expertise with offshore efficiency to create a balanced, cost-effective workforce that adapts to your business needs without compromising quality or accountability.
          </p>
        </motion.div>

        {/* Currency Toggle */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <div className="flex items-center gap-6">
            <span className={`text-lg font-medium ${currency === 'USD' ? 'text-text-primary' : 'text-text-secondary'}`}>
              USD
            </span>
            <button
              onClick={toggleCurrency}
              className="relative inline-flex items-center h-10 w-20 rounded-full transition-colors bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label="Toggle currency"
            >
              <motion.div
                layout
                className="absolute w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ x: currency === 'USD' ? 2 : 38 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                <span className="text-sm font-bold text-accent">
                  {currency === 'USD' ? '$' : 'A$'}
                </span>
              </motion.div>
            </button>
            <span className={`text-lg font-medium ${currency === 'AUD' ? 'text-text-primary' : 'text-text-secondary'}`}>
              AUD
            </span>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div variants={itemVariants} className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 font-semibold text-base">Example Roles</th>
                <th className="px-6 py-4 font-semibold text-base">Annual Cost of Local Team Member</th>
                <th className="px-6 py-4 font-semibold text-base">Annual Cost of Offshore Team Member</th>
              </tr>
            </thead>
            <tbody>
              {roleData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b transition-colors ${index % 2 === 0 ? 'bg-muted' : 'bg-white'} hover:bg-background`}
                >
                  <td className="px-6 py-5 font-semibold text-primary">{item.role}</td>
                  <td className="px-6 py-5 text-text-primary font-medium">
                    {item.local[currency]}
                  </td>
                  <td className="px-6 py-5 text-text-primary font-medium">
                    {item.offshore[currency]}{' '}
                    <span className="text-primary text-sm font-semibold ml-2">
                      (save {item.offshore.savings[currency]}/yr)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Footer Note */}
        <motion.p variants={itemVariants} className="mt-6 text-center text-sm text-text-secondary">
          *Pricing reflects regional market rates and may vary based on specific skill requirements or availability
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CurrencyToggle;
