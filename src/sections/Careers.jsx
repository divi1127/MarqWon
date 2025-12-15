import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  CheckCircle,
  Zap,
  Feather,
  Users,
  TrendingUp,
  Calendar,
  XCircle,
} from "lucide-react";

// --- Data ---
const BENEFITS = [
  {
    id: "tech",
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "Work hands-on with the latest frameworks, generative AI models, and cloud technologies.",
    category: "Technology Focus",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80",
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Accelerated Growth",
    description:
      "Mentorship, continuous learning budgets, and fast career progression.",
    category: "Work and Growth",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    color: "from-green-400 to-teal-600",
  },
  {
    id: "flex",
    icon: Calendar,
    title: "Flexible Work Model",
    description: "Flexible hours and remote options for perfect work-life balance.",
    category: "Work and Growth",
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=1600&q=80",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "creative",
    icon: Feather,
    title: "Creative Freedom",
    description:
      "Your ideas matter — experiment, innovate, and drive concepts end-to-end.",
    category: "Culture and Team",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80",
    color: "from-pink-400 to-rose-600",
  },
  {
    id: "collab",
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Knowledge sharing, open communication, and a team-first mindset.",
    category: "Culture and Team",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80",
    color: "from-gray-400 to-gray-700",
  },
];

const groupByCategory = (items) => {
  return items.reduce((acc, it) => {
    acc[it.category] = acc[it.category] || [];
    acc[it.category].push(it);
    return acc;
  }, {});
};

// --- TERMS AND CONDITIONS DATA ---
const INTERNSHIP_TERMS = `## Marqwon Dynamics Pvt. Ltd. Internship Terms & Conditions
Effective Date: ____________________
Company: Marqwon Dynamics Pvt. Ltd.
Location: Madurai, Tamil Nadu, India

### 1. Purpose of Internship
The internship program at Marqwon Dynamics Pvt. Ltd. (“Marqwon”) is a structured, learning-focused engagement intended to provide exposure to real-world projects, enterprise-grade work practices, and industry-relevant skills. This internship does not constitute employment, contract labor, or a promise of future engagement.

### 2. Nature of Engagement
* The internship is temporary, non-permanent, and non-employment in nature.
* Interns shall not represent themselves as employees, agents, or authorized signatories of Marqwon.
* Completion of the internship does not guarantee employment, a PPO, or continued association.
* Marqwon reserves full discretion to modify, suspend, or discontinue the internship program at any time.

### 3. Internship Duration
* Internship duration shall range between 4 weeks and 6 months, as specified in the offer communication.
* Start and end dates shall be confirmed in writing.
* Continuation beyond the agreed period requires explicit written approval from Marqwon.

### 4. Roles & Responsibilities
Interns are expected to demonstrate professional conduct, accountability, and execution discipline. Responsibilities include:
* Timely and accurate completion of assigned tasks
* Adherence to quality standards, timelines, and reporting structures
* Compliance with instructions issued by mentors, managers, or leadership
* Maintaining professionalism in all internal and external communications
Failure to meet expectations may result in termination under Section 11.

### 5. Working Hours & Mode of Work
* Working hours and engagement mode (Remote / Hybrid / On-site) shall be communicated in advance.
* Interns are required to maintain availability during defined core working hours.
* Any absence or unavailability must be formally communicated and approved.

### 6. Confidentiality & Non-Disclosure
Interns shall maintain strict confidentiality of all proprietary, technical, financial, operational, and client-related information.
* No company data may be copied, shared, stored, or disclosed without written authorization.
* Confidentiality obligations survive the completion or termination of the internship.
Any breach shall be treated as a serious violation and may invite immediate termination and legal action.

### 7. Intellectual Property Rights
* All work products, including but not limited to code, designs, documents, content, ideas, and inventions created during the internship shall be the exclusive intellectual property of Marqwon.
* Interns waive any claim of ownership, authorship, or future usage rights unless expressly agreed in writing.

### 8. Stipend / Compensation
* Internships may be paid or unpaid, as explicitly stated in the offer letter.
* Stipends, where applicable, are conditional upon performance, attendance, and policy compliance.
* Interns are not entitled to employee benefits including PF, insurance, bonuses, or leave encashment.

### 9. Performance Review & Certification
* Performance shall be assessed based on deliverables, quality of output, discipline, communication, and compliance.
* Internship certificates and Letters of Recommendation are issued solely at management discretion.
* No certificate shall be issued in cases of early exit, non-performance, or policy violations.

### 10. Code of Conduct
Interns shall:
* Uphold Marqwon’s professional standards and organizational values
* Avoid plagiarism, misrepresentation, or unethical practices
* Refrain from any action that may harm the company’s reputation, systems, or people

### 11. Early Exit & Termination Policy
#### 11.1 Termination by Marqwon
Marqwon may terminate the internship immediately and without prior notice in cases including, but not limited to:
* Unsatisfactory performance or failure to deliver
* Repeated absenteeism, unresponsiveness, or lack of discipline
* Breach of confidentiality, data security, or IP rights
* Misconduct, policy violations, or reputational risk
* Submission of false or misleading information
Such termination shall not entitle the intern to any compensation, certificate, or claims.

#### 11.2 Voluntary Exit by Intern
* Interns must provide 7 days written notice for voluntary discontinuation.
* All assigned work, handovers, and exit formalities must be completed during the notice period.
* Non-compliance shall result in termination without completion status.

#### 11.3 Management Discretion
Internship completion, continuation, certification, or future consideration remains at the sole discretion of Marqwon management, whose decision shall be final.

### 12. Exit Obligations
Upon exit, interns must:
* Return all company assets, credentials, and materials
* Permanently delete company data from personal devices
* Complete knowledge transfer as instructed
Clearance is mandatory for any certification.

### 13. Non-Solicitation
Interns shall not solicit Marqwon’s clients, partners, or employees for personal, commercial, or employment purposes during the internship period.

### 14. Limitation of Liability
Marqwon shall not be liable for any personal loss, injury, or damage arising during the internship, to the extent permitted by law.

### 15. Governing Law & Jurisdiction
These Terms & Conditions are governed by the laws of India, with exclusive jurisdiction in Madurai, Tamil Nadu.

### 16. Acceptance
By accepting the internship offer and commencing work, the intern confirms full understanding and acceptance of these Terms & Conditions.
Intern Name: __________________________
Signature: ____________________________
Date: _________________________________
For Marqwon Dynamics Pvt. Ltd.
Authorized Signatory: _____________________
`;

// Placeholder for Job Terms since they were not provided
const JOB_TERMS = `## Marqwon Dynamics Pvt. Ltd. Employment Terms (Placeholder)
By submitting a job application, you agree to our standard employment terms and conditions, which cover:
1.  Equal Opportunity Employer statement.
2.  Data Privacy and Application Handling Policy.
3.  Standard offer terms regarding compensation, benefits, and at-will employment (where applicable).
4.  Standard Intellectual Property Assignment.

The full terms will be provided upon successful completion of the interview process and before any formal offer of employment is made.
`;

// --- New Modal Component for T&C ---
const TermsAndConditionsModal = ({ isOpen, onClose, termsContent, isJob }) => {
  if (!isOpen) return null;

  const title = isJob ? "Job Application Terms" : "Internship Terms & Conditions";

  // Function to render the markdown content in the modal
  const renderContent = () => {
    return termsContent.split('\n').map((line, index) => {
      if (line.startsWith('## ')) return <h2 key={index} className="text-xl font-bold mt-4 mb-2">{line.substring(3)}</h2>;
      if (line.startsWith('### ')) return <h3 key={index} className="text-lg font-semibold mt-3 mb-1">{line.substring(4)}</h3>;
      if (line.startsWith('*')) return <li key={index} className="text-sm text-gray-700 ml-5 list-disc">{line.substring(2).trim()}</li>;
      if (line.startsWith('-')) return <li key={index} className="text-sm text-gray-700 ml-5 list-disc">{line.substring(2).trim()}</li>;
      return <p key={index} className="text-sm text-gray-700 my-1">{line.trim()}</p>;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="p-5 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition">
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto space-y-3">
          {renderContent()}
        </div>
        <div className="p-4 border-t sticky bottom-0 bg-white z-10">
          <button onClick={onClose} className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition font-semibold">
            Close and Go Back to Form
          </button>
        </div>
      </motion.div>
    </div>
  );
};


// --- Small UI utilities (No changes needed) ---
const IconWrapper = ({ Icon }) => (
  <div className="w-9 h-9 rounded-md bg-white/20 flex items-center justify-center">
    <Icon className="w-5 h-5 text-white" />
  </div>
);

// SmoothImage: preloads and crossfades (No changes needed)
const SmoothImage = ({ src, alt, overlayClass }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.src = src;
    img.onload = () => {
      if (!cancelled) {
        setCurrentSrc(src);
        setLoaded(true);
      }
    };
    // start as not loaded for new src
    setLoaded(false);
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        {loaded && (
          <motion.img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover absolute inset-0"
          />
        )}
        {!loaded && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full bg-gray-100 flex items-center justify-center absolute inset-0"
          >
            <svg
              className="w-12 h-12 text-gray-300 animate-pulse"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* overlay */}
      <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
    </div>
  );
};

// Application Form component (Updated role handling and T&C)
const ApplicationForm = ({ isJob, role, onSubmitted }) => {
  // Use a sensible default for the display of the role
  const initialRole = role && role !== "(Select a role above)" ? role : "";

 const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  role: role || "",
  experience: "",
  currentCTC: "",
  expectedCTC: "",
  college: "",
  department: "",
  passoutYear: "",
  address: "",
});

  // NEW STATE: For Terms & Conditions and Modal
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const WHATSAPP_NUMBER = "919486727259"; // change if needed

  // IMPORTANT: Set initial form role based on prop, and reset on prop change
  useEffect(() => {
    // Reset form fields but keep the new role and reset T&C
    setForm((s) => ({ 
        ...s, 
        role: role || "", // Use the role prop for the application
        experience: "",
        currentCTC: "",
        expectedCTC: "",
        college: "",
        department: "",
        passoutYear: "",
        address: "",
    }));
    setResume(null);
    setAgreedToTerms(false); // Reset agreement on role change/tab switch
  }, [role, isJob, initialRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) setResume(e.target.files[0]);
  };

  const buildMessage = () => {
  let msg = `APPLICATION DETAILS\n`;
  msg += `---------------------\n`;
  msg += `Role: ${form.role || "General Application"}\n\n`;

  msg += `Name: ${form.name}\n`;
  msg += `Email: ${form.email}\n`;
  msg += `Phone: ${form.phone}\n\n`;

  if (isJob) {
    msg += `Experience: ${form.experience} years\n`;
    msg += `Current CTC: ${form.currentCTC} LPA\n`;
    msg += `Expected CTC: ${form.expectedCTC} LPA\n\n`;
  } else {
    msg += `College: ${form.college}\n`;
    msg += `Department: ${form.department}\n`;
    msg += `Passout Year: ${form.passoutYear}\n`;
    msg += `Address: ${form.address}\n\n`;
  }

  msg += `Resume: ${resume ? resume.name : "Will share manually"}\n`;
  msg += `\nSent from MarqWon Careers Portal`;

  return msg;
};


 const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.phone || !form.role) {
    alert("Please complete all required fields");
    return;
  }

  if (!resume) {
    alert("Please upload your resume");
    return;
  }

  // NEW CHECK: Terms agreement is only mandatory for non-job roles (internships) as per request
  if (!isJob && !agreedToTerms) {
    alert("Please agree to the Internship Terms & Conditions.");
    return;
  }

  setSubmitting(true);

  const phone = WHATSAPP_NUMBER;
  const message = encodeURIComponent(buildMessage());

  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
  window.open(url, "_blank");

  // Simulate submission time before showing success
  setTimeout(() => {
    setSubmitting(false);
    onSubmitted && onSubmitted({ success: true });
  }, 1500);
};


  const inputClass =
    "w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow";

  // Logic for deciding T&C content and link text
  const termsContent = isJob ? JOB_TERMS : INTERNSHIP_TERMS;
  const termsLinkText = isJob ? "Job Application Terms" : "Internship Terms & Conditions";

  return (
    <>
      <AnimatePresence>
        {isModalOpen && <TermsAndConditionsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} termsContent={termsContent} isJob={isJob} />}
      </AnimatePresence>
        
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name *"
          value={form.name}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClass}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handleChange}
          required
          className={inputClass}
        />

        {/* Display the role selected from the card */}
        <input
          name="role"
          value={role || "(Select a role above)"}
          readOnly
          className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 font-semibold"
        />

        {isJob ? (
          <>
            <input
              name="experience"
              placeholder="Total Experience (in years) *"
              value={form.experience}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              name="currentCTC"
              placeholder="Current CTC (LPA) *"
              value={form.currentCTC}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              name="expectedCTC"
              placeholder="Expected CTC (LPA) *"
              value={form.expectedCTC}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </>
        ) : (
          <>
            <input
              name="college"
              placeholder="College Name *"
              value={form.college}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              name="department"
              placeholder="Major / Department *"
              value={form.department}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              name="passoutYear"
              placeholder="Passout Year / Batch *"
              value={form.passoutYear}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <textarea
              name="address"
              placeholder="Current Address *"
              value={form.address}
              onChange={handleChange}
              rows={2}
              required
              className={inputClass}
            />
          </>
        )}

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center bg-gray-50">
          <input
            id="resume-input"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="hidden"
          />
          <label htmlFor="resume-input" className="cursor-pointer block">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-500" />
            {resume ? (
              <p className="text-sm text-green-600 font-medium">{resume.name} (Ready)</p>
            ) : (
              <p className="text-sm text-gray-600">Click to upload or drag and drop your Resume (Required)</p>
            )}
          </label>
        </div>

        {/* NEW: Terms and Conditions Checkbox */}
        <div className="flex items-center">
          <input
            id="agree-terms"
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
            // Checkbox is only required and can be unchecked for internships, 
            // for jobs we allow submission even if unchecked, as per the placeholder T&C
            required={!isJob} 
          />
          <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-600">
            I agree to the 
            <button type="button" onClick={() => setIsModalOpen(true)} className="text-gray-900 font-medium underline ml-1 hover:text-gray-700 transition">
              {termsLinkText}
            </button>
            {isJob ? "." : " *"} 
          </label>
        </div>


        <motion.button
          type="submit"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold shadow-lg disabled:opacity-50"
          // Disabled if submitting OR (it's an internship AND terms are not agreed)
          disabled={submitting || (!isJob && !agreedToTerms)} 
        >
          {submitting ? "Opening WhatsApp..." : "Submit Application via WhatsApp 💬"}
        </motion.button>

        <p className="text-xs text-center text-gray-500">*You will need to attach your resume manually in WhatsApp if it did not auto-send.*</p>
      </form>
    </>
  );
};

// Main Careers Page (single-file export)
export default function CareersPage() {
  const grouped = groupByCategory(BENEFITS);
  const defaultActive = BENEFITS[1];
  const [activeBenefit, setActiveBenefit] = useState(defaultActive);
  const [openCategory, setOpenCategory] = useState(defaultActive.category);
  const [activeTab, setActiveTab] = useState("internships");
  const [submissionMessage, setSubmissionMessage] = useState(null);
  // NEW STATE: To store the role/job selected from the card
  const [selectedRole, setSelectedRole] = useState("");

  const internships = [
    { title: "Full Stack Development Intern", duration: "3-6 months", requirements: ["React.js", "Node.js", "Database basics", "Git"] },
    { title: "Mobile App Development Intern", duration: "3-6 months", requirements: ["React Native or Flutter", "Mobile UI/UX", "REST APIs","Firebase or Local Storage"  ] },
    { title: "AI/ML Intern", duration: "3-6 months", requirements: ["Python", "Machine Learning basics", "TensorFlow","Data Preprocessing & Visualization"  ] },
    { title: "UI/UX Design Intern", duration: "3-6 months", requirements: ["Figma", "Wireframing", "Prototyping"] },
  ];

  const jobs = [
    { title: "Senior Full Stack Developer", type: "Full-time", experience: "4-6 years", skills: ["React", "Node.js", "MongoDB", "AWS"] },
    { title: "Mobile App Developer", type: "Full-time", experience: "3-5 years", skills: ["React Native", "iOS/Android", "Firebase"] },
    { title: "DevOps Engineer", type: "Full-time", experience: "3-5 years", skills: ["Docker", "Kubernetes", "AWS/Azure"] },
    { title: "UI/UX Designer", type: "Full-time", experience: "2-4 years", skills: ["Figma", "Adobe XD", "User Research"] },
  ];

  const hiringSteps = [
    { title: "Apply", description: "Submit your resume and details" },
    { title: "Screening", description: "Initial review of your application" },
    { title: "Technical Round", description: "Assessment of your technical skills" },
    { title: "Interview", description: "Final HR and managerial discussions" },
    { title: "Offer", description: "Job offer and onboarding" },
  ];

  const onFormSubmitted = ({ success }) => {
    setSubmissionMessage(success ? { type: "success", text: "Application prepared — please finish sending it in WhatsApp." } : { type: "error", text: "There was an issue preparing your application." });
    setTimeout(() => setSubmissionMessage(null), 6000);
    // Optionally reset selected role after successful form completion
    setSelectedRole(""); 
  };
  
  // NEW HANDLER: For job/internship cards
  const handleApply = (role, isJob) => {
    setSelectedRole(role); // Set the specific role
    setActiveTab('process'); // Switch to the form tab
    
    // Smooth scroll to the bottom/form section
    setTimeout(() => {
        document.getElementById('application-form-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* HERO */}
      <section className="pt-28 pb-10 text-center bg-white">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Join Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Build your career with <span className="font-semibold text-gray-900">MarqWon</span> — work on cutting-edge technology and shape the future of AI.</p>
        </motion.div>
      </section>
{/* BENEFITS + IMAGE */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose MarqWon?</motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left image - UPDATED: aspect-[4/3] (taller than 16:9) on mobile, aspect-square on large screens */}
            <div className="lg:col-span-2 relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <SmoothImage src={activeBenefit.img} alt={activeBenefit.title} overlayClass="" />

                <motion.div key={activeBenefit.id} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="absolute bottom-0 left-0 right-0 p-6 bg-white/90">
                  <p className="text-lg font-bold text-gray-900">{activeBenefit.title}</p>
                  <p className="text-sm text-gray-700 mt-1">{activeBenefit.description}</p>
                </motion.div>
              </div>
            </div>

           {/* Right list - FIX APPLIED HERE: Wrapped the content in motion.div */}
            <motion.div 
              className="lg:col-span-3 space-y-6 p-4 md:p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {Object.entries(grouped).map(function ([category, items]) {
                const isOpen = openCategory === category;
                return (
                  <div key={category} className="border-b border-gray-200 pb-4">
                    <button onClick={() => setOpenCategory(isOpen ? null : category)} className="w-full flex justify-between items-center text-left">
                      <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                      <span className="text-gray-500">{isOpen ? '−' : '+'}</span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="mt-4 space-y-3 overflow-hidden">
                          {items.map((it) => (
                            <li key={it.id} onClick={() => { setActiveBenefit(it); setOpenCategory(category); } } className={`flex items-start p-3 rounded-lg cursor-pointer transition-all ${activeBenefit.id === it.id ? 'bg-gray-100 shadow-sm' : 'hover:bg-gray-50'}`}>
                              <CheckCircle className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${activeBenefit.id === it.id ? 'text-gray-900' : 'text-gray-400'}`} />
                              <div>
                                <p className={`text-lg ${activeBenefit.id === it.id ? 'font-medium text-gray-900' : 'text-gray-700'}`}>{it.title}</p>
                                <p className="text-sm text-gray-500 mt-1 hidden md:block">{it.description}</p>
                              </div>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="py-12 container mx-auto px-4 max-w-6xl"> 
        <div className="flex justify-center mb-8 gap-3 flex-wrap">
          {['internships', 'jobs', 'process'].map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} className={`px-5 py-2 rounded-full font-semibold transition ${activeTab === t ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {t === 'internships' ? 'Internships' : t === 'jobs' ? 'Find a Job' : 'Hiring Process'}
            </button>
          ))}
          
        </div>

        {activeTab === 'internships' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((i, idx) => (
              <motion.div key={i.title} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.06 }} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{i.title}</h3>
                <p className="text-sm text-gray-600 mb-4">Duration: {i.duration}</p>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  {i.requirements.map((r) => (
                    <li key={r} className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" />{r}</li>
                  ))}
                </ul>
                {/* UPDATED: Call handleApply with the role and isJob=false */}
                <button 
                    onClick={() => handleApply(i.title, false)} 
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {jobs.map((j, idx) => (
              <motion.div key={j.title} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.06 }} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{j.title}</h3>
                <p className="text-sm text-gray-600 mb-4"><span className="font-medium text-gray-800">{j.type}</span> | Experience: {j.experience}</p>
                <div className="flex flex-wrap gap-2 mb-4">{j.skills.map(s => <span key={s} className="text-xs px-3 py-1 bg-gray-100 rounded-full">{s}</span>)}</div>
                {/* UPDATED: Call handleApply with the role and isJob=true */}
                <button 
                    onClick={() => handleApply(j.title, true)} 
                    className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'process' && (
          <div id="application-form-section">
            <h2 className="text-2xl font-bold text-center mb-8">Our Simple Hiring Journey</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {hiringSteps.map((s, idx) => (
                <div key={s.title} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-50">
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full mx-auto mb-2 flex items-center justify-center font-semibold">{idx+1}</div>
                  <h3 className="font-bold text-sm text-gray-900">{s.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{s.description}</p>
                </div>
              ))}
            </div>

            {submissionMessage && (
              <div className={`p-3 mb-6 rounded-md max-w-2xl mx-auto text-sm ${submissionMessage.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{submissionMessage.text}</div>
            )}

            <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Submit Your Application</h3>
              {/* UPDATED: Pass the selectedRole and dynamically determine if it's a job or internship (if a role is selected and it matches a job title) */}
              <ApplicationForm 
                isJob={jobs.some(j => j.title === selectedRole)} 
                role={selectedRole || "(Select a role above)"} 
                onSubmitted={onFormSubmitted} 
              />
              {!selectedRole && (
                <p className="text-sm text-center text-red-500 mt-4">Please select a job or internship above to fill the form for that specific role.</p>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}