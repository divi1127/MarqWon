import React from 'react';
import { FileText, CheckCircle, Code, ShieldOff, Scale, Phone, MapPin } from 'lucide-react';

// --- Data Definitions ---

const termsData = {
    companyName: "MARQWON DYNAMICS PRIVATE LIMITED",
    documentVersion: "MWDP-TNC-V1.0",
    effectiveDate: "10 December 2025",
    services: [
        "Custom Software Development",
        "Web & Mobile App Development",
        "Cloud Solutions",
        "IT Consulting",
        "Managed IT Services & Remote Support",
    ],
    jurisdiction: "Courts in Madurai, Tamil Nadu, India",
    contact: {
        email: "info@marqwon.com",
        address: "No. 9, Lavanya Complex, GR Nagar, Moondrumavadi Rd, Pudur Bazaar, Madurai, Tamil Nadu, India - 625007"
    }
};

// ------------------------
//   Terms Section Component (Modified)
// ------------------------

const TermsSection = ({ icon: Icon, title, children }) => (
    <div className="mb-12 border-b border-gray-100 pb-8">
        <div className="flex items-start mb-4">
            <Icon className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
            <h2
                className="text-3xl font-extrabold text-gray-600 leading-tight" // Lighter Header Color (text-gray-600) & Poppins Sim
                style={{ fontFamily: 'Poppins, sans-serif' }}
            >
                {title}
            </h2>
        </div>
        <div
            className="text-gray-700 text-lg font-light leading-relaxed pl-9" // Inter Light Thin Sim
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            {children}
        </div>
    </div>
);

// ------------------------
//   MAIN TERMS & CONDITIONS PAGE
// ------------------------

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header Block (Updated for light background and Poppins/Inter font simulation) */}
                <header className="text-center mb-16 mt-20">
                    <FileText className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                    <h1
                        className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-gray-500 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Website Terms of Use for {termsData.companyName}
                    </p>
                    <div className="mt-6 text-sm text-gray-400 font-light space-x-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <span className="inline-block">Document Version: {termsData.documentVersion}</span>
                        <span className="inline-block">|</span>
                        <span className="inline-block">Effective: {termsData.effectiveDate}</span>
                    </div>
                </header>

                
                {/* Acceptance of Terms (Title modified) */}
                <TermsSection icon={CheckCircle} title="Acceptance of Terms">
                    <p>
                        By accessing or using the website, you unconditionally agree to be bound by these **Terms & Conditions** and our separate **Privacy Policy**. If you do not agree to all of these terms, do not use this website.
                    </p>
                </TermsSection>


                {/* Nature of the Website (Title modified) */}
                <TermsSection icon={Code} title="Nature of the Website">
                    <p className="mb-4">
                        This website serves solely to provide information about the services offered by MarqWon Dynamics Private Limited, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-base">
                        {termsData.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <p className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded">
                        **Crucial Note:** All content on this site is **indicative only**. A separate, written agreement (such as a Master Service Agreement or Statement of Work) is formally required for any paid engagement or service delivery.
                    </p>
                </TermsSection>


                {/* Intellectual Property (Title modified) */}
                <TermsSection icon={ShieldOff} title="Intellectual Property">
                    <p className="mb-4">
                        All content present on this website, including but not limited to text, graphics, logos, code, design elements, and functionality, is the exclusive property of MarqWon Dynamics Private Limited.
                    </p>
                    <p className="text-base">
                        This property is protected under the **Copyright Act, 1957 (India)**. Any unauthorized reproduction, use, or distribution of this content is strictly prohibited.
                    </p>
                </TermsSection>


                {/* Prohibited Activities (Title modified) */}
                <TermsSection icon={ShieldOff} title="Prohibited Activities">
                    <p>
                        You are expressly prohibited from using the website for any activities that are illegal, infringe on the rights of others, or are harmful to the website's integrity. Prohibited activities include:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-base">
                        <li>Hacking, scraping, or unauthorized access to our systems.</li>
                        <li>Spreading malware, viruses, or any malicious code.</li>
                        <li>Identity theft or misrepresentation.</li>
                        <li>Any illegal activity under the **Information Technology Act, 2000**.</li>
                    </ul>
                </TermsSection>


                {/* Disclaimer of Warranties & Limitation of Liability (Titles modified) */}
                <div className="mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-start mb-4">
                        <Scale className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <h2
                            className="text-3xl font-extrabold text-gray-600 leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Disclaimer & Limitation of Liability
                        </h2>
                    </div>
                    <div className="text-gray-700 text-lg font-light leading-relaxed pl-9" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <h3 className="text-xl font-semibold mt-4 mb-2">Disclaimer of Warranties</h3>
                        <p className="text-base mb-4 italic">
                            The website is provided **“AS IS”** and **“AS AVAILABLE”** without any warranties of any kind, whether express or implied. We do not guarantee its continuous availability or freedom from errors.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                        <p className="text-base">
                            MarqWon Dynamics Private Limited shall not be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits or data) arising from your use of the website.
                        </p>
                    </div>
                </div>


                {/* Governing Law & Jurisdiction (Title modified) */}
                <TermsSection icon={MapPin} title="Governing Law & Jurisdiction">
                    <p className="text-base">
                        These Terms and your use of the website are governed by the laws of **India**.
                    </p>
                    <p className="mt-3 text-base font-semibold">
                        Exclusive jurisdiction for any dispute arising under these terms resides with the **Courts in Madurai, Tamil Nadu, India.**
                    </p>
                </TermsSection>


                {/* Changes to Terms & Contact (Titles modified) */}
                <div className="mb-12 pt-4">
                    <div className="flex items-start mb-6">
                        <Phone className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <h2
                            className="text-3xl font-extrabold text-gray-600 leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Changes & Contact
                        </h2>
                    </div>

                    <div className="pl-9 space-y-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <h3 className="text-xl font-semibold">Changes to Terms</h3>
                        <p className="text-base font-light text-gray-700">
                            We reserve the right to update these terms at any time. Your continued use of the website following any changes signifies your acceptance of the new terms.
                        </p>

                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <p className="text-base font-light text-gray-700">
                            For any questions regarding these Terms & Conditions, please reach out to us:
                        </p>
                        <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-sm max-w-sm">
                            <p className="font-medium text-gray-900">Email: <a href={`mailto:${termsData.contact.email}`} className="text-indigo-600 hover:underline">{termsData.contact.email}</a></p>
                            <p className="mt-1 text-gray-600">Address: {termsData.contact.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}