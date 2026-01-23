import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import "./styles/main.css"


const PrivacyPage = () => {
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
                  Privacy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policy</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="">

                <p>At SnapDesk Virtual Solutions, your privacy matters to us. We comply with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) to protect your personal information and maintain transparency in how we handle data.</p>
                <h3>1. What We Collect</h3>
                <p>We may collect:</p>
                <ul className="list-disc pl-5 ml-5">
                    <li>Name, contact details, and business information</li>
                    <li>Payment and billing details</li>
                    <li>Communications and feedback</li>
                    <li>Website and usage data (via cookies and analytics)</li>
                    <li>We collect this information directly from you when you visit our website, fill out forms, or engage our services.</li>
                </ul>
                <h3>2. How We Use It</h3>
                <p>We use your information to:</p>
                <ul className="list-disc pl-5 ml-5">
                    <li>Deliver Virtual Assistant and IT Support services</li>
                    <li>Communicate with you about inquiries, updates, or payments</li>
                    <li>Improve our website and client experience</li>
                    <li>Send occasional updates or offers (only with your consent)</li>
                    <li>Comply with Australian laws and regulations</li>
                    <li>You can unsubscribe from marketing communications anytime.</li>
                </ul>
                <h3>3. How We Protect It</h3>
                <p>We take data protection seriously through:</p>
                <ul className="list-disc pl-5 ml-5">
                    <li>Secure storage and encrypted systems</li>
                    <li>Limited internal access</li>
                    <li>Trusted third-party service providers who follow equivalent privacy standards</li>
                    <li>If information is shared with team members or partners outside Australia (e.g., in the Philippines), we ensure strict confidentiality and security measures are applied.</li>
                </ul>
                <h3>4. Sharing Information</h3>
                <p>We only share your data with:</p>
                <ul className="list-disc pl-5 ml-5">
                    <li>Service providers supporting our operations (e.g., cloud storage, finance, IT tools)</li>
                    <li>Professional advisors (e.g., accountants, legal)</li>
                    <li>Regulators, if required by law</li>
                    <li>We never sell or rent your personal data.</li>
                </ul>
                <h3>5. Cookies & Analytics</h3>
                <p>Our website uses cookies to enhance functionality and track performance (e.g., via Google Analytics). You can adjust cookie settings in your browser at any time.</p>
                <h3>6. Access & Correction</h3>
                <p>You can request access to or correction of your personal information by emailing us at:</p>
                <p>📧 <a href="" className='underline'>privacy@snapdesk.au</a> We’ll respond within a reasonable time (usually within 30 days).</p>

                <h3>7. Retention & Deletion</h3>
                <p>We retain data only for as long as necessary for business or legal purposes, after which it’s securely deleted or anonymized.</p>

                <h3>8. Complaints & Contact</h3>
                <p>If you have any privacy concerns, contact us at: [Insert Email Address] SnapDesk Virtual Solutions [Insert Address]</p>
                <p>If you’re not satisfied with our response, you can contact the Office of the Australian Information Commissioner (OAIC) via www.oaic.gov.au.</p>

                <h3>9. Policy Updates</h3>
                <p>We may update this Privacy Policy to reflect changes in law or our operations. The most recent version will always be available on our website.</p>

                <h3>In Short</h3>
                <p>Your trust means everything to us. SnapDesk protects your information with care, integrity, and professionalism — just as we manage your business.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;