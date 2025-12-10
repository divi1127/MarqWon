import React from 'react';
import { ShieldCheck, Mail, MapPin, Layers, Briefcase, Lock, User, TrendingUp } from 'lucide-react';

// --- Data Definitions ---

const policyData = {
    companyName: "MARQWON DYNAMICS PRIVATE LIMITED",
    dataFiduciary: "MarqWon Dynamics Private Limited (“Company”, “we”, “us”, “our”)",
    registeredOffice: "No. 9, Lavanya Complex, GR Nagar, Moondrumavadi Rd, Pudur Bazaar, Madurai, Tamil Nadu, India - 625007",
    policyVersion: "MWDP-PP-V1.0",
    lastUpdated: "10 December 2025",
    grievanceOfficer: {
        name: "Jeevan Prasanth A (COO & Head of Operation)",
        email: "info@marqwon.com",
        address: "No. 9, Lavanya Complex, GR Nagar, Moondrumavadi Rd, Pudur Bazaar, Madurai, Tamil Nadu, Tamil Nadu, India - 625007",
    },
    dataTable: [
        {
            category: "Identity & Contact Data",
            data: "Name, Email, Phone, Company Name",
            collection: "Contact forms, Quote requests, Email",
            purpose: "Respond to inquiries, provide quotes, deliver services",
            legalBasis: "Consent / Contractual necessity"
        },
        {
            category: "Technical & Usage Data",
            data: "IP address, browser type, pages visited, time spent",
            collection: "Cookies, Google Analytics, Microsoft Clarity",
            purpose: "Improve website performance, security, analytics",
            legalBasis: "Consent (via cookie banner)"
        },
        {
            category: "Transaction Data",
            data: "Amount, Date, Payment Status",
            collection: "Razorpay / Cashfree payment gateways",
            purpose: "Process payments, accounting & tax compliance",
            legalBasis: "Legal obligation / Contract"
        },
    ],
    processors: ["Razorpay", "Cashfree", "Google", "Microsoft", "cloud providers"]
};

// ------------------------
//   Policy Section Component (Modified)
// ------------------------

// Removed section number prefix from title
const PolicySection = ({ icon: Icon, title, children }) => (
    <div className="mb-12 border-b border-gray-100 pb-8">
        <div className="flex items-start mb-4">
            <Icon className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
            <h2 
                className="text-3xl font-extrabold text-black leading-tight" // Lighter Header Color (text-gray-600) & Poppins Sim (font-extrabold)
                style={{ fontFamily: 'Poppins, sans-serif' }} // Explicit Poppins simulation
            >
                {title}
            </h2>
        </div>
        <div 
            className="text-gray-700 text-lg font-light leading-relaxed pl-9" // Inter Light Thin Sim (font-light)
            style={{ fontFamily: 'Inter, sans-serif' }} // Explicit Inter simulation
        >
            {children}
        </div>
    </div>
);

// ------------------------
//   MAIN PRIVACY POLICY PAGE
// ------------------------

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header Block */}
                <header className="text-center mb-16 mt-20">
                    <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h1 
                        className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }} // Poppins Sim
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-500 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Digital Personal Data Protection Policy (Compliant with DPDP Act, 2023)
                    </p>
                    <div className="mt-6 text-sm text-gray-400 font-light space-x-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span className="inline-block">Document Version: {policyData.policyVersion}</span>
                        <span className="inline-block">|</span>
                        <span className="inline-block">Last Updated: {policyData.lastUpdated}</span>
                    </div>
                </header>

                {/* Introduction */}
                <section className="mb-16 border-b border-gray-100 pb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        {policyData.dataFiduciary} with registered office at <strong className="font-normal">{policyData.registeredOffice}</strong> is the **Data Fiduciary** under the Digital Personal Data Protection Act, 2023 (DPDP Act). We respect your privacy and are committed to protecting your personal data in a lawful, fair, and transparent manner.
                    </p>
                </section>


                {/* 1. Data We Collect (Title modified) */}
                <PolicySection icon={Layers} title="Personal Data We Collect">
                    <p className="mb-6">The table below details the categories of personal data we collect, the methods of collection, the purposes for processing, and the legal basis as required by the DPDP Act.</p>

                    <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/4">Category</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/4">How Collected</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/4">Purpose</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/4">Legal Basis</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {policyData.dataTable.map((row, index) => (
                                    <tr key={index} className="transition-colors duration-150 odd:bg-gray-50 hover:bg-indigo-50/50">
                                        <td className="px-4 py-4 whitespace-normal text-sm font-medium text-gray-900">{row.category}</td>
                                        <td className="px-4 py-4 whitespace-normal text-sm font-light text-gray-600">{row.collection}</td>
                                        <td className="px-4 py-4 whitespace-normal text-sm font-light text-gray-600">{row.purpose}</td>
                                        <td className="px-4 py-4 whitespace-normal text-sm font-light text-gray-600">{row.legalBasis}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </PolicySection>


                {/* 2. Consent & Your Rights (Title modified) */}
                <PolicySection icon={User} title="Consent & Your Rights">
                    <ul className="list-disc pl-5 space-y-3">
                        <li>
                            **Consent Requirement:** We collect data only with your free, informed, specific, and **unambiguous consent**.
                        </li>
                        <li>
                            **Right to Withdraw:** You can withdraw your consent anytime. Please contact us via email to initiate this process.
                        </li>
                        <li>
                            **Your Rights:** As a Data Principal, you have the right to:
                            <ul className="list-disc pl-8 mt-2 space-y-1 text-base">
                                <li>Access and Correction of data.</li>
                                <li>Erasure (deletion) of data.</li>
                                <li>Grievance Redressal.</li>
                                <li>Nomination.</li>
                            </ul>
                        </li>
                    </ul>
                </PolicySection>


                {/* 3. Security & Data Protection (Title modified) */}
                <PolicySection icon={Lock} title="Security & Data Protection">
                    <p className="mb-3">We implement robust technical and organizational measures to safeguard your data:</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>We utilize **SSL encryption** and strict access controls.</li>
                        <li>Regular security audits are conducted to prevent breaches.</li>
                        <li>In case of a data breach, we will notify affected individuals and the **Data Protection Board** without delay.</li>
                    </ul>
                </PolicySection>


                {/* 4. Third-Party Processors & Cross-Border Transfer (Title modified) */}
                <PolicySection icon={TrendingUp} title="Third-Party Processors & Cross-Border Transfer">
                    <p className="mb-3">We engage trusted third-party processors under strict contractual obligations:</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>**Processors include:** {policyData.processors.join(", ")}.</li>
                        <li>**Cross-Border Transfer:** Data may be transferred outside India only when legally permitted under the DPDP Act.</li>
                    </ul>
                </PolicySection>


                {/* 5. Data Retention (Title modified) */}
                <PolicySection icon={Briefcase} title="Data Retention">
                    <p className="text-base">We keep your personal data only for as long as required for the original purpose of collection or as mandated by law.</p>
                </PolicySection>


                {/* 6. Grievance Officer (Title modified) */}
                <div className="mb-12 border-b border-gray-100 pb-8 pt-4">
                    <div className="flex items-start mb-6">
                        <Mail className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <h2 
                            className="text-3xl font-extrabold text-gray-600 leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Grievance Officer (GRO)
                        </h2>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 p-6 rounded-lg shadow-sm pl-12">
                        <dl className="space-y-3">
                            <div>
                                <dt className="text-sm font-normal text-gray-500">Name & Role</dt>
                                <dd className="text-lg font-medium text-gray-900">{policyData.grievanceOfficer.name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-normal text-gray-500">Email for Grievance</dt>
                                <dd className="text-lg font-medium text-indigo-600 hover:text-indigo-700">
                                    <a href={`mailto:${policyData.grievanceOfficer.email}`}>{policyData.grievanceOfficer.email}</a>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-normal text-gray-500">Address</dt>
                                <dd className="text-lg font-light text-gray-700">{policyData.grievanceOfficer.address}</dd>
                            </div>
                        </dl>
                        <p className="mt-4 text-sm font-light text-gray-600">
                            We will respond to your grievance within the timeline prescribed under DPDP Rules.
                        </p>
                    </div>
                </div>

                {/* 7. Changes and 8. Contact (Title modified) */}
                <PolicySection icon={MapPin} title="Changes & Contact Us">
                    <ul className="list-disc pl-5 space-y-3 text-base">
                        <li>**Changes to this Policy:** Any updates will be posted on this page with a new "Last Updated" date.</li>
                        <li>**Contact:** For privacy-related questions, please email us at <a href="mailto:info@marqwon.com" className="font-normal text-indigo-600 hover:underline">info@marqwon.com</a>.</li>
                    </ul>
                </PolicySection>

            </div>
        </div>
    );
}