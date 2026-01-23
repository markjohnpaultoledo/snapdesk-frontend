import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import "./styles/main.css"


const TermsAndConditions = () => {
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
                  Terms & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conditions</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="">

                <h3>1. Introduction</h3>
                <p>Welcome to SnapDesk Virtual Solutions (“we,” “our,” “us”). By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before engaging our services.</p>

                <h3>2. Services</h3>
                <p>We provide virtual assistant and IT support services to clients across Australia. Each project or ongoing engagement is subject to a signed Service Agreement that outlines scope, deliverables, fees, and timelines.</p>

                <h3>3. Client Responsibilities</h3>
                <p>You agree to:
                    <br />Provide clear instructions and required access to complete assigned tasks.
                    <br />Ensure that information and materials provided are accurate and lawful.
                    <br />Make payments in accordance with agreed terms.
                    <br />Failure to meet these responsibilities may result in delays or suspension of services.
                </p>

                <h3>4. Fees & Payments</h3>
                <p>All fees are quoted in Australian Dollars (AUD) and exclude GST unless stated otherwise.</p>
                <ul>
                    <li>A 50% deposit is required upon acceptance of a proposal.</li>
                    <li>Remaining payments are due within 30 days of invoicing.</li>
                    <li>Payments can be made via bank transfer, Wise, or GoCardless.</li>
                    <li>Late payments exceeding 5 business days may incur service suspension or additional fees.</li>
                </ul>

                <h3>5. Cancellations & Refunds</h3>
                <p>Projects cancelled before commencement are refundable minus administrative fees.
                    <br />Ongoing services require two weeks’ notice for cancellation.
                    <br />Work already completed is non-refundable.
                </p>

                <h3>6. Confidentiality</h3>
                <p>We respect your privacy and will maintain strict confidentiality of all client data, in compliance with the Australian Privacy Principles (APPs). No information will be shared without written consent unless required by law.</p>

                <h3>7. Intellectual Property</h3>
                <p>Upon full payment, ownership of completed work transfers to the client, except for pre-existing tools, templates, or frameworks owned by SnapDesk.</p>


                <h3>8. Limitation of Liability</h3>
                <p>While we take every effort to ensure accuracy and reliability, SnapDesk Virtual Solutions is not liable for indirect or consequential loss arising from the use of our services.</p>

                <h3>9. Termination</h3>
                <p>We reserve the right to terminate services for non-payment, breach of agreement, or misuse of our resources. Clients may terminate services with written notice per the Service Agreement.</p>

                <h3>10. Governing Law</h3>
                <p>These Terms are governed by the laws of Queensland, Australia. Any disputes shall be resolved in accordance with Australian consumer and contract law.</p>

                <h3>11. Contact Us</h3>
                <p>For any questions regarding these Terms, please contact:
                    <br />📧 support@snapdesk.au
                    <br />📍 Queensland, Australia
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;