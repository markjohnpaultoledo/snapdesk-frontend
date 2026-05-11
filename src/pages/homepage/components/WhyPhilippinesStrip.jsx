import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const highlights = [
  {
    title: 'Timezone Overlap',
    description: 'Dedicated shifts aligned with US, AU, and UK business hours for real-time collaboration.',
    icon: 'Clock3'
  },
  {
    title: 'English Proficiency',
    description: 'Strong communication standards across customer support, operations, and technical workflows.',
    icon: 'MessageSquareText'
  },
  {
    title: 'Cost Efficiency',
    description: 'Lower operating costs with high-quality delivery so you can scale without overextending budgets.',
    icon: 'TrendingUp'
  }
];

const WhyPhilippinesStrip = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(20,184,166,0.28),transparent_45%),radial-gradient(circle_at_88%_70%,rgba(34,197,94,0.22),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
              Why Philippines
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Offshore Talent Built
              <br />
              For Speed, Scale, and Trust
            </h2>
          </div>

          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/contact">Talk to an Offshore Specialist</Link>
          </Button>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-slate-900">
                <Icon name={item.icon} size={20} color="#0f172a" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPhilippinesStrip;
