'use client';

import { Info, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
// Removed useTranslations import
// Removed useLocation import (will use local state)
import { Button } from '@/components/ui/button'; // Assuming this path is correct

// Define representative location type
type RepresentativeLocation = 'uk' | 'tr' | 'mena';

export function Contact() {
  // Removed useTranslations hook call
  // Use local state for selected location, default to 'tr'
  const [selectedLocation, setSelectedLocation] = useState<RepresentativeLocation>('tr');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    country: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Removed dialog state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact email sent successfully');
        setFormData({ name: '', company: '', phone: '', email: '', country: '', requirements: '' }); // Reset form
        alert('Message sent successfully!'); // Simple alert fallback
      } else {
        console.error('Failed to send contact email');
        alert('Failed to send message. Please try again.'); // Simple alert fallback
      }
    } catch (error) {
      console.error('Error sending contact email:', error);
      alert('An error occurred while sending the message. Please try again.'); // Simple alert fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative bg-gray-50 py-16">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section - Centered */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-[#e6f0f7] text-[#0065A1]">
              Contact {/* Hardcoded: company.contact.tag */}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us {/* Hardcoded: company.contact.title */}</h2>
            <p className="text-lg text-gray-600">
              Transform your wheel weights production with our innovative solutions. Get in touch with us to discuss your requirements and discover how our solutions can benefit your business. {/* Hardcoded: company.contact.subtitle */}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column: Contact Info & Representative */}
            <div className="space-y-8">
              {/* General Contact Info */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-2">
                  {/* WhatsApp */}
                  <a
                    href="tel:+905494300020"
                    className="flex items-center group p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">WhatsApp {/* Hardcoded: company.contact.whatsapp */}</p>
                      <p className="text-gray-600 hover:text-[#0065A1]">
                        +90 549 430 00 20
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:omer.yildiz@yilsa.com.tr"
                    className="flex items-center group p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Email {/* Hardcoded: company.contact.email */}</p>
                      <p className="text-gray-600 hover:text-[#0065A1]">
                        omer.yildiz@yilsa.com.tr
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center p-4 rounded-lg">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e6f0f7] flex items-center justify-center text-[#0065A1]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">Location {/* Hardcoded: company.contact.locationLabel */}</p>
                      <p className="text-gray-600">Denizli, Turkey {/* Hardcoded: company.contact.locations.denizli */}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Representative Section - Re-added flags and conditional logic */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 flex h-[250px] overflow-hidden">
                {/* Left vertical label */}
                <div className="w-12 bg-gray-100 flex items-center justify-center">
                  <span className="rotate-90 whitespace-nowrap text-[#0066a1] font-medium tracking-wider text-sm">
                    Representative {/* Hardcoded: company.contact.representative.label */}
                  </span>
                </div>
                {/* Right content area */}
                <div className="bg-white flex-grow p-6 flex flex-col">
                  {/* Flag Buttons */}
                  <div className="flex justify-center gap-2 mb-4">
                    <button
                      className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${selectedLocation === 'uk' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                      onClick={() => setSelectedLocation('uk')}
                      aria-label="Select UK Representative"
                    >
                      <img
                        src="/images/flags/uk.svg"
                        alt="UK flag"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <button
                      className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${selectedLocation === 'tr' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                      onClick={() => setSelectedLocation('tr')}
                      aria-label="Select Turkey Representative"
                    >
                      <img
                        src="/images/flags/tr.svg"
                        alt="Turkey flag"
                        className="w-full h-full object-cover"
                      />
                    </button>
                    <button
                      className={`relative w-8 h-8 rounded-full overflow-hidden transition-transform hover:scale-110 ${selectedLocation === 'mena' ? 'ring-2 ring-[#0065A1] ring-offset-2' : ''}`}
                      onClick={() => setSelectedLocation('mena')}
                      aria-label="Select MENA Representative"
                    >
                      <img
                        src="/images/flags/mena.svg"
                        alt="MENA flag"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </div>
                  {/* Conditional Representative Info */}
                  <div className="flex flex-col flex-grow"> {/* Removed justify-center and text-center from here */}
                    {selectedLocation === 'uk' && (
                      <div> {/* Removed text-center */}
                        <h3 className="font-semibold text-lg mb-1">Ali Yıldız {/* Hardcoded: company.contact.uk.name */}</h3>
                        <p className="text-gray-600 mb-1.5">United Kingdom {/* Hardcoded: company.contact.uk.location */}</p>
                        <div className="flex flex-col gap-1"> {/* Removed items-center */}
                          <a
                            href="tel:+447585353603"
                            className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group" /* Removed justify-center */
                          >
                            <Phone className="h-4 w-4 text-[#0065A1]" />
                            <span>+44 758 535 3603</span>
                          </a>
                          <a
                            href="mailto:ali.yildiz@yilsa.com.tr"
                            className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group" /* Removed justify-center */
                          >
                            <Mail className="h-4 w-4 text-[#0065A1]" />
                            <span>ali.yildiz@yilsa.com.tr</span>
                          </a>
                        </div>
                      </div>
                    )}
                    {selectedLocation === 'tr' && (
                      <div> {/* Removed text-center */}
                        <h3 className="font-semibold text-lg mb-1">Ömer Yıldız {/* Hardcoded: company.contact.tr.name */}</h3>
                        <p className="text-gray-600 mb-1.5">Denizli, Turkey {/* Hardcoded: company.contact.tr.location */}</p>
                        <div className="flex flex-col gap-1"> {/* Removed items-center */}
                          <a
                            href="tel:+905494300020"
                            className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group" /* Removed justify-center */
                          >
                            <Phone className="h-4 w-4 text-[#0065A1]" />
                            <span>+90 549 430 0020</span>
                          </a>
                          <a
                            href="mailto:omer.yildiz@yilsa.com.tr"
                            className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group" /* Removed justify-center */
                          >
                            <Mail className="h-4 w-4 text-[#0065A1]" />
                            <span>omer.yildiz@yilsa.com.tr</span>
                          </a>
                        </div>
                      </div>
                    )}
                    {selectedLocation === 'mena' && (
                      <div> {/* Removed text-center */}
                        <h3 className="font-semibold text-lg mb-1">Izzaldin Aamir {/* Hardcoded: company.contact.dz.name */}</h3>
                        <p className="text-gray-600 mb-1.5">Middle East and Africa {/* Hardcoded: company.contact.dz.location */}</p>
                        <div className="flex flex-col"> {/* Removed items-center, removed gap */}
                          <a
                            href="tel:+249123069496"
                            className="flex items-center gap-3 text-gray-600 hover:text-[#0065A1] group mb-1" /* Removed justify-center */
                          >
                            <Phone className="h-4 w-4 text-[#0065A1]" />
                            <span>+249 12 306 9496</span>
                          </a>
                          <div
                            className="flex items-center gap-3 text-gray-400 cursor-not-allowed group" /* Removed justify-center */
                          >
                            <Mail className="h-4 w-4 text-gray-400" />
                            {/* No email */}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Info text at the bottom */}
                  <div className="flex items-center justify-center gap-2 text-xs text-[#0065A1] mt-auto">
                    <Info className="h-3 w-3 flex-shrink-0" />
                    <p>Contact us to become our representatives! {/* Hardcoded: company.contact.representative.title */}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Person {/* Hardcoded: company.contact.form.contactPerson */}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      required
                      />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name {/* Hardcoded: company.contact.form.companyName */}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number {/* Hardcoded: company.contact.form.phone */}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email {/* Hardcoded: company.contact.form.email */}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country {/* Hardcoded: company.contact.form.country */}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent"
                  />
                </div>

                <div className="flex flex-col flex-grow mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message {/* Hardcoded: company.contact.form.message */}
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="w-full h-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0065A1] focus:border-transparent resize-none"
                    rows={4} // Added a default row count
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#0065A1] text-white py-3 px-6 rounded-lg hover:bg-[#0065A1]/90 transition-colors font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'} {/* Hardcoded: company.contact.form.submitLoading / company.contact.form.submit */}
                </Button>
              </form>
              {/* Removed AlertDialog components */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
