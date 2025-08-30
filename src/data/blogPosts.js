const blogPosts = [
  {
    id: 1,
    category: "Tech",
    title: "Cybersecurity in 2025: Protecting Digital Frontiers",
    description:
      "As technology continues to evolve rapidly in 2025, cybersecurity has become a fundamental pillar of digital safety. From AI-driven attacks to sophisticated phishing schemes, threats are growing in scale and complexity. Organizations and individuals alike must adopt proactive security measures to safeguard sensitive data, maintain privacy, and ensure the resilience of critical digital infrastructure in an increasingly connected world.",
    author: "Benjamin Rivera",
    date: "August 7, 2025",
    readTime: "6 min read",
    image: `${process.env.PUBLIC_URL}/images/cybersecurity.jpg`,
  },
  {
    id: 2,
    category: "AI",
    title: "AI-Powered Chatbots: Redefining Customer Experience",
    description:
      "AI-powered chatbots are revolutionizing the way businesses interact with customers, delivering instant, personalized support around the clock. Leveraging advancements in natural language processing and machine learning, these chatbots can handle complex queries, understand context, and learn from each interaction. From streamlining customer service operations to enhancing user satisfaction, AI chatbots are setting a new standard for digital engagement across industries.",
    author: "Jane Smith",
    date: "August 24, 2025",
    readTime: "6 min read",
    image: `${process.env.PUBLIC_URL}/images/ai-chatbots.jpg`,
  },
  {
    id: 3,
    category: "Gadgets",
    title: "Next-Gen Smartwatches: Fitness Meets AI",
    description:
      "The latest generation of smartwatches is transforming personal health and fitness by integrating powerful AI capabilities. These devices can now track a wide range of health metrics—like heart rate variability, sleep patterns, and blood oxygen levels—while using machine learning to analyze trends and predict optimal workout routines. By delivering personalized, real-time insights, smartwatches are evolving from simple trackers into intelligent fitness companions that adapt to your lifestyle and goals.",
    author: "Alex Johnson",
    date: "August 23, 2025",
    readTime: "4 min read",
    image: `${process.env.PUBLIC_URL}/images/smartwatch-ai.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/foldable-phone.jpg`,
  },
  {
    id: 5,
    category: "AI",
    title: "AI in Healthcare: Revolutionizing Diagnosis and Treatment",
    description:
      "Artificial Intelligence is transforming the healthcare landscape by enabling faster, more accurate diagnoses and personalized treatment plans. From analyzing medical imaging and patient records to predicting disease progression and streamlining administrative workflows, AI tools are enhancing the efficiency and effectiveness of medical care. As these technologies continue to evolve, they are playing a critical role in improving patient outcomes, reducing costs, and expanding access to quality healthcare worldwide.",
    author: "David Kim",
    date: "August 21, 2025",
    readTime: "7 min read",
    image: `${process.env.PUBLIC_URL}/images/ai-healthcare.jpg`,
  },
  {
    id: 6,
    category: "Gadgets",
    title: "Wireless Earbuds: Redefining Audio Experience",
    description:
      "Today’s wireless earbuds go far beyond just playing music—they deliver an immersive audio experience powered by AI. With features like adaptive noise cancellation, spatial audio, voice command integration, and even biometric sensors for fitness tracking, these compact devices are redefining how users engage with sound on the go. Whether you're working out, taking calls, or enjoying music, wireless earbuds now offer intelligent, personalized performance tailored to your environment and needs.",
    author: "Emma Brown",
    date: "August 20, 2025",
    readTime: "3 min read",
    image: `${process.env.PUBLIC_URL}/images/wireless-earbuds.jpg`,
  },
  {
    id: 7,
    category: "Tech",
    title: "Quantum Computing: Unlocking New Possibilities",
    description:
      "Quantum computing is poised to revolutionize technology by tackling problems that are beyond the reach of classical computers. Leveraging the principles of quantum mechanics—such as superposition and entanglement—quantum computers can process vast amounts of data at unprecedented speeds. This breakthrough holds transformative potential for fields like cryptography, complex simulations, optimization, and drug discovery. As researchers make rapid advancements, quantum computing is moving from theory to real-world impact, reshaping the future of innovation.",
    author: "Liam Wilson",
    date: "August 19, 2025",
    readTime: "8 min read",
    image: `${process.env.PUBLIC_URL}/images/quantum-computing.jpg`,
  },
  {
    id: 8,
    category: "AI",
    title: "Generative AI: Creating Content with Machines",
    description:
      "Generative AI is revolutionizing creative industries by enabling machines to produce original content in art, music, writing, and more. By learning from vast datasets, these AI models can co-create alongside humans, offering new possibilities for collaboration, innovation, and expression. From generating realistic images and composing music to drafting articles and scripts, generative AI is reshaping the boundaries of creativity and transforming how content is developed and consumed.",
    author: "Sophia Martinez",
    date: "August 18, 2025",
    readTime: "5 min read",
    image: `${process.env.PUBLIC_URL}/images/generative-ai.jpg`,
  },
  {
    id: 9,
    category: "Gadgets",
    title: "Smart Home Devices: Making Life Effortless",
    description:
      "Smart home technology is transforming everyday living by integrating AI assistants, connected appliances, and automated systems that work seamlessly together. From voice-controlled lighting and climate management to security cameras and smart refrigerators, these devices simplify daily routines, enhance comfort, and increase energy efficiency. As these innovations evolve, they offer homeowners greater control, convenience, and peace of mind, making modern living smarter and more effortless than ever before.",
    author: "Noah Anderson",
    date: "August 17, 2025",
    readTime: "4 min read",
    image: `${process.env.PUBLIC_URL}/images/smart-home.jpg`,
  },
  {
    id: 10,
    category: "Tech",
    title: "Electric Vehicles: Driving the Future of Transportation",
    description:
      "Electric vehicles (EVs) are at the forefront of transforming transportation by significantly reducing carbon emissions and dependence on fossil fuels. Advances in battery technology are enabling longer ranges and faster charging times, while autonomous driving features are enhancing safety and convenience. As EV infrastructure expands globally, these vehicles are not only redefining mobility but also shaping a more sustainable and connected future for urban and rural transport alike.",
    author: "Olivia Thomas",
    date: "August 16, 2025",
    readTime: "6 min read",
    image: `${process.env.PUBLIC_URL}/images/electric-vehicles.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/ai-finance.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/ar-glasses.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/edge-computing.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/ai-ethics.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/nextgen-laptop.webp`,
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
    image: `${process.env.PUBLIC_URL}/images/blockchain.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/voice-assistants.jpg`,
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
    image: `${process.env.PUBLIC_URL}/images/drones.jpg`,
  },
  {
    id: 19,
    category: "Technology / Neuralink",
    title: "Elon Musk first brain-chip",
    description:
      "In 2024, Noland Arbaugh, a 31-year-old man paralyzed below the shoulders after a diving accident, became the first person to receive Elon Musk’s Neuralink brain implant. Eighteen months after the operation, Arbaugh describes his life as having been transformed: he can now control a computer cursor, browse the internet, play chess, and even enjoy Mario Kart using only his thoughts. Before Neuralink, Arbaugh was often dependent on caregivers and stuck waiting in hospital rooms; today he is pursuing online classes, reconnecting socially, and even considering launching his own business. Neuralink engineers revealed that while the implant initially lost up to 85% of its connections, software fixes restored functionality, making the device increasingly reliable. The company is now preparing broader clinical trials in the UK to help other patients with severe spinal injuries and ALS. For Arbaugh, the chip has given him back independence, purpose, and optimism for the future.",
    author: "Economic Times Tech Desk",
    date: "24 August 2025",
    readTime: "6 min",
    image: `${process.env.PUBLIC_URL}/images/neuralink-arbaugh-mario-kart.avif`,
  },
];

export default blogPosts;
