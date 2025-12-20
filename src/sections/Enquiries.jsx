import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import CalFloatingButton from '../components/CalFloatingButton.jsx';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";



const Enquiries = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
const [successMessage, setSuccessMessage] = useState("");


// ✅ Form validation
const isFormValid =
  formData.name &&
  formData.company &&
  formData.email &&
  formData.phone &&
  formData.message;

// ✅ WhatsApp click handler
const handleWhatsAppClick = () => {
  setSuccessMessage("Thank you for your message. We’ll get back to you soon.");

  setTimeout(() => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
  }, 500);
};



  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  // 1. New function to format the data for the WhatsApp message
  const createWhatsAppMessage = () => {
    // The WhatsApp API requires URL encoding for the message text,
    // and '%0A' is the URL-encoded equivalent of a newline character.
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
                    placeholder="enter your name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg mt-1 text-black bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-medium mb-1 text-black">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="enter your company name"
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
  <label className="block font-medium mb-1 text-black">
    Phone Number *
  </label>

  <div className="relative">
    <PhoneInput
      country={"in"}
      value={formData.phone}
      onChange={(phone) =>
        setFormData({ ...formData, phone })
      }
      enableSearch
      inputStyle={{
        width: "100%",
        height: "48px",
        fontSize: "16px",
        color: "#000",
      }}
      buttonStyle={{
        borderRadius: "8px 0 0 8px",
      }}
      containerStyle={{
        width: "100%",
      }}
    />

    {/* Black search icon */}
    {/* <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" /> */}
  </div>
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

               {successMessage && (
  <div className="mb-6 rounded-lg bg-green-50 border border-green-300 p-4 text-green-800 font-medium">
    {successMessage}
  </div>
)}

               <a
  href={
    isFormValid
      ? `https://wa.me/${whatsappNumber}?text=${createWhatsAppMessage()}`
      : undefined
  }
  target="_blank"
  rel="noopener noreferrer"
  onClick={isFormValid ? handleWhatsAppClick : (e) => e.preventDefault()}
  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center transition font-semibold
    ${
      isFormValid
        ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
>
  Message on WhatsApp
</a>


<a
  href={
    isFormValid
      ? (() => {
          const body = `
Name: ${formData.name}
company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
          `;

          const isMobile = /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
          );

          return isMobile
            ? `mailto:info@marqwon.com?subject=New Enquiry&body=${encodeURIComponent(body)}`
            : `https://mail.google.com/mail/?view=cm&fs=1&to=info@marqwon.com&su=New%20Enquiry&body=${encodeURIComponent(body)}`;
        })()
      : undefined
  }
  target="_blank"
  rel="noopener noreferrer"
  onClick={!isFormValid ? (e) => e.preventDefault() : undefined}
  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center transition font-semibold mt-4
    ${
      isFormValid
        ? "bg-black hover:bg-gray-900 text-white cursor-pointer"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
>
  Continue to Gmail →
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

        <CalFloatingButton />

      </section>
    </div>
  );
};

export default Enquiries;