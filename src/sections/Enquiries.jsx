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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['MarqWon Dynamics Pvt. Ltd.', 'Madurai, Tamil Nadu', '625007'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX', 'Mon-Sat: 9AM - 6PM'],
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

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-gray-900 transition"
                >
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126229.64453703456!2d78.11959975!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="MarqWon Location"
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
