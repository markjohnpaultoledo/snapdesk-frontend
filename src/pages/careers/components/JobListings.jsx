import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { JobData } from 'utils/jobdata';

export default function JobListing() {
    

    const cardVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section className='py-20 lg:py-10 bg-muted relative overflow-hidden'>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                { JobData?.map((job, ind) => (
                    <motion.div
                        key={ind}
                        variants={cardVariants}
                        className={`relative ${ind != 0 ? 'mt-5' : ''}`}
                    >
                        <Link 
                            to={`/careers/${job.id}`}
                        >
                            <div className="bg-[#fafafa] p-5 rounded-3xl">
                                <h3 className="text-lg font-semibold text-primary underline mb-1">{ job?.jobListingTitle }</h3>
                                <div className='text-sm text-text-primary italic mb-1'>
                                    { job.caption}
                                </div>
                                <p className="text-base text-text-primary">{ job?.excerpt }</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
       
    )
}