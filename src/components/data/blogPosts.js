const blogPosts = [
  {
    id: 1,
    category: "Tech",
    title: "Cybersecurity in 2025: Protecting Digital Frontiers",
    description:
      "As technology advances, cybersecurity is more critical than ever to protect data, privacy, and digital infrastructure.",
    author: "Benjamin Rivera",
    date: "August 7, 2025",
    readTime: "6 min read",
    image: "./images/cybersecurity.jpg",
  },
  {
    id: 2,
    category: "AI",
    title: "AI-Powered Chatbots: Redefining Customer Experience",
    description:
      "From customer service to personal assistants, AI chatbots are becoming smarter, offering faster and more personalized interactions.",
    author: "Jane Smith",
    date: "August 24, 2025",
    readTime: "6 min read",
    image: "./images/ai-chatbots.jpg",
  },
  {
    id: 3,
    category: "Gadgets",
    title: "Next-Gen Smartwatches: Fitness Meets AI",
    description:
      "Smartwatches now use AI to monitor health metrics, predict workouts, and provide real-time insights into your fitness journey.",
    author: "Alex Johnson",
    date: "August 23, 2025",
    readTime: "4 min read",
    image: "./images/smartwatch-ai.jpg",
  },
  {
    id: 4,
    category: "Tech",
    title: "Foldable Phones: The Future of Mobile Design",
    description:
      "Foldable phones are pushing the limits of mobile hardware, combining portability with larger screen experiences.",
    author: "Maria Lee",
    date: "August 22, 2025",
    readTime: "5 min read",
    image: "./images/foldable-phone.jpg",
  },
  {
    id: 5,
    category: "AI",
    title: "AI in Healthcare: Revolutionizing Diagnosis and Treatment",
    description:
      "Artificial Intelligence is helping doctors detect diseases faster and more accurately, improving patient outcomes worldwide.",
    author: "David Kim",
    date: "August 21, 2025",
    readTime: "7 min read",
    image: "./images/ai-healthcare.jpg",
  },
  {
    id: 6,
    category: "Gadgets",
    title: "Wireless Earbuds: Redefining Audio Experience",
    description:
      "Modern wireless earbuds now come with AI-enhanced sound, noise cancellation, and fitness tracking features.",
    author: "Emma Brown",
    date: "August 20, 2025",
    readTime: "3 min read",
    image: "./images/wireless-earbuds.jpg",
  },
  {
    id: 7,
    category: "Tech",
    title: "Quantum Computing: Unlocking New Possibilities",
    description:
      "Quantum computers are set to solve problems conventional computers can't, from cryptography to drug discovery.",
    author: "Liam Wilson",
    date: "August 19, 2025",
    readTime: "8 min read",
    image: "./images/quantum-computing.jpg",
  },
  {
    id: 8,
    category: "AI",
    title: "Generative AI: Creating Content with Machines",
    description:
      "Generative AI is transforming creativity, from art and music to writing, allowing machines to co-create with humans.",
    author: "Sophia Martinez",
    date: "August 18, 2025",
    readTime: "5 min read",
    image: "./images/generative-ai.jpg",
  },
  {
    id: 9,
    category: "Gadgets",
    title: "Smart Home Devices: Making Life Effortless",
    description:
      "From AI assistants to connected appliances, smart home technology is simplifying daily routines and boosting convenience.",
    author: "Noah Anderson",
    date: "August 17, 2025",
    readTime: "4 min read",
    image: "./images/smart-home.jpg",
  },
  {
    id: 10,
    category: "Tech",
    title: "Electric Vehicles: Driving the Future of Transportation",
    description:
      "Electric vehicles (EVs) are reducing emissions and redefining mobility with smarter batteries and autonomous features.",
    author: "Olivia Thomas",
    date: "August 16, 2025",
    readTime: "6 min read",
    image: "./images/electric-vehicles.jpg",
  },
  {
    id: 11,
    category: "AI",
    title: "AI in Finance: Smarter Investments and Fraud Detection",
    description:
      "Artificial Intelligence is helping banks and investors analyze data faster, manage risk, and detect fraudulent activity.",
    author: "Ethan Clark",
    date: "August 15, 2025",
    readTime: "5 min read",
    image: "./images/ai-finance.jpg",
  },
  {
    id: 12,
    category: "Gadgets",
    title: "AR Glasses: Blending Reality with Digital Worlds",
    description:
      "Augmented Reality glasses are enhancing experiences in gaming, navigation, and professional applications.",
    author: "Ava Lewis",
    date: "August 14, 2025",
    readTime: "4 min read",
    image: "./images/ar-glasses.jpg",
  },
  {
    id: 13,
    category: "Tech",
    title: "Edge Computing: Faster Processing at the Source",
    description:
      "Edge computing brings computation closer to data sources, reducing latency and improving real-time processing.",
    author: "Mason Young",
    date: "August 13, 2025",
    readTime: "6 min read",
    image: "./images/edge-computing.jpg",
  },
  {
    id: 14,
    category: "AI",
    title: "AI Ethics: Balancing Innovation and Responsibility",
    description:
      "As AI becomes more powerful, ethical considerations are essential to ensure fair, transparent, and responsible use.",
    author: "Isabella Hall",
    date: "August 12, 2025",
    readTime: "7 min read",
    image: "./images/ai-ethics.jpg",
  },
  {
    id: 15,
    category: "Gadgets",
    title: "Next-Gen Laptops: Power Meets Portability",
    description:
      "The latest laptops combine high-performance CPUs, AI-powered features, and sleek designs for ultimate productivity.",
    author: "Lucas Scott",
    date: "August 11, 2025",
    readTime: "5 min read",
    image: "./images/nextgen-laptop.webp",
  },
  {
    id: 16,
    category: "Tech",
    title: "Blockchain Beyond Crypto: Revolutionizing Industries",
    description:
      "Blockchain technology is expanding beyond cryptocurrency into supply chain, healthcare, and digital identity verification.",
    author: "Mia Adams",
    date: "August 10, 2025",
    readTime: "6 min read",
    image: "./images/blockchain.jpg",
  },
  {
    id: 17,
    category: "AI",
    title: "Voice Assistants: Smarter Interactions with AI",
    description:
      "Voice assistants powered by AI are evolving to understand context, provide accurate answers, and simplify tasks.",
    author: "James Turner",
    date: "August 9, 2025",
    readTime: "4 min read",
    image: "./images/voice-assistants.jpg",
  },
  {
    id: 18,
    category: "Gadgets",
    title: "Drones in Everyday Life: From Delivery to Photography",
    description:
      "Drones are transforming industries by offering aerial photography, fast delivery, and advanced monitoring solutions.",
    author: "Charlotte Perez",
    date: "August 8, 2025",
    readTime: "5 min read",
    image: "./images/drones.jpg",
  },
];

export default blogPosts;
