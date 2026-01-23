import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const boardData = [
    {
      title: "Our Purpose",
      description: "To provide professional Virtual Administrative and Information Technology support that improves efficiency and enables clients to focus on what matters most. With reliability, discretion, and a commitment to excellence, we strive to be a trusted partner—driving productivity and supporting long-term business growth."
    },
    {
      title: "Where We’re Headed",
      description: "To become the leading provider of premium virtual administrative and Information Technology services, known for integrity, innovation, and measurable impact—helping businesses worldwide work smarter, operate more efficiently, and thrive in a digital-first world."
    }
  ];

  return (
    <section className="py-20 lg:py-14 bg-background relative overflow-hidden">
      {/* Background Elements */}
      
      <div className="relative z-10 max-w-[calc(80rem+240px)] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Cards */}
        <div className="mt-[-16px]">
          {boardData?.map((board, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`bg-[#fbfaf2] p-8 h-full flex flex-col justify-between mt-4 border-2 rounded-2xl border-[#816042] ${index % 2 == 0  ? 'mr-[120px]' : 'ml-[120px]'}`}>
                <div className="flex-1 mb-8">
                  <h3 className={`text-2xl font-bold text-text-primary mb-2  transition-colors duration-300`}>
                    {board?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {board?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;