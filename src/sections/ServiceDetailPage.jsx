import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    CheckCircle,
    HardHat,
    Lightbulb,
    Zap,
    ArrowLeft,
} from 'lucide-react';

// 💡 IMPORTANT: Import data and slugify from your new data.js file
import { services, slugify } from './data'; 

// =======================================================
// === ServiceDetailPage Component ===
// =======================================================

export default function ServiceDetailPage() {
    const { slug } = useParams();

    // 1. Lookup the service object using the URL slug
    const service = services.find(s => slugify(s.title) === slug);

    // If service not found, redirect to a 404 page or the main services page
    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const { title, desc, imgUrl, details, category } = service;

    // Define the sections to loop through for consistent rendering
    const detailSections = [
        {
            title: "✅ Why Choose Us",
            key: 'whyChoose',
            icon: CheckCircle,
            color: 'text-green-600',
        },
        {
            title: "💻 Core Technologies",
            key: 'technologies',
            icon: HardHat,
            color: 'text-blue-600',
        },
        {
            title: "💡 Key Features",
            key: 'features',
            icon: Lightbulb,
            color: 'text-yellow-600',
        },
        {
            title: "🚀 Business Benefits",
            key: 'benefits',
            icon: Zap,
            color: 'text-red-600',
        },
    ];

    // Animation variants for the grid items
    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            {/* 🛑 Hero/Header Section */}
            <div className="relative h-[450px] overflow-hidden">
                <img src={imgUrl} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/70 flex items-end">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 text-white">
                        <Link to="/services" className="inline-flex items-center text-sm font-medium opacity-80 hover:opacity-100 transition mb-4">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Back to All Services
                        </Link>
                        <motion.h1
                            className="text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className="text-xl opacity-90 max-w-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {desc}
                        </motion.p>
                        <span className="inline-block mt-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            Category: {category}
                        </span>
                    </div>
                </div>
            </div>

            {/* 🛑 Detail Sections Grid */}
            <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {detailSections.map((section, index) => {
                        const Icon = section.icon;
                        const dataList = service.details?.[section.key] || [];

                        return (
                            <motion.div
                                key={section.key}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={itemVariants}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col"
                            >
                                {/* Section Header */}
                                <div className="flex items-center mb-6 border-b pb-4">
                                    <Icon className={`w-8 h-8 mr-3 ${section.color} flex-shrink-0`} />
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {section.title}
                                    </h2>
                                </div>
                                
                                {/* Content List */}
                                <ul className="space-y-3 flex-grow">
                                    {dataList.length > 0 ? (
                                        dataList.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-700">
                                                <ChevronRight className="w-5 h-5 mt-1 mr-2 text-blue-500 flex-shrink-0" />
                                                <span className="text-base">{item}</span>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="text-gray-400 italic">Detailed information for this section is being prepared.</li>
                                    )}
                                </ul>

                                {/* Call to Action Footer */}
                                <div className="mt-8 pt-4 border-t">
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                        Get a Quote for {title}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}