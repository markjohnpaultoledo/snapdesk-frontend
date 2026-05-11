import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const faqs = [
  {
    icon: 'Rocket',
    category: 'Getting Started',
    question: "How do I get started with SnapDesk's offshore staffing solutions?",
    answer: `Getting started is simple. Here's a quick overview of the process:\n\n1. Book a Discovery Call — Schedule a free consultation with one of our offshore staffing specialists. We'll take the time to understand your goals, the tasks you need covered, and the kind of person who'd thrive in your team.\n\n2. Talent Sourcing — We tap into our vetted talent network and handpick candidates who align with your requirements. This typically takes 1–2 weeks.\n\n3. Candidate Review & Interview — You'll receive a curated shortlist to review. We highly recommend a short video call with your top candidates so you can get a feel for their communication style and fit.\n\n4. Onboarding — Once you've made your choice, we handle all the formalities — including orientation, introductions, and expectation-setting — so everyone hits the ground running.\n\n5. Supported Start — In the early weeks, our team stays close to ensure a smooth handover and address any questions that come up.\n\n6. Ongoing Partnership — We check in regularly, conduct performance reviews, and keep your offshore team member motivated and supported long-term.`,
  },
  {
    icon: 'UserCheck',
    category: 'Talent Sourcing',
    question: 'How does SnapDesk find and vet the right candidates for my business?',
    answer: `Our talent selection process is thorough by design. Every candidate goes through a multi-stage screening that includes skills and technical assessments, personality profiling, and a panel interview with our HR lead and relevant subject matter expert.\n\nOnly candidates who clear every stage are presented to you. Once you've chosen your preferred person, we facilitate a 30-minute introduction call so you can ask any final questions before committing.\n\nAfter onboarding, we continue to invest in your offshore team member through upskilling workshops, wellness programs, and team-building initiatives — keeping them engaged and performing at their best.`,
  },
  {
    icon: 'MessageCircle',
    category: 'Communication',
    question: 'Will communication be an issue with an offshore team?',
    answer: `Not at all. SnapDesk only works with the top tier of available talent — professionals who are fluent in English, comfortable with Western business culture, and experienced in representing brands authentically.\n\nOur offshore specialists understand professional nuance, can adapt their tone to your brand voice, and are confident communicating across email, phone, video calls, and chat platforms. Clients consistently tell us this is one of their biggest pleasant surprises when they start working with our team.`,
  },
  {
    icon: 'Heart',
    category: 'Team Wellbeing',
    question: 'How does SnapDesk ensure offshore team members are supported and treated well?',
    answer: `We believe that well-supported people do their best work — and that directly benefits your business. Every SnapDesk offshore specialist receives fair compensation aligned to their skills and experience, access to healthcare support, and ongoing professional development opportunities.\n\nWe also run team-building events, performance recognition programs, and regular check-ins to keep morale and motivation high. When your team member feels valued and secure, you get consistent, reliable output.`,
  },
  {
    icon: 'Clock',
    category: 'Scheduling',
    question: 'What hours and time zones will my offshore team member work in?',
    answer: `We customise work schedules to suit your business. During your Discovery Call, we'll confirm the hours and time zone you need covered, and we'll only present candidates who are available and willing to work those hours.\n\nWhether you need overlap with your local business hours, after-hours coverage, or a flexible arrangement, we'll find the right fit for your operational needs.`,
  },
  {
    icon: 'Headphones',
    category: 'Ongoing Support',
    question: "What ongoing support does SnapDesk provide after I'm matched?",
    answer: `We manage the entire relationship end-to-end. After you're matched with your offshore specialist, our team handles HR administration, payroll management, and any performance-related matters.\n\nIn the first three months, a dedicated account manager oversees your engagement and is available to address any concerns quickly. Beyond that, our client support team remains on hand for ongoing needs — and you'll always have direct access to our management team for anything urgent.\n\nIf you're ever unhappy with your assigned team member, we'll find you a replacement at no additional cost and provide a complimentary week of service to support the transition.`,
  },
  {
    icon: 'DollarSign',
    category: 'Pricing',
    question: 'What are the costs involved in working with a SnapDesk offshore specialist?',
    answer: `Pricing is tailored to the role, experience level, and hours required. Rather than publishing a fixed rate, we prefer to give you an accurate, transparent quote after understanding exactly what you need.\n\nBook a Discovery Call and we'll walk you through all costs clearly — no surprises, no hidden fees. Most clients find that the savings compared to local hiring are significant, often in the range of 50–70% on total employment costs.`,
  },
  {
    icon: 'ShieldCheck',
    category: 'Our Guarantee',
    question: "What happens if my assigned team member isn't the right fit?",
    answer: `We stand behind every placement with a lifetime fit guarantee. If at any point your offshore team member isn't working out — whether it's in the first few weeks or further down the track — we'll pause your service and find you a new candidate at absolutely no extra cost.\n\nWe'll also provide one week of complimentary service to give your new team member time to get settled and up to speed. Your satisfaction isn't just a priority at the start — it's our commitment for the entire relationship.`,
  },
  {
    icon: 'Zap',
    category: 'Turnaround',
    question: "How quickly can I get started once I've chosen my offshore team member?",
    answer: `Within 24 hours of your Discovery Call, you'll receive a tailored proposal outlining our recommended approach and next steps. Once approved and your account is set up, the recruitment process typically takes 1–3 weeks depending on the complexity of the role.\n\nIf you have an urgent requirement, let us know upfront and we'll prioritise accordingly.`,
  },
];

const stats = [
  { icon: 'PhoneCall', value: 'Free', label: 'Discovery Call' },
  { icon: 'ShieldCheck', value: 'Lifetime', label: 'Fit Guarantee' },
  { icon: 'Clock', value: '24/7', label: 'Ongoing Support' },
  { icon: 'Banknote', value: '50–70%', label: 'Cost Savings vs Local' },
];

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  const lines = faq.answer.split('\n\n');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-xl mb-3 border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'border-primary/30 bg-primary/[0.04] shadow-md shadow-primary/10'
          : 'border-border bg-white hover:border-primary/20 hover:shadow-sm'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-4 px-5 py-4 text-left group"
        aria-expanded={isOpen}
      >
        {/* Category icon badge */}
        <motion.span
          animate={{ scale: isOpen ? 1.1 : 1, rotate: isOpen ? 8 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className={`flex-shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${
            isOpen ? 'bg-primary text-white' : 'bg-muted text-primary group-hover:bg-primary/10'
          }`}
        >
          <Icon name={faq.icon} size={17} />
        </motion.span>

        <div className="flex-1 min-w-0">
          <span className={`block text-xs font-semibold uppercase tracking-widest mb-1 transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text-secondary group-hover:text-primary/80'}`}>
            {faq.category}
          </span>
          <span className={`block text-base font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-text-primary group-hover:text-primary'}`}>
            {faq.question}
          </span>
        </div>

        {/* Toggle icon */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={`flex-shrink-0 mt-1 flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300 ${
            isOpen ? 'border-primary bg-primary text-white' : 'border-border text-text-secondary group-hover:border-primary group-hover:text-primary'
          }`}
        >
          <Icon name="Plus" size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {/* Animated left accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="mx-5 mb-4 border-l-2 border-primary pl-4 origin-top"
            >
              <div className="space-y-3">
                {lines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                    className="text-text-secondary text-sm leading-relaxed"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-12 bg-background overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
              <Icon name="HelpCircle" size={20} />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Support Centre
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Frequently Asked{' '}
            <span className="text-primary relative">
              Questions
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 rounded-full origin-left block"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-text-secondary text-base max-w-2xl"
          >
            Can't find what you're looking for?{' '}
            <Link to="/contact" className="text-primary hover:underline font-medium inline-flex items-center gap-1">
              Contact us <Icon name="ArrowRight" size={13} />
            </Link>{' '}
            and one of our team members will get back to you within 1 business day.
          </motion.p>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-sm"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon name={stat.icon} size={18} />
              </span>
              <div>
                <p className="text-xl font-bold text-text-primary leading-none">{stat.value}</p>
                <p className="text-xs text-text-secondary mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
          <div>
            {leftColumn.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div>
            {rightColumn.map((faq, i) => {
              const globalIndex = half + i;
              return (
                <FAQItem
                  key={globalIndex}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === globalIndex}
                  onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-primary px-8 py-7 shadow-xl shadow-primary/20"
        >
          <div className="flex items-center gap-4">
            <motion.span
              animate={{ rotate: [0, -10, 10, -6, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 4 }}
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/15 text-white"
            >
              <Icon name="PhoneCall" size={22} />
            </motion.span>
            <div>
              <p className="text-white font-bold text-lg leading-tight">Still have questions?</p>
              <p className="text-white/75 text-sm mt-0.5">Book a free 30-minute discovery call — no commitment required.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary shadow-md hover:bg-white/90 transition-colors"
          >
            <Icon name="CalendarCheck" size={16} />
            Book a Discovery Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
