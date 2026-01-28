import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import { JobData } from 'utils/jobdata';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'components/ui/Button';
import Icon from 'components/AppIcon';


const JobDetailsPage = () => {
  const { jobId } = useParams();
  const Job = JobData.find( j => j.id == jobId);

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Tiktok", icon: "Tiktok", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        

        {/* Main Content Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="genericPage">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8">
      
                <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">
                  { Job.title }
                </h2>
                <div className="flex flex-wrap justify-center">
                  { Job.workingSetUp}, { Job.location } | { Job.PostedDate }
                </div>
                <Link to="/services">
                  <Button
                    variant="default"
                    size="lg"
                    className="btn-magnetic mt-5"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Interested?
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className=""
              >
                  
                  <h3>Client Information</h3>
                  <p>{ Job.clientInformation }</p>

                  { Job.jobDescription.length && 
                    <>
                      <h3>Job Description</h3>
                      <ul className='pl-6 list-disc'>
                        { Job.jobDescription.map((description, ind) => (
                          <li key={ind}>
                            { description }
                          </li>
                        ))}
                      </ul>
                    </>
                  }

                  { Job.mustHave.length && 
                    <>
                      <h3>Must Haves</h3>
                      <ul className='pl-6 list-disc'>
                        { Job.mustHave.map((info, ind) => (
                          <li key={ind}>
                            { info }
                          </li>
                        ))}
                      </ul>
                    </>
                  }

                  { Job.homeRequirements.list && 
                    <>
                      <h3>Home Office Requirements</h3>
                      <p>{ Job.homeRequirements.message }</p>
                      <ul className='pl-6 list-disc'>
                        { Job.homeRequirements.list.map((info, ind) => (
                          <li key={ind}>
                            { info }
                          </li>
                        ))}
                      </ul>
                      <p>{ Job.homeRequirements.outroText }</p>
                    </>
                  }
                  
                  <div className="text-center">
                    <Link to="/services">
                      <Button
                        variant="default"
                        size="lg"
                        className="btn-magnetic mt-5"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        Join Now
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-white font-semibold mb-4 hover:text-accent transition-colors duration-300">Follow us</h3>
                    <div className="flex space-x-4">
                      
                      {socialLinks?.map((social) =>
                      <a
                        key={social?.name}
                        href={social?.href}
                        className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                        aria-label={social?.name}>

                          <Icon
                          name={social?.icon}
                          size={18}
                          className="text-gray-200 group-hover:text-secondary transition-colors duration-300" />

                        </a>
                      )}
                    </div>
                  </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetailsPage;