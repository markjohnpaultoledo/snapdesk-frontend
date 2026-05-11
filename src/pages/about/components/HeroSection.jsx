import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Rotsen Magtaas',
      role: 'Chief Executive Officer',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/rotsen.jpg'
    },
    {
      id: 2,
      name: 'Christina Kawase',
      role: 'Chief Operating Officer',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/christina.jpg'
    },
    {
      id: 3,
      name: 'Janella Marie Claus',
      role: 'Chief Service Delivery Officer',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/janella.jpg'
    },
    {
      id: 4,
      name: 'Elizabeth Caoile',
      role: 'Chief Recruitment Officer',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/beth.png'
    },
    {
      id: 5,
      name: 'Mark Toledo',
      role: 'Chief Executive Officer, IT',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/leds.jpg'
    },
    {
      id: 6,
      name: 'Kainoa Magtaas',
      role: 'Chief Operating Officer, IT',
      image: 'https://d1c5khxbu1u21j.cloudfront.net/kainoa.jpg'
    }
  ];

  const marqueeMembers = [...teamMembers, ...teamMembers];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(34,197,94,0.22),transparent_38%),radial-gradient(circle_at_86%_20%,rgba(20,184,166,0.2),transparent_35%),linear-gradient(180deg,#020617_0%,#0b1320_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            About SnapDesk
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Your Reliable Support Team,
            <br />
            In A Snap.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            SnapDesk Virtual Solutions empowers growing businesses with governed offshore talent from the Philippines, delivering quality, transparency, continuity, and measurable outcomes.
          </p>
        </motion.div>

        <div className="hidden md:flex items-start justify-center gap-0 mb-20 relative">
          <div className="w-full">
            <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex w-max gap-5"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              >
                {marqueeMembers.map((member, index) => (
                  <article
                    key={`lane-a-${member.id}-${index}`}
                    className="w-52 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="h-56 w-full rounded-xl object-cover"
                    />
                    <div className="pt-3">
                      <p className="text-sm font-semibold text-white">{member.name}</p>
                      <p className="mt-1 text-xs text-white/75">{member.role}</p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {teamMembers.map((member) => (
              <article key={`mobile-${member.id}`} className="overflow-hidden rounded-xl border border-white/15 bg-white/10 p-2">
                <Image src={member.image} alt={member.name} className="h-36 w-full rounded-lg object-cover" />
                <p className="pt-2 text-xs font-medium text-white">{member.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;