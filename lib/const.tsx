import { AlertTriangle, Layers } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  challenge: string;
  solution: string;
  results: {
    value: string;
    label: string;
  }[];
  year: string;
  painPoints: string[];
  architectureFeatures: {
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    authorTitle: string;
  };
  featured?: boolean; // Added featured property
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Transport Management & Revenue Collection System",
    slug: "transport-management-system",
    description:
      "A comprehensive digital infrastructure for nationwide transportation management. Processing secure levy collections with real-time vehicle tracking, advanced encryption, and 95% collection efficiency across major cities.",
    longDescription:
      "Transpay is a revolutionary transportation management platform designed to ensure the safe and easy collection of levies using secure, user-friendly systems. The platform serves as a digital backbone for transportation authorities, enabling them to transform traditional, manual processes into a streamlined, transparent, and highly efficient digital ecosystem.\n\nKey features include real-time vehicle location tracking via proprietary Smart Fairflex devices, secure financial transactions with military-grade encryption, and role-specific dashboards that provide complete visibility to all stakeholders. The system has successfully registered over 500,000 vehicles and achieved a 95% collection efficiency rate.",
    image: "/transport-revenue-collection-system.png",
    gallery: [],
    category: "FinTech & Logistics",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Advanced Encryption",
      "Real-time Analytics",
      "IoT Integration",
    ],
    liveUrl: "https://www.transpayedo.com",
    githubUrl: "https://github.com/iscedcs/transpay-edo.git", // Placeholder for now
    challenge:
      "The existing infrastructure was literally buckling under the weight of new user registrations. We weren\\'t just fixing bugs; we were fighting a battle against technical debt that threatened the entire regional expansion strategy.",
    solution:
      "The deployment was a success. We reduced operational costs by 40% through infrastructure optimization and removed the transaction ceiling that was previously capping business growth.",
    results: [
      { value: "95%", label: "COLLECTION EFFICIENCY" },
      { value: "500K+", label: "VEHICLES REGISTERED" },
      { value: "Real-time", label: "VISIBILITY" },
    ],
    year: "2024",
    painPoints: [
      "Revenue leakage: Traditional manual levy collection systems were prone to significant revenue loss and lack of accountability.",
      "Operational opacity: Lack of real-time data on vehicle locations and collector activities made it impossible for authorities to monitor operations effectively.",
      "Security risks: Handling large volumes of cash and sensitive data without robust encryption protocols created vulnerabilities for both collectors and the government.",
    ],
    architectureFeatures: [
      {
        title: "IoT Integration (Smart Fairflex)",
        description:
          "Proprietary hardware integration for real-time vehicle tracking and security.",
      },
      {
        title: "Military-Grade Encryption",
        description:
          "Implementation of advanced encryption protocols to ensure all financial and personal data remains confidential.",
      },
      {
        title: "Real-time Analytics Engine",
        description:
          "A robust data processing layer that transforms raw collection data into actionable insights via stakeholder dashboards.",
      },
    ],
    testimonial: {
      quote:
        "The transition was seamless. We saw immediate improvements in system stability, and for the first time, our tech isn\\'t the bottleneck for our vision.",
      author: "AIRs Chairman",
      authorTitle: "Transpay Anambra",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Ariari E-commerce Platform",
    slug: "ariari-e-commerce",
    description:
      "A vibrant online marketplace connecting buyers and sellers across various categories, offering a seamless shopping experience with secure transactions and diverse product listings.",
    longDescription:
      "Ariari is a dynamic e-commerce platform designed to facilitate easy buying and selling of a wide range of products, from fashion to gadgets and home furnishings. The platform emphasizes user-friendliness, secure payment gateways, and efficient product discovery. It aims to empower local businesses and provide consumers with a diverse selection of goods.",
    image: "/ariari-e-commerce.png", // Placeholder image
    gallery: [],
    category: "E-Commerce",
    tags: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "E-commerce",
      "Marketplace",
    ],
    liveUrl: "https://www.ariariang.com/",
    githubUrl: "https://github.com/iscedcs/ariaria.git", // Placeholder for now
    challenge:
      "To build a scalable and secure e-commerce marketplace that can handle a large volume of transactions and diverse product categories while providing an intuitive user experience.",
    solution:
      "Implemented a robust backend with secure payment integrations and a flexible product catalog system. Developed a responsive frontend with advanced search and filtering capabilities to enhance user experience.",
    results: [
      { value: "Diverse", label: "PRODUCT CATEGORIES" },
      { value: "Secure", label: "TRANSACTIONS" },
      { value: "Intuitive", label: "USER EXPERIENCE" },
    ],
    year: "2023",
    painPoints: [
      "Fragmented local markets with limited online presence for small businesses.",
      "Lack of a centralized, trustworthy platform for online shopping in various categories.",
      "Challenges in ensuring secure and reliable transactions for both buyers and sellers.",
    ],
    architectureFeatures: [
      {
        title: "Scalable Microservices",
        description:
          "Designed with a microservices architecture to support independent scaling of different platform functionalities.",
      },
      {
        title: "Secure Payment Gateway Integration",
        description:
          "Integrated with leading payment processors to ensure secure and seamless transactions.",
      },
      {
        title: "Advanced Product Catalog",
        description:
          "Flexible and extensible catalog system to manage a wide array of product types and attributes.",
      },
    ],
    testimonial: {
      quote:
        "Ariari has transformed how I sell my products online. It's easy to use, and I've seen a significant increase in my customer base.",
      author: "Local Business Owner",
      authorTitle: "Ariari Vendor",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Whiten Lighten Dental Practice Management",
    slug: "whiten-lighten-emr",
    description:
      "A bespoke Electronic Medical Records (EMR) system for a celebrity dental practice, streamlining patient management, appointments, and treatment plans.",
    longDescription:
      "Developed a custom EMR system for Whiten Lighten, a high-profile dental practice. The system digitizes patient records, automates appointment scheduling, and manages treatment plans, enhancing operational efficiency and patient experience. It ensures secure handling of sensitive patient data and provides a seamless workflow for dental professionals.",
    image: "/whiten-lighten-emr.png", // Placeholder image
    gallery: [],
    category: "Healthcare",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "EMR",
      "Healthcare IT",
    ],
    liveUrl: "https://emr.whitenlightentac.com/",
    githubUrl: "https://github.com/whitenlighten/whiten-lighten-frontend", // Placeholder for now
    challenge:
      "To replace a manual, paper-based patient record system with a secure, efficient, and user-friendly digital EMR solution tailored for a high-volume dental practice.",
    solution:
      "Implemented a cloud-based EMR system with robust data encryption, intuitive UI for quick patient data access, and integrated scheduling. This resulted in reduced administrative overhead and improved data accuracy.",
    results: [
      { value: "15+", label: "YEARS EXPERIENCE" },
      { value: "500+", label: "HAPPY PATIENTS" },
      { value: "4.9", label: "RATING" },
    ],
    year: "2025",
    painPoints: [
      "Inefficient paper-based record keeping leading to delays and potential data loss.",
      "Manual appointment scheduling causing booking conflicts and administrative burden.",
      "Lack of centralized patient data for comprehensive treatment planning.",
    ],
    architectureFeatures: [
      {
        title: "Secure Cloud Infrastructure",
        description:
          "Hosted on a secure cloud platform ensuring high availability and data protection compliant with healthcare standards.",
      },
      {
        title: "Intuitive User Interface",
        description:
          "Designed for ease of use by dental professionals, minimizing training time and maximizing adoption.",
      },
      {
        title: "Integrated Scheduling Module",
        description:
          "Automated appointment booking and reminders, reducing no-shows and optimizing clinic flow.",
      },
    ],
    testimonial: {
      quote:
        "Dr. Whiten Lighten transformed my smile completely. The professionalism and attention to detail is unmatched. I feel confident on camera every day!",
      author: "Sarah Johnson",
      authorTitle: "TV Host",
    },
    featured: false,
  },
  {
    id: 4,
    title: "PalmTechnIQ E-Learning Platform",
    slug: "palmtechniq-e-learning",
    description:
      "An interactive e-learning platform offering diverse tech courses, from web development to cybersecurity, with hands-on projects and expert instructors.",
    longDescription:
      "Developed a comprehensive e-learning platform for PalmTechnIQ, providing a wide range of technology courses. The platform features interactive lessons, hands-on projects, and a user-friendly interface to facilitate learning for aspiring tech professionals. It supports various learning paths, from web development to cybersecurity, and is designed to be beginner-friendly.",
    image: "/palmtechniq-e-learning.png", // Placeholder image
    gallery: [],
    category: "Education",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "E-Learning",
      "LMS",
      "Web Development",
    ],
    liveUrl: "https://palmtechniq-v2.vercel.app",
    githubUrl: "https://github.com/Emeka-ignatius/palmtechniq-v2.git", // Placeholder for now
    challenge:
      "To create a robust and engaging online learning environment that can host multiple tech courses and cater to a diverse student base, from beginners to advanced learners.",
    solution:
      "Built a scalable LMS with interactive course modules, progress tracking, and integrated assessment tools. The platform emphasizes hands-on learning and provides a seamless educational experience.",
    results: [
      { value: "50+", label: "LEARNERS" },
      { value: "Expert", label: "INSTRUCTORS" },
      { value: "Cutting-edge", label: "CURRICULUM" },
    ],
    year: "2024",
    painPoints: [
      "Lack of an centralized platform for diverse tech education offerings.",
      "Difficulty in providing interactive and engaging learning experiences online.",
      "Need for a scalable solution to accommodate a growing number of courses and students.",
    ],
    architectureFeatures: [
      {
        title: "Modular Course Structure",
        description:
          "Enables easy creation and management of diverse courses with flexible learning paths.",
      },
      {
        title: "Interactive Learning Modules",
        description:
          "Incorporates quizzes, coding challenges, and multimedia content for engaging education.",
      },
      {
        title: "Scalable Backend",
        description:
          "Designed to support a large number of concurrent users and extensive course content without performance degradation.",
      },
    ],
    testimonial: {
      quote:
        "I would not have gotten ready for a web developer position if I hadn\\'t attended the PalmTechnIQ courses. I strongly recommend you try a course with them.",
      author: "Lekan John",
      authorTitle: "Frontend Developer",
    },
    featured: false,
  },
  {
    id: 5,
    title: "Hygia Pro Services Booking Platform",
    slug: "hygia-pro-services",
    description:
      "A streamlined online booking platform for professional cleaning services, offering seamless scheduling, secure payments, and meticulous service delivery for homes and businesses.",
    longDescription:
      "Hygia Pro Services offers a premium online booking platform for a wide range of professional cleaning services, including residential, commercial, post-construction, and Airbnb cleaning. The platform is designed for ease of use, allowing customers to quickly choose services, select dates and times, and make secure payments. It emphasizes punctuality, eco-friendly products, and highly vetted staff to ensure an exceptional customer experience.",
    image: "/hygia-pro-services.png", // Placeholder image
    gallery: [],
    category: "Service Booking",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "Booking System",
      "Payment Gateway",
      "Service Management",
    ],
    liveUrl: "https://www.hygiaproservices.com/",
    githubUrl: "https://github.com/hygiaproservices/hygiapro-services-ltd", // Placeholder for now
    challenge:
      "To create an efficient and user-friendly online booking system for cleaning services that can manage diverse service offerings, flexible scheduling, and secure payment processing.",
    solution:
      "Developed a robust booking engine with a customizable service catalog, real-time availability management, and integrated Paystack for secure transactions. The platform significantly improved booking efficiency and customer satisfaction.",
    results: [
      { value: "50+", label: "HAPPY CLIENTS" },
      { value: "80%", label: "SATISFACTION RATE" },
      { value: "2+", label: "YEARS EXPERIENCE" },
    ],
    year: "2026",
    painPoints: [
      "Manual booking processes leading to scheduling conflicts and administrative overhead.",
      "Lack of a centralized platform for customers to view services, check availability, and book online.",
      "Challenges in managing payments securely and transparently for various cleaning services.",
    ],
    architectureFeatures: [
      {
        title: "Intuitive Booking Flow",
        description:
          "Designed a simple, four-step booking process for optimal user experience and conversion.",
      },
      {
        title: "Real-time Availability Management",
        description:
          "Ensures accurate scheduling and prevents overbooking by dynamically updating service slot availability.",
      },
      {
        title: "Secure Payment Integration",
        description:
          "Seamless integration with Paystack for secure and transparent online payment processing.",
      },
    ],
    testimonial: {
      quote:
        "Hygia Pro Services has redefined what I expect from a cleaning service. The attention to detail is remarkable—every corner, every surface is treated with care.",
      author: "Adaeze Okonkwo",
      authorTitle: "Homeowner, Lekki",
    },
    featured: false,
  },
  {
    id: 6,
    title: "MiPlus Entertainment E-commerce",
    slug: "miplus-entertainment",
    description:
      "An e-commerce platform specializing in premium home entertainment systems, smart TVs, and audio solutions, offering a curated selection of innovative products.",
    longDescription:
      "MiPlus is an e-commerce platform dedicated to bringing high-quality home entertainment products to customers. It features a wide range of smart TVs, soundbars, home theater systems, and gaming audio solutions. The platform focuses on combining innovation, quality, and style, providing customers with cutting-edge products that enhance their lifestyle and amplify every entertainment moment.",
    image: "/miplus-entertainment.png", // Placeholder image
    gallery: [],
    category: "E-Commerce",
    tags: [
      "Next.js",
      "React",
      "E-commerce",
      "Audio Visual",
      "Home Entertainment",
    ],
    liveUrl: "https://miplus.com.ng/",
    githubUrl: "https://github.com/mi-plus/miplus-product-showcase", // Placeholder for now
    challenge:
      "To create an engaging e-commerce experience for premium home entertainment products, highlighting innovation and quality while ensuring a smooth purchasing process.",
    solution:
      "Developed a visually appealing product showcase with detailed specifications and high-quality imagery. Implemented a straightforward inquiry and purchase flow, emphasizing customer focus and product innovation.",
    results: [
      { value: "Premium", label: "QUALITY PRODUCTS" },
      { value: "Customer", label: "FOCUSED SERVICE" },
      { value: "Cutting-edge", label: "INNOVATION" },
    ],
    year: "2025",
    painPoints: [
      "Limited online presence for high-end home entertainment systems.",
      "Difficulty in conveying product quality and innovation through standard e-commerce templates.",
      "Need for a personalized customer experience for premium product inquiries and purchases.",
    ],
    architectureFeatures: [
      {
        title: "Rich Product Content Management",
        description:
          "System to manage detailed product descriptions, high-resolution images, and multimedia for an immersive shopping experience.",
      },
      {
        title: "Streamlined Inquiry System",
        description:
          "Integrated WhatsApp inquiry and contact forms for personalized customer service and sales.",
      },
      {
        title: "Responsive Design",
        description:
          "Ensures an optimal viewing and shopping experience across all devices, from desktop to mobile.",
      },
    ],
    testimonial: {
      quote:
        "MI+ has transformed my living room into a true entertainment hub. The quality of their products and the seamless experience are unmatched.",
      author: "Happy Customer",
      authorTitle: "Home Entertainment Enthusiast",
    },
    featured: false,
  },
  {
    id: 7,
    title: "Lumina DPM - Digital Parish Manager",
    slug: "lumina-dpm",
    description:
      "The world's first Digital Parish Management platform, transforming how parishes operate with tools for donations, mass intentions, and community engagement.",
    longDescription:
      "Lumina DPM is a revolutionary platform designed to modernize parish operations. It offers a comprehensive suite of tools for parishioners to connect with their church, book mass intentions, make donations, and stay updated. For parishes, it provides robust management features for parishioners, donations, events, and communications, aiming to increase engagement and streamline administrative tasks. The platform also caters to dioceses with enterprise solutions for overseeing multiple parishes and managing resources at a broader level.",
    image: "/lumina-dpm.png", // Placeholder image
    gallery: [],
    category: "SaaS & Community",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Digital Giving",
      "Community Management",
      "SaaS",
    ],
    liveUrl: "https://dpm.luminacorp.org/",
    githubUrl: "#", // Placeholder for now
    challenge:
      "To digitize and streamline the complex administrative and community engagement processes of religious parishes, moving away from outdated manual systems.",
    solution:
      "Developed a comprehensive DPM platform with role-based access for parishioners, parishes, and dioceses, integrating features like online donations, event management, and communication tools. Focused on user-friendliness and security.",
    results: [
      { value: "40%", label: "INCREASE IN GIVING" },
      { value: "15hrs", label: "SAVED WEEKLY" },
      { value: "60%", label: "MORE ENGAGEMENT" },
    ],
    year: "2025",
    painPoints: [
      "Outdated manual systems leading to inefficiencies in parish administration and record-keeping.",
      "Difficulty in engaging parishioners and facilitating digital donations.",
      "Lack of centralized management tools for dioceses overseeing multiple parishes.",
    ],
    architectureFeatures: [
      {
        title: "Modular SaaS Architecture",
        description:
          "Built on a scalable SaaS model to serve individual parishioners, parishes, and entire dioceses with tailored functionalities.",
      },
      {
        title: "Secure Payment & Donation System",
        description:
          "Integrated secure payment gateways for seamless and transparent online donations and financial management.",
      },
      {
        title: "Real-time Communication & Event Management",
        description:
          "Features for instant announcements, event scheduling, and livestreaming to keep the community connected and informed.",
      },
    ],
    testimonial: {
      quote:
        "Lumina has revolutionized how our parish connects with its members and manages its operations. The increase in engagement and donations has been remarkable.",
      author: "Father Michael",
      authorTitle: "Parish Priest",
    },
    featured: false,
  },
  {
    id: 8,
    title: "Scents & Sparkle Atelier",
    slug: "scents-and-sparkle",
    description:
      "A premium handcrafted candle and home fragrance brand focusing on intentional scents and aesthetic appeal, offering a luxurious sensory experience.",
    longDescription:
      "Scents & Sparkle Atelier is an e-commerce platform dedicated to offering exquisite handcrafted candles and home fragrances. The brand emphasizes intentional scent crafting, using unique blends like Sweet Lychee, Fruiti, Love Spell, and Caramel Sundae. The platform provides a visually appealing and immersive shopping experience, highlighting the artisanal quality and luxurious nature of its products. It aims to transform spaces and elevate moods through carefully curated fragrances.",
    image: "/scents-and-sparkle.png", // Placeholder image
    gallery: [],
    category: "E-Commerce & Lifestyle",
    tags: [
      "React",
      "Framer Motion",
      "E-commerce",
      "Branding",
      "Lifestyle",
      "Web Design",
    ],
    liveUrl: "https://scentsandsparkleatelier.vercel.app/",
    githubUrl: "https://github.com/iscedcs/scentsandsparkleatelier", // Placeholder for now
    challenge:
      "To create an online presence that effectively conveys the luxury, artistry, and intentionality behind a handcrafted fragrance brand, providing an immersive user experience.",
    solution:
      "Developed a visually rich e-commerce website with elegant design, high-quality product photography, and engaging descriptions that tell the story of each scent. Implemented smooth animations and transitions to enhance the user's sensory journey.",
    results: [
      { value: "Premium", label: "BRAND POSITIONING" },
      { value: "High", label: "CUSTOMER ENGAGEMENT" },
      { value: "Unique", label: "PRODUCT STORYTELLING" },
    ],
    year: "2025",
    painPoints: [
      "Generic home fragrance options lacking unique identity and intentionality.",
      "Difficulty in translating the sensory experience of fragrances into an online shopping environment.",
      "Need for a strong brand narrative and visual appeal to stand out in a competitive market.",
    ],
    architectureFeatures: [
      {
        title: "Immersive UI/UX Design",
        description:
          "Crafted a visually stunning and intuitive interface that reflects the luxury and artistry of the brand.",
      },
      {
        title: "Dynamic Product Showcase",
        description:
          "Utilized high-resolution imagery and interactive elements to highlight product details and unique scent profiles.",
      },
      {
        title: "Seamless E-commerce Integration",
        description:
          "Implemented a smooth and secure shopping cart and checkout process for a premium purchasing experience.",
      },
    ],
    testimonial: {
      quote:
        "The website perfectly captures the essence of our brand. It's not just a store; it's an experience that truly reflects the quality of our scents.",
      author: "Founder",
      authorTitle: "Scents & Sparkle Atelier",
    },
    featured: false,
  },
  {
    id: 9,
    title: "PennyPlan - Financial Management App",
    slug: "pennyplan",
    description:
      "An effortless expense tracking and budgeting tool designed to help users take control of their finances and achieve financial freedom.",
    longDescription:
      "PennyPlan is a user-friendly financial management application that empowers individuals to effortlessly track expenses, create smart budgets, and achieve their financial goals. It offers powerful features like intelligent budgeting that adapts to spending habits, actionable insights through interactive charts, and goal-driven planning with guided milestones. The platform aims to simplify personal finance, making it accessible and manageable for everyone.",
    image: "/pennyplan.png", // Placeholder image
    gallery: [],
    category: "FinTech",
    tags: ["React", "Server Action", "Financial Tracking", "Budgeting", "PWA"],
    liveUrl: "https://pennyplan.com.ng/",
    githubUrl: "https://github.com/Emeka-ignatius/penny-plan",
    challenge:
      "To develop an intuitive and effective personal finance application that simplifies expense tracking and budgeting, encouraging users to achieve their financial goals.",
    solution:
      "Built a cross-platform application with a clean interface, robust backend for data synchronization, and engaging visualizations of financial trends. Focused on ease of use and providing clear, actionable financial insights.",
    results: [
      { value: "Improved", label: "FINANCIAL HEALTH" },
      { value: "Actionable", label: "SPENDING INSIGHTS" },
      { value: "Goal-Driven", label: "FINANCIAL PLANNING" },
    ],
    year: "2025",
    painPoints: [
      "Difficulty in consistently tracking daily expenses and understanding spending patterns.",
      "Lack of effective budgeting tools that adapt to individual financial habits.",
      "Overwhelming complexity of traditional financial management software.",
    ],
    architectureFeatures: [
      {
        title: "Intuitive Expense Logging",
        description:
          "Streamlined process for logging and categorizing expenses, making financial tracking effortless.",
      },
      {
        title: "Dynamic Budgeting Engine",
        description:
          "Intelligent system that creates and adjusts budgets based on user spending, promoting realistic financial goals.",
      },
      {
        title: "Interactive Financial Visualizations",
        description:
          "Clear and engaging charts and graphs that provide users with actionable insights into their financial health.",
      },
    ],
    testimonial: {
      quote:
        "Penny Plan has transformed how I manage my business finances. The insights it provides are invaluable!",
      author: "Sarah Johnson",
      authorTitle: "Small Business Owner",
    },
    featured: false,
  },
  {
    id: 10,
    title: "Blessing - Visionary Architecture Studio Portfolio",
    slug: "architect-blessing",
    description:
      "An award-winning architecture studio portfolio showcasing sustainable designs and innovative spatial solutions, transforming spaces and creating dreams.",
    longDescription:
      "This portfolio website for Blessing Architecture Studio highlights an award-winning architect specializing in sustainable design and client-centered solutions. The site showcases a range of projects, from floating pavilions to vertical forest residences, emphasizing innovative solutions, a commitment to a sustainable future, and the emotional connection spaces evoke. It serves as a digital representation of the studio's philosophy: where art meets function to create environments that inspire.",
    image: "/architect-blessing.png", // Placeholder image
    gallery: [],
    category: "Portfolio & Design",
    tags: [
      "Next.js",
      "TailwindCSS",
      "Architecture",
      "Sustainable Design",
      "3D Visualization",
      "Portfolio",
    ],
    liveUrl: "https://architect-blessing-website-design-beta.vercel.app/",
    githubUrl: "https://github.com/Emeka-ignatius/architect-website", // Placeholder for now
    challenge:
      "To create a sophisticated and visually compelling online portfolio that effectively communicates the architect's unique design philosophy, innovative projects, and commitment to sustainability.",
    solution:
      "Developed a modern, responsive website with a clean aesthetic, high-quality imagery of projects, and clear articulation of the architect's vision. Incorporated smooth navigation and engaging content to showcase expertise and attract potential clients.",
    results: [
      { value: "6+", label: "YEARS EXPERIENCE" },
      { value: "20+", label: "PROJECTS COMPLETED" },
      { value: "12", label: "DESIGN AWARDS" },
    ],
    year: "2024",
    painPoints: [
      "Difficulty in showcasing complex architectural projects and design philosophies effectively online.",
      "Need for a professional and visually appealing platform to attract high-profile clients.",
      "Challenges in conveying the unique value proposition of sustainable and innovative architectural design.",
    ],
    architectureFeatures: [
      {
        title: "Immersive Project Galleries",
        description:
          "High-resolution image and video galleries to showcase architectural projects in detail, emphasizing design and aesthetics.",
      },
      {
        title: "Clear Design Philosophy Articulation",
        description:
          "Dedicated sections to explain the architect's approach to sustainable design, innovation, and client-centered solutions.",
      },
      {
        title: "Responsive and Elegant UI",
        description:
          "Ensures a premium viewing experience across all devices, reflecting the quality and sophistication of the architectural work.",
      },
    ],
    testimonial: {
      quote:
        "Blessing's designs are not just buildings; they are experiences. This website beautifully captures the essence of their visionary work.",
      author: "Client Testimonial",
      authorTitle: "Real Estate Developer",
    },
    featured: false,
  },
];
