import React from 'react';
import { FileText, CheckCircle, Code, ShieldOff, Scale, Phone, MapPin, Globe, Link2, AlertTriangle, User, Gavel, Briefcase } from 'lucide-react';

// --- Data Definitions ---

const termsData = {
    companyName: "MARQWON DYNAMICS PRIVATE LIMITED",
    documentVersion: "MWDP-TNC-V1.0",
    effectiveDate: "10 December 2025",
    // These specific service items will be used in the Scope & Nature of Services section
    services: [
        "Custom Software & Web Application Development",
        "Mobile App Development (iOS, Android, Cross-platform)",
        "Cloud Migration & DevOps",
        "UI/UX Design & Branding",
        "IT Consulting & Managed IT Services & Remote Support",
    ],
    jurisdiction: "Courts in Madurai, Tamil Nadu, India",
    contact: {
        email: "info@marqwon.com",
        address: "No. 9, Lavanya Complex, GR Nagar, Moondrumavadi Rd, Pudur Bazaar, Madurai, Tamil Nadu, India - 625007"
    }
};

// --- Structured Terms & Conditions Content (From Raw Text - ** Removed) ---

const termsSections = [
    { icon: CheckCircle, title: "1. Acceptance of Terms", content: <>
        Continued use of the Website constitutes your acceptance of these Terms and our Privacy Policy, which together form a binding legal agreement under the Indian Contract Act, 1872. If you disagree with any part of the terms, you must discontinue access immediately.
    </> },
    { icon: Code, title: "2. Scope & Nature of Services", content: <>
        MarqWon Dynamics Private Limited is an IT services provider. Our services, which are non-exhaustive and include:
        <ul className="list-disc pl-5 mt-2 space-y-1 text-base">
            {termsData.services.map((service, index) => <li key={index}>{service}</li>)}
        </ul>
        are described on the Website for marketing and informational purposes only. This information does not constitute a formal legal offer. Any definitive service engagement requires a separate, duly executed written agreement, such as a Master Service Agreement or Statement of Work.
    </> },
    { icon: ShieldOff, title: "3. Intellectual Property Rights (IPR)", content: <>
        All content on the Website, including text, graphics, logos, icons, images, audio, video, software, and source code, is the exclusive property of MarqWon Dynamics Private Limited. This proprietary content is fully protected under the Copyright Act, 1957, and other applicable laws. Your use of the Website grants you no express or implied license or right to use any of our Intellectual Property Rights except strictly for the purpose of viewing the content.
    </> },
    { icon: Briefcase, title: "4. User Obligations & Prohibited Conduct", content: <>
        You expressly agree and warrant that you will not engage in prohibited conduct, including, but not limited to, copying, modifying, distributing, or reverse-engineering any part of the Website; using automated scripts or bots; attempting unauthorized access to our systems; transmitting viruses, malware, or harmful code; or engaging in any activity that violates the Information Technology Act, 2000, or any other applicable law.
    </> },
    { icon: Link2, title: "5. Third-Party Links", content: "The Website may contain hyperlinks to third-party sites. We provide these links solely for your convenience. We are not responsible for the content, security, or privacy practices of these external sites." },
    { 
        icon: Scale, 
        title: "6. Disclaimer of Warranties", 
        // Note: The raw text combines Disclaimer and Limitation of Liability. I'll split them in the rendering logic for clarity.
        content: <>
            <h3 className="text-xl font-semibold mt-4 mb-2">Disclaimer of Warranties</h3>
            <p className="text-base italic mb-4">
                THE WEBSITE AND ALL ITS CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. MARQWON DYNAMICS PRIVATE LIMITED EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We offer no warranty that the Website will be uninterrupted, error-free, or fully secure.
            </p>

            <h3 className="text-xl font-semibold mb-2">Limitation of Liability (Section 7 in raw text)</h3>
            <p className="text-base">
                TO THE FULLEST EXTENT PERMITTED BY LAW, MARQWON DYNAMICS PRIVATE LIMITED, its directors, employees, and affiliates, shall NOT BE LIABLE for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenues, data, use, goodwill, or other intangible losses, resulting from your use of, or inability to use, the Website.
            </p>
        </> 
    },
    { icon: User, title: "8. Indemnification", content: "You agree to indemnify, defend, and hold harmless MarqWon Dynamics Private Limited, its officers, directors, and employees, from and against any and all claims or demands arising out of your violation of these Terms." },
    { icon: Gavel, title: "9. Governing Law & Dispute Resolution", content: <>
        These Terms shall be governed by and construed in accordance with the laws of India. Any dispute, claim, or controversy arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the competent courts in Madurai, Tamil Nadu, India.
    </> },
    { icon: Briefcase, title: "10. Termination", content: "We reserve the right to suspend or terminate your access to the Website at any time, with or without prior notice, for any breach of these Terms." },
    { icon: FileText, title: "11. Entire Agreement & Severability", content: "These Terms constitute the entire agreement between you and MarqWon Dynamics Private Limited concerning the Website. If any provision of these Terms is deemed invalid or unenforceable by a court of competent jurisdiction, the remainder of the provisions shall continue in full force and effect." },
];

// ------------------------
//   Terms Section Component (Modified to render un-numbered titles for the final output as requested in the previous turn)
// ------------------------

const TermsSection = ({ icon: Icon, title, children }) => {
    // Logic to remove the number and period (e.g., "1. " or "10. ") from the title
    const displayTitle = title.replace(/^\d+\.\s*/, '');

    return (
        <div className="mb-12 border-b border-gray-100 pb-8 ">
            <div className="flex items-start mb-4 ">
                <Icon className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <h2
                    className="text-3xl font-extrabold text-black leading-tight" 
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                    {displayTitle}
                </h2>
            </div>
            <div
                className="text-gray-700 text-lg font-light leading-relaxed pl-9" 
                style={{ fontFamily: 'Inter, sans-serif' }}
            >
                {children}
            </div>
        </div>
    );
};

// ------------------------
//   MAIN TERMS & CONDITIONS PAGE
// ------------------------

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Header Block */}
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

                {/* Preamble (Custom Section - ** Removed) */}
                <section className="mb-16 border-b border-gray-100 pb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <h3 
                        className="text-2xl font-extrabold text-black leading-tight mb-4 pl-9"
                        style={{ fontFamily: 'Poppins, sans-serif' }} 
                    >
                        Preamble
                    </h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed pl-9">
                        By accessing or using <a href="https://marqwon.com" className="text-indigo-600 hover:underline">https://marqwon.com</a> (the “Website”), you acknowledge that you have read, understood, and agree to be legally bound by these Terms & Conditions.
                    </p>
                </section>

                {/* Dynamic Content Sections */}
                {termsSections.map((section, index) => (
                    <TermsSection key={index} icon={section.icon} title={section.title}>
                        {section.content}
                    </TermsSection>
                ))}

                {/* Contact Information (Section 12 in raw text) */}
                <div className="mb-12 pt-4">
                    <div className="flex items-start mb-6">
                        <Phone className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                        <h2
                            className="text-3xl font-extrabold text-black leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Contact Information
                        </h2>
                    </div>

                    <div className="pl-9 space-y-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <p className="text-base font-light text-gray-700">
                            For any questions regarding these Terms & Conditions, please contact us at:
                        </p>
                        <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-sm max-w-lg">
                            <p className="font-medium text-gray-900">Email: <a href={`mailto:${termsData.contact.email}`} className="text-indigo-600 hover:underline">{termsData.contact.email}</a></p>
                            <p className="mt-1 text-gray-600">Address: {termsData.contact.address}</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-10">
                    <p className="text-center text-sm text-gray-400">© 2025 {termsData.companyName}. All rights reserved.</p>
                </div>

            </div>
        </div>
    );
}