import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    talentServices: [],
    supportLevel: '',
    message: '',
    newsletter: false,
    privacy: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const talentServiceOptions = [
    { value: 'time-communication-management', label: 'Time & Communication Management' },
    { value: 'data-management-research-support', label: 'Data Management & Research Support' },
    { value: 'operations-team-support', label: 'Operations & Team Support' },
    { value: 'bookkeeping-financial-support', label: 'Bookkeeping & Financial Support' },
    { value: 'personal-assistance', label: 'Personal Assistance' },
    { value: 'customer-service-support', label: 'Customer Service Support' }
  ];

  const supportLevels = [
    { value: 'part-time', label: 'Part-time' },
    { value: 'full-time', label: 'Full-time' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTalentServiceChange = (e) => {
    const { value, checked } = e?.target;

    setFormData((prev) => ({
      ...prev,
      talentServices: checked
        ? [...prev.talentServices, value]
        : prev.talentServices.filter((item) => item !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    const selectedServices = formData?.talentServices?.length
      ? formData?.talentServices
          ?.map((serviceValue) => {
            const matched = talentServiceOptions?.find((option) => option?.value === serviceValue);
            return matched?.label || serviceValue;
          })
          ?.join(', ')
      : 'Not specified';

    const selectedSupportLevel = supportLevels?.find((level) => level?.value === formData?.supportLevel)?.label || 'Not specified';

    const subject = `New Contact Form Inquiry - ${formData?.name || 'Website Visitor'}`;
    const body = (
      `Full Name: ${formData?.name || ''}\n` +
      `Email Address: ${formData?.email || ''}\n` +
      `Company: ${formData?.company || ''}\n` +
      `Phone Number: ${formData?.phone || ''}\n` +
      `Talent Service(s): ${selectedServices}\n` +
      `Level of Support: ${selectedSupportLevel}\n` +
      `Additional Details: ${formData?.message || 'None'}\n` +
      `Newsletter Subscription: ${formData?.newsletter ? 'Yes' : 'No'}\n` +
      `Privacy Consent: ${formData?.privacy ? 'Yes' : 'No'}`
    );

    try {
      const response = await fetch('https://formsubmit.co/ajax/mark.toledo@triarchsystem.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: subject,
          name: formData?.name || '',
          email: formData?.email || '',
          company: formData?.company || '',
          phone: formData?.phone || '',
          talentServices: selectedServices,
          supportLevel: selectedSupportLevel,
          message: body,
          newsletter: formData?.newsletter ? 'Yes' : 'No',
          privacyConsent: formData?.privacy ? 'Yes' : 'No'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        talentServices: [],
        supportLevel: '',
        message: '',
        newsletter: false,
        privacy: false
      });
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus(null);
      window.alert('We could not send your message automatically. Please try again in a moment.');
    }
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-2xl p-8 text-center space-y-6 card-elevated"
      >
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent Successfully!</h3>
          <p className="text-text-secondary">
            Thank you for reaching out. We'll get back to you within 24 hours with next steps.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setSubmitStatus(null)}
          className="mx-auto"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl p-6 sm:p-8 space-y-6 card-elevated"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Start Your Snap Journey</h3>
        <p className="text-text-secondary">
          Take the first step to reliable & governed Virtual Assistance.
        </p>
      </div>
      {/* Personal Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleInputChange}
          placeholder="john@company.com"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Company"
          type="text"
          name="company"
          value={formData?.company}
          onChange={handleInputChange}
          placeholder="Your Company"
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData?.phone}
          onChange={handleInputChange}
          placeholder="+61 402 331 126"
        />
      </div>
      {/* Project Details */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-text-primary">What support are you interested in?</h4>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-3">
            Talent Service
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {talentServiceOptions?.map((option) => (
              <Checkbox
                key={option?.value}
                label={option?.label}
                name="talentServices"
                value={option?.value}
                checked={formData?.talentServices?.includes(option?.value)}
                onChange={handleTalentServiceChange}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:max-w-sm">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Level of Support
            </label>
            <select
              name="supportLevel"
              value={formData?.supportLevel}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg bg-input text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            >
              <option value="">Select Level</option>
              {supportLevels?.map((level) => (
                <option key={level?.value} value={level?.value}>
                  {level?.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-text-primary mb-2">
          Additional Details
        </label>
        <textarea
          name="message"
          value={formData?.message}
          onChange={handleInputChange}
          rows={5}
          placeholder="Tell us about your project goals, challenges, and vision..."
          className="w-full px-3 py-2 border border-border rounded-lg bg-input text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
        />
      </div>
      {/* Checkboxes */}
      <div className="space-y-3">
        <Checkbox
          label="Subscribe to our newsletter for industry insights and updates"
          checked={formData?.newsletter}
          onChange={handleInputChange}
          name="newsletter"
        />
        <Checkbox
          label={(
            <>
              I agree to the{' '}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                privacy policy
              </Link>{' '}
              and{' '}
              <Link to="/terms-and-conditions" className="text-primary hover:underline">
                terms of service
              </Link>
            </>
          )}
          checked={formData?.privacy}
          onChange={handleInputChange}
          name="privacy"
          required
        />
      </div>
      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={!formData?.privacy}
        className="btn-magnetic"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
      <p className="text-xs text-text-secondary text-center">
        We typically respond within 24 hours. For urgent matters, call us directly.
      </p>
    </motion.form>
  );
};

export default ContactForm;