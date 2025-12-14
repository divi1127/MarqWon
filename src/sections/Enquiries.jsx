import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Enquiries = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // 1. New function to format the data for the WhatsApp message
  const createWhatsAppMessage = () => {
    // The WhatsApp API requires URL encoding for the message text,
    // and '%0A' is the URL-encoded equivalent of a newline character.
    const message = `
*New Enquiry from MarqWon Website*

---

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}

---
`;
    // Trim and encode the message
    return encodeURIComponent(message.trim());
  };
  
  // Base number for WhatsApp API
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
      details: ['info@marqwon.com'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-white">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-700"
          >
            Have a project in mind? Let's discuss how we can help transform your business
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gray-800" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{info.title}</h3>
                <div className="space-y-1 text-gray-700 text-sm">
                  {info.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1 text-black">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-1 text-black">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium mb-1 text-black">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-1 text-black">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white"
                  />
                </div>

                {/* Form Submit Button (Standard email/database submission) */}
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>

                {/* WhatsApp Button (Uses the formatted message) */}
                <a
                  // 2. Updated href to include pre-filled message
                  href={`https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-green-600 transition"
                >
                  Message on WhatsApp
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    className="ml-2 w-4 h-4 fill-current"
                  >
                    <path d="M380.9 97.4C339.4 55.9 283.4 33.7 227.1 33.8c-100.8.2-192.1 48.6-250 134.1L12.4 345.8c-7.7 21.6 1.7 45.4 19.8 59l57.5 45c1.8 1.4 3.7 2.6 5.6 3.7 13.7 7.7 29.5 12.5 46 14.5l.3-.4c1.8-.7 3.6-1.6 5.4-2.7 8.3-4.9 17.5-8.4 27.2-10.8l20.4-5.2c1.6-4.5 3-9.1 4-13.8 2.2-11.4 1.3-23.7-2.6-35.3-7.5-22.1-1.3-46.7 16.9-63.1l20-17.7c27.1-23.9 65.4-29.2 97.2-14.9 31.8 14.3 53.7 44.4 56.4 78.5 2.6 33.1-13.7 65.2-41.9 83.3l-20.9 13.9c-1.3 2.1-2.6 4.3-3.7 6.5-1.9 3.8-3.4 7.8-4.5 11.9-2.5 9.1-3.6 18.7-3.2 28.5l.5 12.3c.4 1.8.8 3.5 1.2 5.3 1.5 7.1 3.5 13.9 6 20.3 3.6 9.4 8.7 18.2 15 26.3 3.5 4.5 7.5 8.7 11.8 12.7 2.2 2.1 4.5 4.1 6.8 6.1 1.1 1 2.3 2 3.5 3 2.1 1.7 4.3 3.3 6.6 4.8 10 6.6 21 11.6 32.5 14.9 11.6 3.4 23.7 3.9 35.7 1.6 16.3-3 31.7-10.2 45.9-21.2 14.2-11 26.2-24.6 35.7-40.3 9.4-15.7 16.2-33.1 20.2-51.7 3.9-18.7 5.1-37.9 3.4-57.1-1.7-19.1-7.1-37.8-15.8-55.2zM227.1 480C101.4 480 0 378.6 0 252.9 0 167 48.7 91.2 124.9 50.1L97.5 174.5 189 270.8l-91.5 59.8L227.1 480z"/>
                  </svg>
                </a>
              </form>
            </div>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold mb-6 text-black">Why Choose MarqWon?</h2>
              <div className="space-y-4">
                {[
                  { title: 'Local Expertise', description: 'Based in Madurai with deep understanding of local and global markets' },
                  { title: 'Proven Track Record', description: '150+ successful projects delivered across various industries' },
                  { title: 'Expert Team', description: '25+ skilled professionals ready to bring your vision to life' },
                  { title: 'End-to-End Support', description: 'From consultation to deployment and ongoing maintenance' },
                ].map((item) => (
                  <div key={item.title} className="border-l-4 border-gray-800 pl-4">
                    <h3 className="font-semibold mb-1 text-black">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0190946278456!2d78.11959975!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sLavanya%20Complex%2C%209%2C%20Iyer%20Bungalow%2C%20Moondrumavadi%20Main%20Rd%2C%20GR%20Nagar%2C%20Madurai%2C%20Tamil%20Nadu%20625007!5e0!3m2!1sen!2sin!4v1700000000000"
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
      <section className="py-20 bg-gray-50 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-black">Office Hours</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-black">Working Days</h3>
                <p className="text-gray-700">Monday - Saturday</p>
                {/* <p className="text-gray-700">9:00 AM - 6:00 PM</p> */}
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-black">Weekend</h3>
                <p className="text-gray-700">Sunday</p>
                <p className="text-gray-700">Closed</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-sm text-gray-700">
                For urgent matters outside office hours, please email us and we'll respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Enquiries;