import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, CheckCircle } from "lucide-react";
import "../sections/footer.jsx";

const Careers = () => {
  const [resumeFile, setResumeFile] = useState(null);
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
    if (e.target.files && e.target.files[0]) setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (resumeFile) formDataToSend.append("resume", resumeFile);

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("❌ Failed to submit application");
    }

    // reset form
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
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = (role, isJobRole = false) => {
    setFormData({ ...formData, role });
    setIsJob(isJobRole);
    setActiveTab("process");
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
    { title: "Technical Round", description: "Assessment of your technical skills" },
    { title: "Interview", description: "Final HR and managerial discussions" },
    { title: "Offer", description: "Job offer and onboarding" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="pt-40 pb-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600">
            Build your career with <b>MarqWon</b> — work on cutting-edge
            technology projects and grow with us.
          </p>
        </motion.div>
      </section>

      {/* Tabs */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex justify-center mb-12 gap-4">
          {["internships", "jobs", "process"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
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
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{intern.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Duration: {intern.duration}
                </p>
                <ul className="text-sm text-gray-700 mb-4">
                  {intern.requirements.map((req) => (
                    <li key={req} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" /> {req}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleApply(intern.title, false)}
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Type: {job.type} | Experience: {job.experience}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700 border border-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleApply(job.title, true)}
                  className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-12">
              {hiringSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-full mx-auto mb-4 font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Resume Form */}
            <div
              ref={formRef}
              className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Submit Your Resume
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common fields */}
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full p-3 rounded border border-gray-300"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full p-3 rounded border border-gray-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full p-3 rounded border border-gray-300"
                />

                <input
                  type="text"
                  placeholder="Role Applied *"
                  value={formData.role}
                  readOnly
                  className="w-full p-3 rounded border border-gray-300 bg-gray-100"
                />

                {/* Internship Fields */}
                {!isJob && (
                  <>
                    <input
                      type="text"
                      placeholder="College Name *"
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      placeholder="Major / Department *"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      placeholder="Passout Year / Batch *"
                      value={formData.passoutYear}
                      onChange={(e) =>
                        setFormData({ ...formData, passoutYear: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <textarea
                      placeholder="Address *"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                  </>
                )}

                {/* Job Fields */}
                {isJob && (
                  <>
                    <input
                      type="text"
                      placeholder="Experience (in years) *"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      placeholder="Current CTC *"
                      value={formData.currentCTC}
                      onChange={(e) =>
                        setFormData({ ...formData, currentCTC: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <input
                      type="text"
                      placeholder="Expected CTC *"
                      value={formData.expectedCTC}
                      onChange={(e) =>
                        setFormData({ ...formData, expectedCTC: e.target.value })
                      }
                      required
                      className="w-full p-3 rounded border border-gray-300"
                    />
                    <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center hover:border-gray-600 transition">
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
                        Optional: Upload Letter of Recommendation
                      </label>
                    </div>
                  </>
                )}

                {/* Resume Upload */}
                <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center hover:border-gray-600 transition">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume" className="cursor-pointer block">
                    <Upload className="w-10 h-10 mx-auto mb-2 text-gray-500" />
                    {resumeFile ? (
                      <p className="text-sm text-green-600 font-medium">
                        {resumeFile.name}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop resume
                      </p>
                    )}
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        )}
        
      </section>
     
    </div>
    
  );
};

export default Careers;
