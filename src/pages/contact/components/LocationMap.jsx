import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const offices = [
    {
      id: 1,
      city: "Brisbane",
      address: "Level 18, 324 Queen Street, Brisbane, QLD 4000 Australia",
      phones: [
        { label: "Virtual Assistant Support", number: "+61 402 331 126", tel: "6140233126" },
        { label: "IT & Business Solutions", number: "+61 402 331 771", tel: "61402331771" }
      ],
      email: "contact@snapdesk.com.au",
      hours: "Mon-Fri: 9 AM - 6 PM AEST",
      coordinates: "-27.4698,153.0251"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Visit Our Studios
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We're located in the heart of innovation hubs. Drop by for a coffee 
            and let's discuss your project in person.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {offices?.map((office, index) => (
            <motion.div
              key={office?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-xl overflow-hidden card-elevated w-full max-w-3xl"
            >
              {/* Map */}
              <div className="h-64 bg-muted relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={`${office?.city} Office Location`}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office?.coordinates}&z=14&output=embed`}
                  className="border-0"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {office?.city} Studio
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold text-text-primary">
                  {office?.city} Office
                </h3>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <Icon name="MapPin" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-text-primary font-medium">Address</span>
                    </div>
                    <div className="text-text-secondary text-sm whitespace-pre-line">
                      {office?.address}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.832L.057 23.882a.5.5 0 0 0 .61.61l6.05-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.432l-.374-.222-3.87.937.955-3.773-.244-.389A9.952 9.952 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                      <span className="text-text-primary font-medium">Phone</span>
                    </div>
                    {office?.phones?.map((p) => (
                      <div key={p.tel} className="text-sm mb-1">
                        <a
                          href={`tel:${p.tel}`}
                          className="text-text-secondary hover:text-primary transition-colors"
                        >
                          {p.number}
                        </a>
                        <span className="text-text-secondary/60 ml-1">— {p.label}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <Icon name="Mail" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-text-primary font-medium">Email</span>
                    </div>
                    <a
                      href={`mailto:${office?.email}`}
                      className="text-text-secondary text-sm hover:text-primary transition-colors"
                    >
                      {office?.email}
                    </a>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <Icon name="Clock" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-text-primary font-medium">Hours</span>
                    </div>
                    <div className="text-text-secondary text-sm">
                      {office?.hours}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-border">
                  <a
                    href={`https://maps.google.com/?q=${office?.coordinates}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary/10 text-primary px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    Get Directions
                  </a>
                  <a
                    href="tel:6140233126"
                    className="flex-1 bg-accent/10 text-accent px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    Call Office
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Reach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Globe" size={24} className="text-primary" />
            <h3 className="text-xl font-bold text-text-primary">
              Global Reach, Local Touch
            </h3>
          </div>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            While we're based in Australia, we work with clients worldwide. 
            Our remote collaboration tools ensure seamless communication regardless of location.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center space-x-1">
              <Icon name="Video" size={14} />
              <span>Video Conferencing</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="MessageSquare" size={14} />
              <span>Real-time Chat</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="Share2" size={14} />
              <span>Collaborative Tools</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;