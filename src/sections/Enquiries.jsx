import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import CalFloatingButton from '../components/CalFloatingButton.jsx';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Enquiries = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState("");

  const isFormValid =
    formData.name &&
    formData.company &&
    formData.email &&
    formData.phone &&
    formData.message;

  const handleWhatsAppClick = () => {
    setSuccessMessage("Thank you for your message. We’ll get back to you soon.");
    setTimeout(() => {
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const createWhatsAppMessage = () => {
    const message = `
New Enquiry from MarqWon Website

---

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
`;
    return encodeURIComponent(message.trim());
  };

  const whatsappNumber = '919486727259';

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['MarqWon Dynamics Pvt. Ltd.', 'Madurai, Tamil Nadu', '625007'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 94867 27259', 'Mon-Sat: 9AM - 9PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        <a
          key="email"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@marqwon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          info@marqwon.com
        </a>,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-black">
      {/* Updated CSS Overrides for react-international-phone */}
      <style>{`
        .react-international-phone-input-container {
          width: 100%;
        }
        .react-international-phone-input {
          width: 100% !important;
          border-radius: 0 8px 8px 0 !important;
          border-color: #d1d5db !important;
          height: 50px !important;
          color: black !important;
        }
        .react-international-phone-country-selector-button {
          height: 50px !important;
          border-radius: 8px 0 0 8px !important;
          border-color: #d1d5db !important;
          background-color: #f9fafb !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-gray-700">Have a project in mind? Let's discuss how we can help transform your business</motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center">
                <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center mx-auto mb-4"><Icon className="w-7 h-7 text-gray-800" /></div>
                <h3 className="text-xl font-bold mb-3 text-black">{info.title}</h3>
                <div className="space-y-1 text-gray-700 text-sm">{info.details.map((detail, idx) => (<p key={idx}>{detail}</p>))}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 text-black">Your Name *</label>
                  <input id="name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="enter your name" required className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white" />
                </div>

                <div>
                  <label htmlFor="company" className="block font-medium mb-1 text-black">Company Name *</label>
                  <input id="company" type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="enter your company name" required className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white" />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1 text-black">Email Address *</label>
                  <input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" required className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white" />
                </div>

                <div>
                  <div className="mb-4">
                    <label className="block font-medium mb-1 text-black">Phone Number *</label>
                    <PhoneInput
                      defaultCountry="in"
                      value={formData.phone}
                      onChange={(phone) => setFormData({ ...formData, phone })}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1 text-black">Your Message *</label>
                  <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project..." rows={6} required className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white" />
                </div>

                {successMessage && <div className="mb-6 rounded-lg bg-green-50 border border-green-300 p-4 text-green-800 font-medium">{successMessage}</div>}

                <a
                  href={isFormValid ? `https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}` : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={isFormValid ? handleWhatsAppClick : (e) => e.preventDefault()}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center transition font-semibold ${isFormValid ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                  Message on WhatsApp
                </a>

                <a
                  href={isFormValid ? (() => {
                    const body = `Name: ${formData.name}\ncompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
                    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                    return isMobile ? `mailto:info@marqwon.com?subject=New Enquiry&body=${encodeURIComponent(body)}` : `https://mail.google.com/mail/?view=cm&fs=1&to=info@marqwon.com&su=New%20Enquiry&body=${encodeURIComponent(body)}`;
                  })() : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={!isFormValid ? (e) => e.preventDefault() : undefined}
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center transition font-semibold mt-4 ${isFormValid ? "bg-black hover:bg-gray-900 text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                  Continue to Gmail →
                </a>
              </form>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold mb-6 text-black">Why Choose MarqWon?</h2>
              <div className="space-y-4">
                {[{ title: 'Local Expertise', description: 'Based in Madurai with deep understanding of local and global markets' }, { title: 'Proven Track Record', description: '150+ successful projects delivered across various industries' }, { title: 'Expert Team', description: '25+ skilled professionals ready to bring your vision to life' }, { title: 'End-to-End Support', description: 'From consultation to deployment and ongoing maintenance' }].map((item) => (
                  <div key={item.title} className="border-l-4 border-gray-800 pl-4">
                    <h3 className="font-semibold mb-1 text-black">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
           <div className="bg-gray-50 rounded-xl shadow overflow-hidden h-80">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.740880016186!2d78.1415774758504!3d9.959545190143878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c755a790ea99%3A0x2240b41079b6cfe3!2sMarqWon%20Dynamics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    title="MarqWon Office Location" 
  />
</div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 bg-gray-50 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Office Hours & Availability</h2>
          <p className="text-lg text-gray-600 mb-12">We operate with flexible schedules to support our clients efficiently.</p>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Working Days</h3>
                <p className="text-gray-700 text-lg">Monday – Saturday</p>
                <p className="text-gray-500 text-sm mt-1">Extended support available on request</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Weekend</h3>
                <p className="text-gray-700 text-lg">Sunday</p>
                <p className="text-gray-500 text-sm mt-1">Closed (Email support only)</p>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-base text-gray-600">For urgent requirements outside working hours, please email us — <span className="font-medium text-black"> we respond within 24 hours.</span></p>
            </div>
          </div>
        </motion.div>
        <CalFloatingButton />
      </section>
    </div>
  );
};

export default Enquiries;