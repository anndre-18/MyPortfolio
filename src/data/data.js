// Skills Data
import sherrlynPhoto from '../assets/sherrlyn.jpg';

export const skillsData = {
  uiux: [
    { name: 'Figma', icon: '🎨' },
    { name: 'Wireframing', icon: '📐' },
    { name: 'Prototyping', icon: '🔄' },
    { name: 'UX Research', icon: '🔍' }
  ],
  frontend: [
    { name: 'React', icon: '⚛️' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '💛' }
  ],
  backend: [
    { name: 'Express.js', icon: '🚀' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' }
  ],
  tools: [
    { name: 'Git', icon: '📦' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Figma', icon: '🎨' }
  ]
};

// Case Studies Data
export const caseStudiesData = [
  {
    id: 1,
    title: 'TruckMate – UI Design',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    description: 'A mobile app UI design that connects truck drivers with nearby mechanics for quick roadside assistance. Features an intuitive dashboard with real-time service tracking and easy navigation for a seamless user experience.',
    tools: ['Figma', 'Prototyping', 'UI Design'],
    link: 'https://www.figma.com/proto/gLDwMMNfLlsTg0Kl0TDWYO/TRUCK-MATE---new-ui?node-id=324-298&t=vcKrXOl3dvYGil6S-1',
    prototype: true
  },
  {
    id: 2,
    title: 'Namma Kaapi Kadai – UI Design',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    description: 'A visually engaging coffee shop UI with an authentic South Indian theme. Crafted elegant layouts with smooth transitions and subtle animations, focusing on consistency, usability, and modern UI principles while preserving cultural aesthetics.',
    tools: ['Figma', 'Prototyping', 'UI Design'],
    link: 'https://www.figma.com/proto/Kryn0NFOFOZVbJS3fCgkcp/Namma-Kaapi-Kadai?node-id=0-1&t=2oKbFZ0ctWHP7btj-1',
    prototype: true
  },
  {
    id: 3,
    title: 'plantsD UI',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    description: 'An intuitive and visually appealing UI design for a plant-related application. Features a clean, nature-inspired interface with organic shapes and green color palettes, focusing on user-friendly navigation and engaging visual elements.',
    tools: ['Figma', 'Prototyping', 'UI Design'],
    link: 'https://www.figma.com/proto/kkWbGssx2yOEcwvFEUbmVC/PLANT-D?node-id=0-1&t=zO0xH0w3TqE3WERb-1',
    prototype: true
  },
  {
    id: 4,
    title: 'Slider UI Design',
    thumbnail: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
    description: 'A modern and interactive slider UI design with smooth transitions and engaging animations. Features elegant carousel components with intuitive navigation controls and responsive layouts.',
    tools: ['Figma', 'Prototyping', 'UI Design'],
    link: 'https://www.figma.com/proto/jm4eUDlEGsO4cxImuvU1vn/slider-ui?node-id=0-1&t=wmUPmL8kBxkePvtj-1',
    prototype: true
  }
];

// Developer Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'Food Recipe Blog',
    description: 'A web-based recipe platform where users can browse, search, and filter recipes by cuisine, ingredients, and dietary preferences. Features detailed steps, images, and cooking tips with a clean, user-friendly interface.',
    techStack: ['React JS', 'Express JS', 'MongoDB'],
    github: 'https://github.com/anndre-18/RecipeCommunity',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'ExpenSnap – Expense Receipt Uploader',
    description: 'Developed a full-stack expense receipt management application using Next.js, Express.js, and MongoDB. Implemented JWT authentication, user-specific receipt filtering, and secure RESTful APIs for uploading, retrieving, and deleting receipts with robust backend validation.',
    techStack: ['Next.js (App Router)', 'React.js', 'MongoDB', 'Mongoose', 'CSS Modules'],
    github: 'https://github.com/anndre-18/ExpenseReceiptUploader',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'CraftNest',
    description: 'A full-stack MERN application for artisans to showcase and sell their handmade products. Features include user authentication, product management, shopping cart, and payment integration.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  }
];

// Experience Data
export const experienceData = {
  role: 'Content & Design Lead',
  organization: 'GDG – Google Developers Group',
  period: '2025 - Present',
  responsibilities: [
    'Lead content strategy and design initiatives for developer community events',
    'Create engaging visual content for social media and marketing materials',
    'Design user experiences for community workshops and tech talks',
    'Collaborate with cross-functional teams to deliver high-quality developer resources',
    'Mentor junior designers and content creators in the community'
  ],
  linkedinPost: 'https://www.linkedin.com/posts/gdg-on-campus-sece_gdgoncampus-gdgsece-techcommunity-activity-7390447966354026496-4rIm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWT6rgBgHaH4Z3Ia_TVINyn0xpjUDf5TE8'
};

// Personal Info
export const personalInfo = {
  name: 'Sherrlyn Anndrina J',
  role: 'UI/UX Designer & Full-Stack Developer',
  tagline: 'Designing Intuitive Experiences. Building Scalable Web Apps.',
  email: 'sherrlynanndrina31@gmail.com',
  photo: sherrlynPhoto, 
  resume: 'https://drive.google.com/drive/folders/1ixGUCe1UuOb-NLDUSbCFq5xZMZxDFreg?usp=drive_link',
  social: {
    github: 'https://github.com',
    linkedin: 'http://www.linkedin.com/in/sherrlyn-anndrina-534b25286',
    instagram: 'https://www.instagram.com/anndre.jo',
    behance: 'https://behance.net'
  }
};

