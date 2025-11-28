import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  CheckCircle,
  Zap, // For Cutting-Edge Technology
  Feather, // For Creative Freedom
  Users, // For Collaborative Environment
  TrendingUp, // For Accelerated Growth
  Calendar, // For Flexible Work Model
  XCircle, // For Error Messages
} from "lucide-react";

// Data for the new culture/values section
const benefits = [
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "Work hands-on with the latest frameworks, generative AI models, and cloud technologies to solve real-world problems. We dedicate time and resources purely to exploratory research.",
    category: "Technology Focus",
    color: "bg-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Accelerated Growth",
    description:
      "Benefit from personalized mentorship, continuous learning budgets, and a clear path for professional advancement and leadership. Your career path is custom-designed for rapid elevation.",
    category: "Work and Growth",
    color: "bg-green-600",
  },
  {
    icon: Calendar,
    title: "Flexible Work Model",
    description:
      "We offer flexible hours and remote options, trusting you to achieve peak productivity and maintain a healthy work-life balance. We focus on results, not hours spent at a desk.",
    category: "Work and Growth",
    color: "bg-yellow-600",
  },
  {
    icon: Feather,
    title: "Creative Freedom",
    description:
      "We encourage bold ideas and provide the autonomy needed to experiment, innovate, and drive projects from concept to completion. Your voice is essential to our product strategy.",
    category: "Culture and Team",
    color: "bg-purple-600",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Join a tight-knit team where open communication, knowledge sharing, and mutual respect are foundational to our success. We succeed and fail together, always learning from each other.",
    category: "Culture and Team",
    color: "bg-red-600",
  },
];

// Helper function to group benefits by category
const groupBenefits = () => {
  const groups = {
    "Work and Growth": [],
    "Culture and Team": [],
    "Technology Focus": [],
  };
  benefits.forEach((item) => {
    groups[item.category].push(item);
  });
  return groups;
};
const groupedBenefits = groupBenefits();

const Careers = () => {
  // State to track the currently selected benefit item for interaction
  const [activeBenefit, setActiveBenefit] = useState(benefits[1]); // Start with Accelerated Growth active
  const [resumeFile, setResumeFile] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState({
    type: null,
    text: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    currentCTC: "",
    expectedCTC: "",
    college: "",
    department: "",
    passoutYear: "",
    address: "",
  });
  const [activeTab, setActiveTab] = useState("internships");
  const [isJob, setIsJob] = useState(false);
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage({ type: null, text: "" }); // Clear previous message

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (resumeFile) formDataToSend.append("resume", resumeFile);

    try {
      // NOTE: This fetch call is targeting a placeholder URL (localhost:5000).
      // In a real application, replace this with your actual backend endpoint.
      // Since a real API is not available in this environment, we simulate success/failure.

      // Simulate a network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success for demonstration
      const success = true; // Change to false to test error message

      if (success) {
        setSubmissionMessage({
          type: "success",
          text: `Application for ${formData.role} submitted successfully! We'll be in touch soon.`,
        });
      } else {
        // This path would be hit if the simulated 'success' was false
        setSubmissionMessage({
          type: "error",
          text: "❌ Application submission failed. Please ensure all required fields are filled.",
        });
      }
    } catch (error) {
      // This path would be hit if the fetch failed (e.g., server down)
      setSubmissionMessage({
        type: "error",
        text: "❌ Failed to submit application due to a network error.",
      });
    }

    // Reset form data and file after submission attempt
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      experience: "",
      currentCTC: "",
      expectedCTC: "",
      college: "",
      department: "",
      passoutYear: "",
      address: "",
    });
    setResumeFile(null);
    e.target.reset(); // Resets input fields including the file input
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = (role, isJobRole = false) => {
    setFormData({ ...formData, role });
    setIsJob(isJobRole);
    setActiveTab("process");
    setSubmissionMessage({ type: null, text: "" }); // Clear previous message
    setTimeout(scrollToForm, 300);
  };

  const internships = [
    {
      title: "Full Stack Development Intern",
      duration: "3-6 months",
      requirements: ["React.js", "Node.js", "Database basics", "Git"],
    },
    {
      title: "Mobile App Development Intern",
      duration: "3-6 months",
      requirements: ["React Native or Flutter", "Mobile UI/UX", "REST APIs"],
    },
    {
      title: "AI/ML Intern",
      duration: "3-6 months",
      requirements: ["Python", "Machine Learning basics", "TensorFlow"],
    },
    {
      title: "UI/UX Design Intern",
      duration: "3-6 months",
      requirements: ["Figma", "Wireframing", "Prototyping", "Creativity"],
    },
  ];

  const jobs = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "Mobile App Developer",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React Native", "iOS/Android", "Firebase"],
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Docker", "Kubernetes", "AWS/Azure"],
    },
    {
      title: "UI/UX Designer",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe XD", "User Research"],
    },
  ];

  const hiringSteps = [
    { title: "Apply", description: "Submit your resume and details" },
    { title: "Screening", description: "Initial review of your application" },
    {
      title: "Technical Round",
      description: "Assessment of your technical skills",
    },
    { title: "Interview", description: "Final HR and managerial discussions" },
    { title: "Offer", description: "Job offer and onboarding" },
  ];

  const tabClass = (tab) =>
    `px-6 py-2 rounded-full font-semibold transition ${
      activeTab === tab
        ? "bg-gray-900 text-white shadow-md shadow-gray-400"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  const inputClass =
    "w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow";

  // Dynamic class for the image overlay
  const imageOverlayClass = `absolute inset-0 transition-colors duration-500 ${
    activeBenefit
      ? `${activeBenefit.color} bg-opacity-30` // Use dynamic color if active
      : "bg-gray-900 bg-opacity-10" // Default gray overlay
  }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* Hero Section */}
      <section className="pt-40 pb-20 text-center bg-white shadow-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build your career with{" "}
            <b className="text-gray-900">MarqWon</b> — work on cutting-edge
            technology and shape the future of AI.
          </p>
        </motion.div>
      </section>

      {/* NEW: Culture and Benefits Section (Split-Layout as Requested) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-4xl font-extrabold text-center mb-16 text-gray-900 font-poppins"
          >
            Why Choose MarqWon?
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Side: Image with Dynamic Overlay */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Collaborative and modern office environment"
                className="w-full h-full object-cover"
              />
              {/* Dynamic Overlay Class */}
              <div className={imageOverlayClass}></div>
              {/* Dynamic Description Box on the Image */}
              {activeBenefit && (
                <motion.div
                  key={activeBenefit.title} // Key ensures re-render and animation on change
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-95 text-gray-900"
                >
                  <p className="text-lg font-bold mb-1">
                    {activeBenefit.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activeBenefit.description}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Right Side: Structured Benefits List */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-8 p-4 md:p-8 rounded-xl"
            >
              {Object.entries(groupedBenefits).map(([category, items], idx) => {
                const isCategoryActive =
                  activeBenefit && activeBenefit.category === category;
                const categoryClass = isCategoryActive
                  ? "border-gray-900"
                  : "border-gray-300";
                return (
                  <div
                    key={category}
                    className={`border-b ${categoryClass} pb-4 transition-colors duration-300`}
                  >
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 relative">
                      {category}
                      {/* Dynamic Line Bar */}
                      {isCategoryActive && (
                        <motion.span
                          layoutId="active-benefit-line"
                          className="absolute left-0 bottom-[-16px] h-1 w-full bg-gradient-to-r from-gray-900 to-gray-500"
                        ></motion.span>
                      )}
                    </h3>
                    <ul className="mt-6 space-y-3">
                      {items.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start text-gray-700 cursor-pointer p-2 rounded-lg transition-all ${
                            activeBenefit && activeBenefit.title === item.title
                              ? "bg-gray-100 text-gray-900 font-medium"
                              : "hover:bg-gray-50"
                          }`}
                          onClick={() => setActiveBenefit(item)}
                        >
                          {/* Checkmark icon, similar to the image's bullet */}
                          <CheckCircle
                            className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 transition-colors ${
                              activeBenefit &&
                              activeBenefit.title === item.title
                                ? "text-gray-900"
                                : "text-gray-500"
                            }`}
                          />
                          <p className="text-lg leading-snug">
                            {item.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
      {/* End of NEW Section */}

      {/* Tabs */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {["internships", "jobs", "process"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={tabClass(tab)}
            >
              {tab === "internships"
                ? "Internships"
                : tab === "jobs"
                ? "Find a Job"
                : "Hiring Process"}
            </button>
          ))}
        </div>

        {/* Internships */}
        {activeTab === "internships" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {internships.map((intern, i) => (
              <motion.div
                key={intern.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {intern.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Duration: {intern.duration}
                </p>
                <ul className="text-sm text-gray-700 mb-6 space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Key Requirements:
                  </h4>
                  {intern.requirements.map((req) => (
                    <li key={req} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />{" "}
                      {req}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleApply(intern.title, false)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Jobs */}
        {activeTab === "jobs" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium text-gray-800">
                    {job.type}
                  </span>{" "}
                  | Experience: {job.experience}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700 border border-gray-200 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleApply(job.title, true)}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition-all font-semibold shadow-md hover:shadow-lg"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Hiring Process + Resume Form */}
        {activeTab === "process" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Simple Hiring Journey
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-16">
              {hiringSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center rounded-full mx-auto mb-3 font-extrabold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Submission Message Box */}
            {submissionMessage.type && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 mb-6 rounded-lg font-medium max-w-2xl mx-auto flex items-center shadow-lg ${
                  submissionMessage.type === "success"
                    ? "bg-green-100 text-green-800 border-green-300"
                    : "bg-red-100 text-red-800 border-red-300"
                }`}
              >
                {submissionMessage.type === "success" ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <XCircle className="w-5 h-5 mr-2" />
                )}
                {submissionMessage.text}
              </motion.div>
            )}

            {/* Resume Form */}
            <div
              ref={formRef}
              className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-2xl border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                Submit Your Application
                <span className="block text-sm font-normal text-gray-500">
                  {formData.role || "Select a role above to auto-fill"}
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common fields */}
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="role"
                  placeholder="Role Applied *"
                  value={formData.role}
                  readOnly
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 font-semibold"
                />

                {/* Conditional Fields: Internship */}
                {!isJob && (
                  <>
                    <input
                      type="text"
                      name="college"
                      placeholder="College Name *"
                      value={formData.college}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="department"
                      placeholder="Major / Department *"
                      value={formData.department}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="passoutYear"
                      placeholder="Passout Year / Batch *"
                      value={formData.passoutYear}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <textarea
                      name="address"
                      placeholder="Current Address *"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="2"
                      className={inputClass}
                    />
                  </>
                )}

                {/* Conditional Fields: Job */}
                {isJob && (
                  <>
                    <input
                      type="text"
                      name="experience"
                      placeholder="Total Experience (in years) *"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="currentCTC"
                      placeholder="Current CTC (LPA) *"
                      value={formData.currentCTC}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="expectedCTC"
                      placeholder="Expected CTC (LPA) *"
                      value={formData.expectedCTC}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 text-center bg-gray-50">
                      <input
                        id="letter"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label
                        htmlFor="letter"
                        className="cursor-pointer block text-sm text-gray-600"
                      >
                        Optional: Upload Letter of Recommendation (PDF, DOC)
                      </label>
                    </div>
                  </>
                )}

                {/* Resume Upload (Required for both) */}
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-gray-600 transition duration-300 bg-gray-50">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer block">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                    {resumeFile ? (
                      <p className="text-sm text-green-600 font-medium">
                        {resumeFile.name} (Ready to upload)
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop your Resume (Required)
                      </p>
                    )}
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition font-semibold shadow-lg"
                >
                  Submit Application
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Careers;