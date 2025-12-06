import {
    Globe, ShieldCheck, Smartphone, Workflow, Rocket, ShoppingBag, Brush,
    Megaphone, Layout, Cloud, Code, Cpu, ShoppingCart, MonitorSmartphone,
} from "lucide-react";

// ------------------------
//   CATEGORIES
// ------------------------

export const CATEGORIES = {
    DEVELOPMENT: "Development",
    BUSINESS_DESIGN: "Business & Design",
    TECH_MARKETING: "Tech & Marketing",
    INFRASTRUCTURE: "IT Infrastructure & Networking",
};

// ------------------------
//   SLUGIFY UTILITY
// ------------------------

export function slugify(text = "") {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
}

// ------------------------
//   SERVICE DATA (ENRICHED)
// ------------------------

export const services = [
    // DEVELOPMENT
    {
        title: "Website Development",
        category: CATEGORIES.DEVELOPMENT,
        desc: "We build modern, fast, and SEO-optimized websites and web applications tailored to your business needs.",
        icon: Globe,
        imgUrl: "https://i.pinimg.com/736x/1f/9b/bc/1f9bbcdf9179f763ae9849eaca82313e.jpg",
        color: "from-blue-500 to-indigo-500",
        details: {
            whyChoose: [
                "Expert SEO structuring for top search rankings.",
                "Custom, mobile-first, and responsive designs.",
                "Blazing-fast loading speeds using modern frameworks.",
                "Continuous integration and deployment (CI/CD) pipelines.",
            ],
            technologies: [
                "Frontend: React, Next.js, Vue.js, Svelte",
                "Styling: Tailwind CSS, Styled Components",
                "Backend: Node.js (Express), Django (Python), Laravel (PHP)",
                "Database: PostgreSQL, MongoDB, MySQL",
            ],
            features: [
                "Content Management System (CMS) Integration (e.g., Strapi, Sanity)",
                "Full E-commerce setup with payment gateway integration",
                "User Authentication and Authorization systems",
                "Performance optimization and caching",
            ],
            benefits: [
                "Increased organic traffic and leads by 40%.",
                "Superior user experience leading to higher conversion rates.",
                "Future-proof, easily maintainable, and scalable codebase.",
                "Reduced hosting costs through efficient cloud usage.",
            ],
        },
    },
    {
        title: "Application Development",
        category: CATEGORIES.DEVELOPMENT,
        desc: "Full-stack mobile and desktop application development.",
        icon: Smartphone,
        imgUrl: "https://i.pinimg.com/1200x/7b/84/9c/7b849c98e3011ee6e1593518fbd6fd10.jpg",
        color: "from-green-500 to-emerald-500",
        details: {
            whyChoose: [
                "Native-quality performance across all platforms (iOS, Android, Desktop).",
                "Focus on security and data privacy.",
                "Agile development process with continuous user feedback.",
            ],
            technologies: [
                "Mobile: React Native, Flutter, Swift/Kotlin (Native)",
                "Desktop: Electron, Tauri",
                "Cloud Services: Firebase, AWS Amplify",
            ],
            features: [
                "Offline data synchronization and persistence.",
                "Push notifications and real-time updates.",
                "Deep integration with device hardware (camera, GPS).",
            ],
            benefits: [
                "Reach a wider audience with multi-platform availability.",
                "Streamlined business operations via dedicated tools.",
                "Improved customer engagement through mobile experience.",
            ],
        },
    },
    {
        title: "CRM, ERP & Workflow Systems",
        category: CATEGORIES.DEVELOPMENT,
        desc: "Bespoke ERP and CRM automation solutions.",
        icon: Workflow,
        imgUrl: "https://i.pinimg.com/1200x/cc/2f/28/cc2f28803b5f077c3b31d12fae24f5be.jpg",
        color: "from-orange-500 to-yellow-500",
        details: {
            whyChoose: [
                "Solutions built to map your exact business logic, not generic templates.",
                "Seamless integration with existing legacy systems.",
                "High security for sensitive customer and business data.",
            ],
            technologies: [
                "Frameworks: ASP.NET Core, Java Spring",
                "Database: MS SQL Server, Oracle",
                "Integration: Custom RESTful APIs, Zapier/Integromat integration.",
            ],
            features: [
                "Automated lead tracking and sales pipeline management.",
                "Real-time inventory and resource planning.",
                "Custom reporting and dashboard analytics.",
            ],
            benefits: [
                "Up to 30% reduction in operational costs through automation.",
                "Better decision-making with centralized, accurate data.",
                "Increased productivity and reduced manual entry errors.",
            ],
        },
    },
    {
        title: "Custom Software",
        category: CATEGORIES.DEVELOPMENT,
        desc: "Custom software aligned with your business process.",
        icon: Code,
        imgUrl: "https://i.pinimg.com/736x/09/15/54/091554e529bad55281c0f86ad6565e4b.jpg",
        color: "from-indigo-500 to-sky-500",
        details: {
            whyChoose: [
                "Full consultation to define the exact problem and solution scope.",
                "Modular architecture for future flexibility and scalability.",
                "Dedicated team supporting the full software lifecycle.",
            ],
            technologies: [
                "Language agnostic approach based on best fit (Python, Go, C#)",
                "Microservices and containerization (Docker, Kubernetes)",
                "DevOps tools (Jenkins, GitLab CI)",
            ],
            features: [
                "Scalable APIs for internal and external use.",
                "Robust error handling and logging.",
                "Comprehensive user training and documentation.",
            ],
            benefits: [
                "A perfect fit for your unique, specialized business challenge.",
                "Elimination of bottlenecks caused by off-the-shelf software limitations.",
                "Competitive advantage through proprietary technology.",
            ],
        },
    },
    {
        title: "Startup MVP",
        category: CATEGORIES.DEVELOPMENT,
        desc: "Rapid prototyping and MVP development for startups.",
        icon: Rocket,
        imgUrl: "https://i.pinimg.com/1200x/c5/ec/52/c5ec523a122c184e504756db1374e8e6.jpg",
        color: "from-red-500 to-pink-500",
        details: {
            whyChoose: [
                "Extreme focus on core functionality to validate your market hypothesis quickly.",
                "Cost-effective development to maximize runway.",
                "Clear path and documentation for future scaling.",
            ],
            technologies: [
                "Rapid prototyping tools (Figma, Framer)",
                "Lean tech stack (e.g., Firebase, Next.js, Vercel)",
                "Serverless functions (AWS Lambda, Google Functions)",
            ],
            features: [
                "Core user registration and profile management.",
                "Single, essential feature of your product.",
                "Basic analytics integration to measure key metrics.",
            ],
            benefits: [
                "Launch your product in weeks, not months.",
                "Collect real user feedback to inform the next iteration.",
                "Secure early funding with a working, demonstrable product.",
            ],
        },
    },
    // BUSINESS & DESIGN
    {
        title: "E-Commerce Development",
        category: CATEGORIES.BUSINESS_DESIGN,
        desc: "Conversion-focused e-commerce platforms.",
        icon: ShoppingBag,
        imgUrl: "https://i.pinimg.com/736x/5e/6b/ed/5e6bed1abbf248bfdf74ca63f481f150.jpg",
        color: "from-rose-500 to-pink-600",
        details: {
            whyChoose: [
                "Deep experience in optimizing checkout funnels for reduced abandonment.",
                "Scalable infrastructure ready for holiday traffic spikes.",
                "Integration with essential inventory and shipping systems.",
            ],
            technologies: [
                "Platforms: WooCommerce, Magento, Custom Headless Solutions",
                "Payments: Stripe, PayPal, Local payment gateways",
                "Search: Algolia, Elastic Search",
            ],
            features: [
                "Custom product configurators and builders.",
                "Advanced loyalty and reward programs.",
                "Multi-currency and multi-language support.",
            ],
            benefits: [
                "Direct increase in online sales and revenue.",
                "Higher customer retention through personalized experiences.",
                "Efficient management of products and orders from one dashboard.",
            ],
        },
    },
    {
        title: "Shopify Development",
        category: CATEGORIES.BUSINESS_DESIGN,
        desc: "Custom theme design, app integration, and optimization for the Shopify platform.",
        icon: ShoppingCart,
        imgUrl: "https://i.pinimg.com/1200x/6e/8b/4c/6e8b4c7d0d0c3c8f8b0d4c1f5e8f4c1f.jpg",
        color: "from-green-500 to-emerald-600",
        details: {
            whyChoose: [
                "Official Shopify Partner expertise.",
                "Deep knowledge of Liquid templating for unique themes.",
                "App development and integration to extend core functionality.",
            ],
            technologies: [
                "Shopify Plus, Hydrogen (Headless)",
                "Liquid templating language",
                "Third-party apps (Klaviyo, Gorgias, Recharge)",
            ],
            features: [
                "Custom theme development from scratch (no reliance on default themes).",
                "Subscription model setup and management.",
                "Performance audits and speed optimization.",
            ],
            benefits: [
                "A highly branded, unique store without platform limitations.",
                "Maximized use of the Shopify ecosystem.",
                "Fast go-to-market with a reliable, feature-rich platform.",
            ],
        },
    },
    {
        title: "BigCommerce Development",
        category: CATEGORIES.BUSINESS_DESIGN,
        desc: "Building and optimizing high-performance BigCommerce stores for retail growth.",
        icon: MonitorSmartphone,
        imgUrl: "https://i.pinimg.com/1200x/2c/8e/3c/2c8e3c8f8d5e8f4e2f8c6d7d5e4b4b4b.jpg",
        color: "from-blue-700 to-indigo-600",
        details: {
            whyChoose: [
                "Expertise in integrating BigCommerce with complex back-office systems (e.g., Netsuite, SAP).",
                "Focus on B2B features like quote management and customer groups.",
                "Leveraging the platform's Open SaaS architecture.",
            ],
            technologies: [
                "BigCommerce Stencil Framework",
                "BigCommerce API",
                "Headless frontends using Next.js/Gatsby",
            ],
            features: [
                "Custom checkout flows and customer grouping logic.",
                "Complex product catalog and variation management.",
                "Seamless integration with third-party marketplaces.",
            ],
            benefits: [
                "Enterprise-level scalability and security out of the box.",
                "Lower Total Cost of Ownership (TCO) compared to custom builds.",
                "Robust B2B capabilities for wholesale clients.",
            ],
        },
    },
    {
        title: "UI/UX Design",
        category: CATEGORIES.BUSINESS_DESIGN,
        desc: "Clean and intuitive digital product design.",
        icon: Layout,
        imgUrl: "https://i.pinimg.com/736x/1e/86/92/1e8692bbc6bb423b046c5f8594d3c5ce.jpg",
        color: "from-purple-500 to-indigo-500",
        details: {
            whyChoose: [
                "Data-driven design decisions based on user research and analytics.",
                "Focus on accessibility (WCAG compliance).",
                "Full wireframing, prototyping, and user testing cycles.",
            ],
            technologies: [
                "Tools: Figma, Sketch, Adobe XD",
                "Prototyping: Principle, Framer",
                "Testing: Maze, UserTesting.com",
            ],
            features: [
                "Comprehensive Design Systems (style guides, component libraries).",
                "Interactive, high-fidelity prototypes.",
                "Detailed developer hand-off specs.",
            ],
            benefits: [
                "Increased user satisfaction and reduced support costs.",
                "Higher conversion rates due to optimized workflows.",
                "A consistent, professional brand experience across all touchpoints.",
            ],
        },
    },
    {
        title: "Graphics Design",
        category: CATEGORIES.BUSINESS_DESIGN,
        desc: "Brand visuals, posters, and illustrations.",
        icon: Brush,
        imgUrl: "https://i.pinimg.com/736x/48/44/1d/48441d3e70891c22f1266d7eac86bc6a.jpg",
        color: "from-pink-500 to-red-500",
        details: {
            whyChoose: [
                "Creative output aligned perfectly with your brand strategy and messaging.",
                "Fast turnaround times for marketing assets.",
                "Provide all source files and full commercial rights.",
            ],
            technologies: [
                "Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
                "Vector and Raster graphics expertise",
                "3D Rendering tools (Blender, Cinema 4D)",
            ],
            features: [
                "Logo and full brand identity kits.",
                "Marketing materials (brochures, ads, social media graphics).",
                "Custom illustrations and infographic design.",
            ],
            benefits: [
                "Stronger brand recognition and recall.",
                "Professional, high-quality assets for all campaigns.",
                "Clear visual communication that resonates with your target audience.",
            ],
        },
    },
    // TECH & MARKETING
    {
        title: "Digital Marketing",
        category: CATEGORIES.TECH_MARKETING,
        desc: "SEO, PPC, social media campaigns.",
        icon: Megaphone,
        imgUrl: "https://i.pinimg.com/736x/86/6d/9a/866d9aee116f675218ca015ccbccb42a.jpg",
        color: "from-yellow-500 to-orange-500",
        details: {
            whyChoose: [
                "Certified specialists in Google Ads and Meta Ads.",
                "Transparent reporting focused on ROI, not vanity metrics.",
                "Integrated strategies covering search, social, and content.",
            ],
            technologies: [
                "SEO: Ahrefs, SEMrush, Google Search Console",
                "PPC: Google Ads, Meta Ads Manager",
                "Analytics: Google Analytics 4, Tag Manager",
            ],
            features: [
                "Comprehensive keyword research and content strategy.",
                "Full-cycle PPC campaign management (creation, optimization, reporting).",
                "Audience targeting and remarketing campaigns.",
            ],
            benefits: [
                "Measurable growth in website traffic and qualified leads.",
                "Lower customer acquisition cost (CAC).",
                "Stronger brand authority and market presence.",
            ],
        },
    },
    {
        title: "Game Development",
        category: CATEGORIES.TECH_MARKETING,
        desc: "Immersive 2D and 3D games.",
        icon: Rocket,
        imgUrl: "https://i.pinimg.com/736x/b6/2f/9e/b62f9e7368a03ce1fe867ca96d1dcd04.jpg",
        color: "from-teal-500 to-green-500",
        details: {
            whyChoose: [
                "Experienced team in Unity and Unreal Engine.",
                "Focus on engaging gameplay loops and high-quality graphics.",
                "Expertise in monetization strategies (in-app purchases, ads).",
            ],
            technologies: [
                "Game Engines: Unity 3D, Unreal Engine 5",
                "Programming: C#, C++",
                "Assets: Blender, Maya, Adobe Substance Painter",
            ],
            features: [
                "Multiplayer functionality and dedicated server deployment.",
                "Cross-platform porting (PC, Console, Mobile).",
                "Custom AI and procedural content generation.",
            ],
            benefits: [
                "A captivating and marketable final product.",
                "Technical reliability and optimization for smooth performance.",
                "Support for post-launch updates and community management.",
            ],
        },
    },
    // IT INFRASTRUCTURE & NETWORKING
    {
        title: "Cloud Networking",
        category: CATEGORIES.INFRASTRUCTURE,
        desc: "Cloud infrastructure setup, deployment, and management on AWS, Azure, or GCP.",
        icon: Cloud,
        imgUrl: "https://i.pinimg.com/736x/0b/c8/28/0bc828902b89ba3ecbb7786be3272112.jpg",
        color: "from-sky-500 to-blue-500",
        details: {
            whyChoose: [
                "Certified cloud architects (AWS Solutions Architect, Azure Administrator).",
                "Cost optimization focused on reducing cloud spend immediately.",
                "High-availability and disaster recovery planning.",
            ],
            technologies: [
                "Platforms: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)",
                "IaC: Terraform, CloudFormation",
                "Automation: Ansible, Kubernetes",
            ],
            features: [
                "Serverless architecture implementation (Lambda, Functions).",
                "VPC setup, load balancing, and auto-scaling groups.",
                "Compliance implementation (HIPAA, GDPR, SOC 2).",
            ],
            benefits: [
                "Scalability to handle any traffic volume.",
                "Reduced IT operational overhead.",
                "Enhanced data security and compliance posture.",
            ],
        },
    },
    {
        title: "Compute and Peripherals",
        category: CATEGORIES.INFRASTRUCTURE,
        desc: "Supply, installation, and support for desktops, laptops, servers, and office peripherals.",
        icon: Cpu,
        imgUrl: "https://i.pinimg.com/1200x/3c/64/5d/3c645dd8e6f5402e97ac24ac27322d5b.jpg",
        color: "from-red-500 to-pink-500",
        details: {
            whyChoose: [
                "Authorized reseller of top hardware brands.",
                "Full lifecycle management, from procurement to disposal.",
                "Rapid on-site or remote support.",
            ],
            technologies: [
                "Virtualization: VMware, Hyper-V",
                "Operating Systems: Windows Server, Linux, macOS",
                "Endpoint Management: Intune, SCCM",
            ],
            features: [
                "Bulk hardware deployment and setup.",
                "24/7 monitoring and predictive maintenance.",
                "Secure data wiping and hardware disposal.",
            ],
            benefits: [
                "Reliable, high-performance equipment for all employees.",
                "Minimized hardware downtime and quick issue resolution.",
                "Consolidated purchasing and inventory management.",
            ],
        },
    },
    {
        title: "Networking and Security",
        category: CATEGORIES.INFRASTRUCTURE,
        desc: "Design, implementation, and maintenance of secure wired and wireless network infrastructure.",
        icon: ShieldCheck,
        imgUrl: "https://i.pinimg.com/1200x/7f/a2/65/7fa265893abc2a78adb61db623a409e5.jpg",
        color: "from-teal-500 to-cyan-600",
        details: {
            whyChoose: [
                "Expertise in modern mesh and SD-WAN technologies.",
                "Proactive threat detection and vulnerability assessments.",
                "Certified Cisco, Juniper, and Fortinet professionals.",
            ],
            technologies: [
                "Security: Firewalls (Next-Gen), IDS/IPS, SIEM",
                "Networking: Cisco Meraki, Ubiquiti, SD-WAN",
                "Access Control: Multi-Factor Authentication (MFA), VPNs",
            ],
            features: [
                "Guest/employee network segmentation and QoS optimization.",
                "Managed endpoint detection and response (EDR).",
                "Regular penetration testing and compliance audits.",
            ],
            benefits: [
                "Unbreakable, fast, and secure internal networks.",
                "Protection against ransomware and cyber attacks.",
                "Guaranteed uptime for critical business applications.",
            ],
        },
    },
];

export const servicesByCategory = Object.values(CATEGORIES).map((c) => ({
    categoryTitle: c,
    services: services.filter((s) => s.category === c),
}));