import React from 'react';
import { ShieldCheck, Mail, MapPin, Layers, Briefcase, Lock, User, TrendingUp } from 'lucide-react';

// --- Data Definitions (Updated to match detailed policy text) ---

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
    // Updated data table with full retention details
    dataTable: [
        {
            category: "Identity & Contact Data",
            data: "Name, Email, Phone, Company Name, Designation",
            collection: "Contact/Quote forms, email, WhatsApp Business",
            purpose: "Respond to inquiries, communicate, send quotes, facilitate service delivery",
            legalBasis: "Consent / Contractual Necessity",
            retention: "Up to 5 years post-engagement"
        },
        {
            category: "Technical & Usage Data",
            data: "IP address, browser type/version, pages visited, time spent, referral source",
            collection: "Cookies, server logs, Google Analytics, Microsoft Clarity",
            purpose: "Website performance analysis, security monitoring, improving user experience",
            legalBasis: "Consent (via cookie banner)",
            retention: "Generally retained for 26 months"
        },
        {
            category: "Communication Data",
            data: "Email threads, chat logs, recorded calls (if any)",
            collection: "Direct communication channels (Email, live chat, phone)",
            purpose: "Robust service delivery, support, internal quality assurance",
            legalBasis: "Contractual Necessity",
            retention: "Duration of relationship plus 3 years"
        },
        {
            category: "Transaction & Financial Data",
            data: "Invoice amount, payment date, transaction ID, partial bank details (if applicable)",
            collection: "Razorpay / Cashfree payment processors, direct bank transfers",
            purpose: "Payment processing, financial accounting, tax compliance, and refund processing",
            legalBasis: "Legal Obligation (Tax/Regulatory) and Contract",
            retention: "8 years (as per Companies Act & GST requirements)"
        },
    ],
    // Expanded processor details for section 5
    processors: [
        { name: "Google LLC and Microsoft Corporation", location: "USA", purpose: "Analytics, Email hosting, workspace services", safeguards: "Standard Contractual Clauses (SCCs) and DPDP-compliant contracts" },
        { name: "Razorpay / Cashfree", location: "India", purpose: "Payment services", safeguards: "RBI compliant and DPDP contracts" },
        { name: "AWS / DigitalOcean", location: "India / USA", purpose: "Cloud hosting and backups", safeguards: "DPDP-compliant Data Processing Agreements (DPA)" },
    ]
};

// ------------------------
//   Policy Section Component (Modified to remove numbering)
// ------------------------

const PolicySection = ({ icon: Icon, title, children }) => {
    // Logic to remove the number, period, and space (e.g., "1. " or "10. ") from the title
    const displayTitle = title.replace(/^\d+\.\s*/, '');

    return (
        <div className="mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-start mb-4">
                <Icon className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <h2
                    className="text-3xl font-extrabold text-black leading-tight" // Poppins Sim (font-extrabold)
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {displayTitle}
                </h2>
            </div>
            <div
                className="text-gray-700 text-lg font-light leading-relaxed pl-9" // Inter Light Thin Sim (font-light)
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {children}
            </div>
        </div>
    );
};

// ------------------------
//   MAIN PRIVACY POLICY PAGE
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
                        style={{ fontFamily: 'Poppins, sans-serif' }}
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

                {/* Introduction (Custom Section) */}
                <section className="mb-16 border-b border-gray-100 pb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                        We, at MarqWon Dynamics Private Limited (“Company,” “we,” “us,” “our”), act as the Data Fiduciary under the Digital Personal Data Protection Act, 2023 (the “DPDP Act”). This Privacy Policy describes how we collect, use, store, share, and protect your personal data when you visit our website (<a href="https://marqwon.com" className="text-indigo-600 hover:underline">https://marqwon.com</a>) or engage with our services.
                    </p>
                </section>

                {/* 1. Categories of Personal Data We Process */}
                <PolicySection icon={Layers} title="1. Categories of Personal Data We Process">
                    <p className="mb-6">We process several categories of Digital Personal Data based on your interaction with us, adhering strictly to the principle of purpose limitation:</p>

                    <div className="overflow-x-auto shadow-sm border border-gray-100 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">Category</th>
                                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">Source</th>
                                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">Purpose</th>
                                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">Legal Basis</th>
                                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/5">Retention</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {policyData.dataTable.map((row, index) => (
                                    <tr key={index} className="transition-colors duration-150 odd:bg-gray-50 hover:bg-indigo-50/50">
                                        <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">{row.category}</td>
                                        <td className="px-3 py-4 whitespace-normal text-sm font-light text-gray-600">{row.collection}</td>
                                        <td className="px-3 py-4 whitespace-normal text-sm font-light text-gray-600">{row.purpose}</td>
                                        <td className="px-3 py-4 whitespace-normal text-sm font-light text-gray-600">{row.legalBasis}</td>
                                        <td className="px-3 py-4 whitespace-normal text-sm font-light text-gray-600">{row.retention}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </PolicySection>


                {/* 2. Lawful Basis for Processing: Obtaining Consent */}
                <PolicySection icon={Lock} title="2. Lawful Basis for Processing: Obtaining Consent">
                    <p className="mb-3">Our commitment to the DPDP Act mandates that any Consent obtained is always free, informed, specific, unconditional, and unambiguous.</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>We secure consent through clear affirmative action from the Data Principal (e.g., a checkbox that is not pre-ticked).</li>
                        <li>The Data Principal may withdraw consent at any time with the same ease by using the mechanism provided (e.g., replying to an email or writing to <a href="mailto:info@marqwon.com" className="text-indigo-600 hover:underline">info@marqwon.com</a>).</li>
                    </ul>
                </PolicySection>


                {/* 3. Rights of the Data Principal (Your Rights) */}
                <PolicySection icon={User} title="3. Rights of the Data Principal (Your Rights)">
                    <p className="mb-3">As a Data Principal, you hold the following rights under Sections 11–13 of the DPDP Act, which we will uphold completely free of charge:</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>Right to Access: Obtain a summary and confirmation of the personal data we process.</li>
                        <li>Right to Correction & Updation: Correct inaccurate or misleading data.</li>
                        <li>Right to Erasure ("Right to be Forgotten"): Request deletion when the purpose of processing is served or consent is withdrawn.</li>
                        <li>Right to Grievance Redressal.</li>
                        <li>Right to Nominate: Nominate a person to exercise these rights in the event of your death or incapacity.</li>
                    </ul>
                    <p className="mt-4 text-sm font-normal text-gray-600">
                        All valid requests concerning your rights will be responded to within 30 days of receipt (or a shorter period if specified by DPDP Rules).
                    </p>
                </PolicySection>


                {/* 4. Security Safeguards & Data Breach Notification */}
                <PolicySection icon={ShieldCheck} title="4. Security Safeguards & Data Breach Notification">
                    <p className="mb-3">We implement commercially reasonable technical and organisational measures to protect your personal data, including:</p>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                        <li>End-to-end SSL/TLS encryption.</li>
                        <li>Firewalls, Role-Based Access Control (RBAC), and regular security audits.</li>
                        <li>Breach Notification: In the event of a personal data breach, we will notify the Data Protection Board of India and the affected Data Principals without undue delay (not later than 72 hours, where feasible).</li>
                    </ul>
                </PolicySection>


                {/* 5. Third-Party Data Processors (Sub-Processors) */}
                <PolicySection icon={TrendingUp} title="5. Third-Party Data Processors (Sub-Processors)">
                    <p className="mb-3">We engage necessary third-party processors to facilitate our enterprise operations. We remain fully responsible for their compliance. Our key processors include:</p>

                    <ul className="list-disc pl-5 space-y-2 text-base">
                        {policyData.processors.map((p, index) => (
                            <li key={index}>
                                {p.name} ({p.location}): Used for {p.purpose}. Safeguards include {p.safeguards}.
                            </li>
                        ))}
                    </ul>
                </PolicySection>


                {/* 6. Cross-Border Data Transfer */}
                <PolicySection icon={MapPin} title="6. Cross-Border Data Transfer">
                    <p className="text-base">Certain data may be processed in data centres outside India (e.g., USA, Singapore) by our Sub-Processors. Such transfers only occur under government-approved mechanisms, ensuring the destination country provides an adequate level of protection.</p>
                </PolicySection>


                {/* 7. Data Retention & Secure Deletion */}
                <PolicySection icon={Briefcase} title="7. Data Retention & Secure Deletion">
                    <p className="text-base">Personal data is retained only for the duration specified in Section 1 or as legally required. Once the retention period expires, the data will be securely deleted or anonymised beyond recovery.</p>
                </PolicySection>


                {/* 8. Designated Grievance Redressal Officer (GRO) - Modified Title here */}
                <div className="mb-12 border-b border-gray-100 pb-8 pt-4">
                    <div className="flex items-start mb-6">
                        <Mail className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <h2
                            className="text-3xl font-extrabold text-black leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Designated Grievance Redressal Officer (GRO)
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

                {/* 9. Policy Updates */}
                <PolicySection icon={Briefcase} title="9. Policy Updates">
                    <p className="text-base">We may update this policy periodically. We will communicate any material changes via a prominent notice on our website or through email. The latest version and its effective date are always posted here: <a href="https://marqwon.com/privacy-policy" className="text-indigo-600 hover:underline">https://marqwon.com/privacy-policy</a>.</p>
                </PolicySection>



            </div>
        </div>
    );
}