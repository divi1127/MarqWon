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
                "Expert SEO structuring for top search rankings,\nincluding schema markup and technical optimization.",
                "Custom, mobile-first, and responsive designs that\nensure a flawless experience on any device size.",
                "Blazing-fast loading speeds using modern frameworks\nlike Next.js and server-side rendering (SSR).",
                "Continuous integration and deployment (CI/CD) pipelines\nfor automated, error-free updates and delivery.",
            ],
            technologies: [
                "Frontend: React, Next.js, Vue.js, Svelte\nfor dynamic, high-performance user interfaces.",
                "Styling: Tailwind CSS, Styled Components\nfor efficient, utility-first, and component-based styling.",
                "Backend: Node.js (Express), Django (Python), Laravel (PHP)\nfor robust and secure server-side logic.",
                "Database: PostgreSQL, MongoDB, MySQL\nselected based on your data structure and scalability requirements.",
            ],
            features: [
                "Content Management System (CMS) Integration (e.g., Strapi, Sanity)\nallowing your team easy content updates.",
                "Full E-commerce setup with reliable payment gateway integration\nlike Stripe and local providers.",
                "User Authentication and Authorization systems\nensuring secure access and data protection for all users.",
                "Performance optimization and caching mechanisms\nto achieve top Lighthouse scores and user satisfaction.",
            ],
            benefits: [
                "Increased organic traffic and leads by 40% or more\nthrough superior search engine visibility.",
                "Superior user experience leading to higher conversion rates\nand improved customer retention.",
                "Future-proof, easily maintainable, and scalable codebase\nthat grows seamlessly with your business.",
                "Reduced hosting costs through efficient cloud usage\nand optimized resource management.",
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
                "Native-quality performance across all platforms (iOS, Android, Desktop)\nusing cross-platform frameworks to maximize reach.",
                "Focus on security and data privacy, implementing best practices\nfor encryption and compliance from day one.",
                "Agile development process with continuous user feedback\nto ensure the product meets market needs accurately.",
            ],
            technologies: [
                "Mobile: React Native, Flutter, Swift/Kotlin (Native)\nchoosing the right stack for optimal speed and control.",
                "Desktop: Electron, Tauri\nfor cross-platform desktop presence with web technologies.",
                "Cloud Services: Firebase, AWS Amplify\nfor simplified backend setup, hosting, and scaling.",
            ],
            features: [
                "Offline data synchronization and persistence\nto allow usage even without an internet connection.",
                "Push notifications and real-time updates\nto keep users engaged and informed instantly.",
                "Deep integration with device hardware (camera, GPS)\nto leverage full native capabilities.",
            ],
            benefits: [
                "Reach a wider audience with multi-platform availability\nfrom a single, unified codebase.",
                "Streamlined business operations via dedicated tools\ndesigned for efficiency and internal use.",
                "Improved customer engagement through a seamless\nand reliable mobile experience.",
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
                "Solutions built to map your exact business logic,\nnot generic templates, ensuring a perfect operational fit.",
                "Seamless integration with existing legacy systems\nto avoid costly data migration and disruption.",
                "High security for sensitive customer and business data\nmeeting strict regulatory standards.",
            ],
            technologies: [
                "Frameworks: ASP.NET Core, Java Spring\nfor enterprise-grade stability and performance.",
                "Database: MS SQL Server, Oracle\nmanaging large, transactional datasets reliably.",
                "Integration: Custom RESTful APIs, Zapier/Integromat integration\nfor connecting all your key services effortlessly.",
            ],
            features: [
                "Automated lead tracking and sales pipeline management\nto ensure no opportunity is missed.",
                "Real-time inventory and resource planning\noptimizing supply chain and minimizing waste.",
                "Custom reporting and dashboard analytics\nproviding actionable insights at a glance.",
            ],
            benefits: [
                "Up to 30% reduction in operational costs through automation\nof repetitive and time-consuming tasks.",
                "Better decision-making with centralized, accurate data\naccessible to all relevant departments.",
                "Increased productivity and reduced manual entry errors\nleading to higher data integrity.",
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
                "Full consultation to define the exact problem and solution scope\nensuring the final product solves the right challenge.",
                "Modular architecture for future flexibility and scalability\nallowing for phased development and easy updates.",
                "Dedicated team supporting the full software lifecycle\nfrom conceptual design to post-launch maintenance.",
            ],
            technologies: [
                "Language agnostic approach based on best fit (Python, Go, C#)\nselecting the most efficient tool for the job.",
                "Microservices and containerization (Docker, Kubernetes)\nfor highly resilient and independently deployable components.",
                "DevOps tools (Jenkins, GitLab CI)\nautomating infrastructure setup and deployment processes.",
            ],
            features: [
                "Scalable APIs for internal and external use\nsupporting seamless communication between services.",
                "Robust error handling and logging mechanisms\nto quickly identify and resolve system issues.",
                "Comprehensive user training and documentation\nensuring rapid and smooth adoption by your team.",
            ],
            benefits: [
                "A perfect fit for your unique, specialized business challenge\nwhere off-the-shelf solutions fall short.",
                "Elimination of bottlenecks caused by off-the-shelf software limitations\nstreamlining complex internal processes.",
                "Competitive advantage through proprietary technology\nthat is exclusively optimized for your market.",
            ],
        },
    },
    {
  title: "Startup MVP",
  category: CATEGORIES.DEVELOPMENT,
  // Added the full form "Minimum Viable Product" here
  desc: "Rapid prototyping and Minimum Viable Product (MVP) development for startups.",
  icon: Rocket,
  imgUrl: "https://i.pinimg.com/1200x/c5/ec/52/c5ec523a122c184e504756db1374e8e6.jpg",
  color: "from-red-500 to-pink-500",
  details: {
    whyChoose: [
      "Extreme focus on core functionality to validate your market hypothesis quickly\nreducing time-to-market significantly.",
      "Cost-effective development to maximize runway\nutilizing lean development practices and smart tech choices.",
      "Clear path and documentation for future scaling\nensuring the MVP codebase is production-ready.",
    ],
    technologies: [
      "Rapid prototyping tools (Figma, Framer)\nfor quick visual iteration before coding starts.",
      "Lean tech stack (e.g., Firebase, Next.js, Vercel)\nchosen for speed of development and low initial overhead.",
      "Serverless functions (AWS Lambda, Google Functions)\nfor automatic scaling and reduced infrastructure costs.",
    ],
    features: [
      "Core user registration and profile management\nthe absolute minimum required for user interaction.",
      "Single, essential feature of your product\nfocused on delivering the primary value proposition.",
      "Basic analytics integration to measure key metrics\nlike activation, retention, and drop-off points.",
    ],
    benefits: [
      "Launch your product in weeks, not months\ngiving you a head start on the competition.",
      "Collect real user feedback to inform the next iteration\nminimizing the risk of building the wrong features.",
      "Secure early funding with a working, demonstrable product\nshowing investors real traction.",
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
                "Deep experience in optimizing checkout funnels\nfor reduced cart abandonment and higher sales.",
                "Scalable infrastructure ready for holiday traffic spikes\nensuring uninterrupted trading during peak periods.",
                "Integration with essential inventory and shipping systems\nlike fulfillment warehouses and courier APIs.",
            ],
            technologies: [
                "Platforms: WooCommerce, Magento, Custom Headless Solutions\nselecting the best foundation for your scale and complexity.",
                "Payments: Stripe, PayPal, Local payment gateways\nproviding diverse and secure payment options for customers.",
                "Search: Algolia, Elastic Search\nfor ultra-fast and highly relevant product search capabilities.",
            ],
            features: [
                "Custom product configurators and builders\nallowing customers to personalize their purchases.",
                "Advanced loyalty and reward programs\nto encourage repeat purchases and build customer lifetime value.",
                "Multi-currency and multi-language support\nto expand your market reach globally.",
            ],
            benefits: [
                "Direct increase in online sales and revenue\nthrough a conversion-optimized user flow.",
                "Higher customer retention through personalized experiences\nand seamless purchasing journeys.",
                "Efficient management of products and orders\nfrom one centralized, easy-to-use dashboard.",
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
                "Official Shopify Partner expertise\nwith deep insight into the platform's latest features and updates.",
                "Deep knowledge of Liquid templating for unique themes\ndelivering highly customized front-end experiences.",
                "App development and integration to extend core functionality\nbuilding bespoke solutions where apps fall short.",
            ],
            technologies: [
                "Shopify Plus, Hydrogen (Headless)\nfor enterprise scalability and performance requirements.",
                "Liquid templating language\nthe foundation of all Shopify theme customization.",
                "Third-party apps (Klaviyo, Gorgias, Recharge)\nintegrated seamlessly for full-funnel automation.",
            ],
            features: [
                "Custom theme development from scratch (no reliance on default themes)\nfor a truly unique brand identity.",
                "Subscription model setup and management\nusing best-in-class third-party apps like Recharge.",
                "Performance audits and speed optimization\nensuring your store loads instantly to maximize conversions.",
            ],
            benefits: [
                "A highly branded, unique store without platform limitations\nsetting you apart from competitors.",
                "Maximized use of the Shopify ecosystem\nleveraging its reliability and vast app market.",
                "Fast go-to-market with a reliable, feature-rich platform\nreducing setup and launch complexity.",
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
                "Expertise in integrating BigCommerce with complex back-office systems\n(e.g., Netsuite, SAP) for unified operations.",
                "Focus on B2B features like quote management and customer groups\nto support wholesale and business sales.",
                "Leveraging the platform's Open SaaS architecture\nfor flexibility without sacrificing security or scalability.",
            ],
            technologies: [
                "BigCommerce Stencil Framework\nfor theme customization and design control.",
                "BigCommerce API\nfor deep integration with third-party and custom applications.",
                "Headless frontends using Next.js/Gatsby\nfor maximum performance and presentation flexibility.",
            ],
            features: [
                "Custom checkout flows and customer grouping logic\nperfect for complex pricing tiers and bulk orders.",
                "Complex product catalog and variation management\nhandling thousands of SKUs and intricate product rules.",
                "Seamless integration with third-party marketplaces\nlike Amazon and eBay for channel expansion.",
            ],
            benefits: [
                "Enterprise-level scalability and security out of the box\nbacked by robust cloud infrastructure.",
                "Lower Total Cost of Ownership (TCO)\ncompared to heavy custom builds like Magento Open Source.",
                "Robust B2B capabilities for wholesale clients\nleading to new revenue streams and client types.",
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
                "Data-driven design decisions based on user research and analytics\nensuring every design choice is justified by user needs.",
                "Focus on accessibility (WCAG compliance)\nto reach the broadest possible audience ethically and legally.",
                "Full wireframing, prototyping, and user testing cycles\nminimizing development risk by validating designs early.",
            ],
            technologies: [
                "Tools: Figma, Sketch, Adobe XD\nindustry-standard tools for collaborative design.",
                "Prototyping: Principle, Framer\ncreating interactive flows that feel like the finished product.",
                "Testing: Maze, UserTesting.com\nfor rapid, remote usability testing with target users.",
            ],
            features: [
                "Comprehensive Design Systems (style guides, component libraries)\nfor consistency and accelerated development.",
                "Interactive, high-fidelity prototypes\nready for stakeholder review and investor presentation.",
                "Detailed developer hand-off specs\nensuring perfect execution from design to code.",
            ],
            benefits: [
                "Increased user satisfaction and reduced support costs\ndue to highly intuitive and easy-to-use interfaces.",
                "Higher conversion rates due to optimized workflows\nand friction-less user journeys.",
                "A consistent, professional brand experience\nacross all touchpoints and products.",
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
                "Creative output aligned perfectly with your brand strategy and messaging\nto ensure visual consistency.",
                "Fast turnaround times for marketing assets\nsupporting agile campaign execution.",
                "Provide all source files and full commercial rights\ngiving you complete ownership of the final work.",
            ],
            technologies: [
                "Adobe Creative Suite (Illustrator, Photoshop, InDesign)\nleveraging industry-leading tools for quality.",
                "Vector and Raster graphics expertise\nfor scalable logos and detailed photographic work.",
                "3D Rendering tools (Blender, Cinema 4D)\nfor advanced visualization and product mockups.",
            ],
            features: [
                "Logo and full brand identity kits\nincluding color palettes, typography, and usage guidelines.",
                "Marketing materials (brochures, ads, social media graphics)\ndesigned for maximum impact across channels.",
                "Custom illustrations and infographic design\nmaking complex data engaging and easy to understand.",
            ],
            benefits: [
                "Stronger brand recognition and recall\nthrough memorable and professional visual assets.",
                "Professional, high-quality assets for all campaigns\ninstantly boosting your credibility.",
                "Clear visual communication that resonates with your target audience\nimproving message absorption.",
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
                "Certified specialists in Google Ads and Meta Ads\nmaximizing ad spend efficiency and return on investment (ROI).",
                "Transparent reporting focused on ROI, not vanity metrics\nproviding clear, actionable insights into performance.",
                "Integrated strategies covering search, social, and content\nfor a holistic and unified marketing approach.",
            ],
            technologies: [
                "SEO: Ahrefs, SEMrush, Google Search Console\nfor industry-leading keyword and technical analysis.",
                "PPC: Google Ads, Meta Ads Manager\nexpertly managing and optimizing paid campaigns.",
                "Analytics: Google Analytics 4, Tag Manager\nfor accurate tracking and conversion reporting.",
            ],
            features: [
                "Comprehensive keyword research and content strategy\nto dominate organic search results.",
                "Full-cycle PPC campaign management (creation, optimization, reporting)\ntaking the complexity off your hands.",
                "Audience targeting and remarketing campaigns\nto effectively recapture interested but unconverted visitors.",
            ],
            benefits: [
                "Measurable growth in website traffic and qualified leads\ndirectly impacting your sales pipeline.",
                "Lower customer acquisition cost (CAC)\nby optimizing campaigns for efficiency.",
                "Stronger brand authority and market presence\nestablishing you as a leader in your industry.",
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
                "Experienced team in Unity and Unreal Engine\nready to handle complex game physics and rendering.",
                "Focus on engaging gameplay loops and high-quality graphics\nto ensure maximum player retention.",
                "Expertise in monetization strategies (in-app purchases, ads)\nmaximizing revenue potential from your game.",
            ],
            technologies: [
                "Game Engines: Unity 3D, Unreal Engine 5\nthe leading platforms for modern game creation.",
                "Programming: C#, C++\nfor performance-critical game logic and engine customization.",
                "Assets: Blender, Maya, Adobe Substance Painter\nfor high-fidelity 3D modeling and texturing.",
            ],
            features: [
                "Multiplayer functionality and dedicated server deployment\nsupporting massive online player bases.",
                "Cross-platform porting (PC, Console, Mobile)\nexpanding your game's reach significantly.",
                "Custom AI and procedural content generation\nfor dynamic, replayable game worlds.",
            ],
            benefits: [
                "A captivating and marketable final product\nhighly optimized for performance and player fun.",
                "Technical reliability and optimization for smooth performance\non a wide range of devices.",
                "Support for post-launch updates and community management\nbuilding a loyal player base.",
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
                "Certified cloud architects (AWS Solutions Architect, Azure Administrator)\nensuring expert design and deployment.",
                "Cost optimization focused on reducing cloud spend immediately\nby right-sizing resources and utilizing reserved instances.",
                "High-availability and disaster recovery planning\nprotecting your critical data and applications from failure.",
            ],
            technologies: [
                "Platforms: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)\nmulti-cloud expertise for best-fit solutions.",
                "IaC: Terraform, CloudFormation\nmanaging your infrastructure as code for repeatability and versioning.",
                "Automation: Ansible, Kubernetes\nfor automated scaling, deployment, and configuration management.",
            ],
            features: [
                "Serverless architecture implementation (Lambda, Functions)\nreducing operational overhead and costs.",
                "VPC setup, load balancing, and auto-scaling groups\nfor robust network traffic management and scaling.",
                "Compliance implementation (HIPAA, GDPR, SOC 2)\nensuring your infrastructure meets strict regulatory requirements.",
            ],
            benefits: [
                "Scalability to handle any traffic volume\nfrom small spikes to massive global demands.",
                "Reduced IT operational overhead\nby automating routine tasks and monitoring.",
                "Enhanced data security and compliance posture\nprotecting your business from risk.",
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
                "Authorized reseller of top hardware brands\nproviding competitive pricing and genuine warranties.",
                "Full lifecycle management, from procurement to disposal\nhandling all aspects of your hardware inventory.",
                "Rapid on-site or remote support\nminimizing employee downtime when issues arise.",
            ],
            technologies: [
                "Virtualization: VMware, Hyper-V\nfor efficient server resource utilization and flexible deployment.",
                "Operating Systems: Windows Server, Linux, macOS\nsupporting a diverse range of business needs.",
                "Endpoint Management: Intune, SCCM\nfor centralized control and security policy enforcement across all devices.",
            ],
            features: [
                "Bulk hardware deployment and setup\nallowing for quick onboarding of new employees or offices.",
                "24/7 monitoring and predictive maintenance\nidentifying and fixing issues before they cause failures.",
                "Secure data wiping and hardware disposal\nmeeting environmental and data privacy standards.",
            ],
            benefits: [
                "Reliable, high-performance equipment for all employees\nboosting productivity and efficiency.",
                "Minimized hardware downtime and quick issue resolution\nkeeping your business running smoothly.",
                "Consolidated purchasing and inventory management\nsaving time and reducing procurement complexity.",
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
                "Expertise in modern mesh and SD-WAN technologies\nfor flexible, high-speed, and resilient networks.",
                "Proactive threat detection and vulnerability assessments\nstaying ahead of cyber risks.",
                "Certified Cisco, Juniper, and Fortinet professionals\nensuring expert handling of enterprise-grade equipment.",
            ],
            technologies: [
                "Security: Firewalls (Next-Gen), IDS/IPS, SIEM\nforming a multi-layered defense against cyber attacks.",
                "Networking: Cisco Meraki, Ubiquiti, SD-WAN\nsolutions tailored to your office size and remote needs.",
                "Access Control: Multi-Factor Authentication (MFA), VPNs\nsecuring both on-site and remote user connections.",
            ],
            features: [
                "Guest/employee network segmentation and QoS optimization\ncontrolling access and prioritizing critical traffic.",
                "Managed endpoint detection and response (EDR)\nfor continuous security monitoring of all user devices.",
                "Regular penetration testing and compliance audits\nvalidating your security posture against industry standards.",
            ],
            benefits: [
                "Unbreakable, fast, and secure internal networks\nsupporting all your business communication needs.",
                "Protection against ransomware and cyber attacks\nsafeguarding your company's valuable assets.",
                "Guaranteed uptime for critical business applications\nensuring continuous operation and reliability.",
            ],
        },
    },
];

export const servicesByCategory = Object.values(CATEGORIES).map((c) => ({
    categoryTitle: c,
    services: services.filter((s) => s.category === c),
}));