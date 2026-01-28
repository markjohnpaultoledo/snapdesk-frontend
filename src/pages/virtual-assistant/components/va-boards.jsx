import "./va-boards.css";
import { motion, AnimatePresence } from 'framer-motion';

export default function VABoards() {
    const GetStartedBoardData = [
        {
            title: 'Time & Communication Management',
            body: `
                <p>We manage your calendar, emails, and client communications, ensuring you never miss an appointment or important message. From scheduling to customer support, we keep your day running smoothly</p>
                <ul>
                    <li>
                        <h4>Calendar & Schedule Management</h4>
                        <ul>
                            <li>Booking appointments and meetings</li>
                            <li>Sending calendar invites and reminders</li>
                            <li>Rescheduling or canceling meetings</li>
                            <li>Managing personal and business calendars</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Email Management</h4>
                        <ul>
                            <li>Sorting and organizing inboxes</li>
                            <li>Responding to routine emails</li>
                            <li>Flagging or forwarding important messages</li>
                            <li>Unsubscribing from spam or irrelevant emails</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Workforce Coordination</h4>
                        <ul>
                            <li>Scheduling shifts, meetings, and task assignments</li>
                            <li>Tracking attendance, deadlines, and deliverables</li>
                            <li>Supporting team communication and daily check-ins</li>
                            <li>Preparing shift or roster summaries for management</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: 'Data Management & Research Support',
            body: `
                <p>Our team manages data entry, document preparation, and research with accuracy and efficiency. We keep your records, reports, and information organized, allowing you to focus on informed decision-making.</p>
                <ul>
                    <li>
                        <h4>Data Entry & Database Management</h4>
                        <ul>
                            <li>Inputting data into CRMs or spreadsheets</li>
                            <li>Cleaning and updating customer records</li>
                            <li>Creating and managing contact lists</li>
                            <li>Generating simple reports</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Document Preparation</h4>
                        <ul>
                            <li>Creating and formatting documents (Word, PDF)</li>
                            <li>Designing slide decks (PowerPoint, Canva)</li>
                            <li>Preparing reports or summaries</li>
                            <li>Transcribing audio or video files</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Online Research</h4>
                        <ul>
                            <li>Gathering information for blog posts, reports, or presentations</li>
                            <li>Competitor or market research</li>
                            <li>Sourcing vendors or suppliers</li>
                            <li>Finding and booking travel options</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: 'Operations & Team Support',
            body: `
                <p>We support your business operations through task tracking, cloud file management, and SOP creation. This ensures projects stay on track and your team has the structure needed to perform at their best</p>
                <ul>
                    <li>
                        <h4>File & Project Management</h4>
                        <ul>
                            <li>Organizing cloud storage (e.g. Google Drive, Dropbox)</li>
                            <li>Tracking tasks and deadlines (using tools like Trello, Asana, ClickUp)</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Creating SOPs (Standard Operating Procedures)</h4>
                    </li>
                    <li>
                        <h4>Assisting with onboarding new team members</h4>
                    </li>
                </ul>
            `
        },
        {
            title: 'Bookkeeping & Financial Support',
            body: `
                <p>We provide reliable bookkeeping, accounts management, and invoicing support. Payroll and compliance services keep your finances organised and aligned with Australian requirements.</p>
                <ul>
                    <li>
                        <h4>Bookkeeping Services</h4>
                        <ul>
                            <li>Recording daily transactions and reconciling accounts</li>
                            <li>Managing accounts payable and receivable</li>
                            <li>Preparing invoices and following up on payments</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Payroll & Compliance Support</h4>
                        <ul>
                            <li>Processing payroll and superannuation contributions</li>
                            <li>Assisting with BAS and GST preparation (in consultation with your accountant)</li>
                            <li>Preparing financial summaries and reports for decision-making</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: 'Personal Assistance',
            body: `
                <p>From managing personal tasks and travel to handling lifestyle support, we help you balance work and life. Our assistance covers everything from bills and budgets to wellness appointments and family coordination</p>
                <ul>
                    <li>
                        <h4>Personal Admin Support </h4>
                        <ul>
                            <li>Manage personal calendars, set reminders for birthdays/anniversaries, and handle subscriptions</li>
                            <li>Track reimbursements, pay bills (with approval), prepare budgets/reports</li>
                            <li>Organize flights/hotels for work trips, prepare travel itineraries, and manage frequent flyer programs</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Executive Lifestyle Support</h4>
                        <ul>
                            <li>Book flights/hotels, plan itineraries, manage rewards</li>
                            <li>Online shopping, track orders, schedule home maintenance, send gifts</li>
                            <li>Book medical/wellness visits, manage gym/classes, research options</li>
                            <li>Draft personal notes/cards, manage RSVPs, coordinate with family/contacts</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        {
            title: 'Customer Service Support',
            body: `
                <p>Great service builds loyal customers — and we help you keep it that way. Our Virtual Assistants provide friendly, reliable support for your clients, handling inquiries, follow-ups, and after-sales care so every interaction feels personal and professional.</p>
                <ul>
                    <li>
                        <h4>Customer Communication</h4>
                        <ul>
                            <li>Responding to inquiries via email, chat, or phone</li>
                            <li>Tracking and resolving service requests promptly</li>
                            <li>Managing helpdesk platforms (e.g., Zendesk, Gorgias, Freshdesk)</li>
                        </ul>
                    </li>
                    <li>
                        <h4>After-Sales Support</h4>
                        <ul>
                            <li>Handling order, booking, and billing concerns</li>
                            <li>Following up for customer feedback and satisfaction</li>
                            <li>Coordinating product or service replacements</li>
                        </ul>
                    </li>
                </ul>
            `
        }
    ]
    const itemVariants = {
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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    return (
        <section className="boardPanel_sec">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className=""
                >
                    { 
                        GetStartedBoardData?.map((board, ind) => (
                            <motion.div variants={itemVariants} className="relative">
                            <AnimatePresence mode="wait">
                            <motion.div
                                key={ind}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.6, delay: (ind + 1) * 0.3 }}
                                className={ind != 0 ? 'mt-10' : ''}>
                                <div className="boardPanel_board" key={ind} data-aos="fade-up" data-aos-delay="0">
                                    <div className="boardPanel_board_count" >
                                        { ind + 1 }
                                    </div>
                                    <div className="boardPanel_board_header">
                                        <h3>{ board.title }</h3>
                                    </div>
                                    <div className="boardPanel_board_body" dangerouslySetInnerHTML={{ __html: board.body }}></div>
                                </div>
                            </motion.div>
                            </AnimatePresence>
                        </motion.div>
                            
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}