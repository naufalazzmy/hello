/**
 * Projects Data Schema
 *
 * @typedef {Object} ProjectContent
 * @property {'intro'|'heading'|'text'|'callout'|'quote'} type - The type of content block
 * @property {string} value - The main text content
 * @property {string} [label] - Used only for 'callout' type (e.g., '💡 Key Insight')
 * @property {string} [author] - Used only for 'quote' type
 *
 * @typedef {Object} Project
 * @property {number} id - Unique identifier
 * @property {string} slug - URL slug for the project route
 * @property {string} title - Display title
 * @property {'Game Dev'|'AI'|'Web App'} category - Project category
 * @property {string} description - Short description for cards
 * @property {string} coverImage - Path to the cover image
 * @property {string} image - Path to the image sections
 * @property {string[]} tech - Array of technology tags
 * @property {string|null} github - GitHub repository URL
 * @property {string|null} demo - Live demo URL
 * @property {boolean} featured - Whether to highlight the project
 * @property {string} role - User's role in the project
 * @property {string} duration - How long the project took
 * @property {string} year - Year of completion
 * @property {ProjectContent[]} content - Array of content blocks rendered on the project detail page
 */

export const projects = [
  // --- GAME DEV ---
  {
    id: 1,
    slug: "island-generator",
    title: "Island Generator",
    category: "Game Dev",
    description:
      "An algorithmic approach to infinite exploration, leveraging Perlin Noise in Unity to generate endless, naturally varied, pixel-perfect island landscapes.",
    coverImage: "/projects/island-generator/img1.jpg",
    tech: [
      "C#",
      "Unity",
      "Procedural Content Generation",
      "Perlin Noise",
      "Algorithms",
    ],
    github: null,
    demo: "https://naufalazzmy.itch.io/island-generator",
    featured: false,
    role: "Solo Developer & Technical Designer",
    duration: "6 Weeks",
    year: "2019",
    content: [
      {
        type: "intro",
        value:
          "Have you ever wondered how games like Minecraft or Terraria spin up their endless worlds? That exact curiosity drove me to build the Island Generator. This project isn't just an interactive toy; it's a deep dive into the fascinating, complex world of Procedural Content Generation (PCG) and algorithmic design.",
      },
      {
        type: "heading",
        value: "The Challenge: Engineering Natural Chaos",
      },
      {
        type: "text",
        value:
          "The goal was simple but ambitious: write an algorithm capable of building a believable, pixelated island map from scratch, every single time you hit 'generate'. Hand-crafting levels is an art form, but creating the mathematical framework that *creates* the levels is a whole different beast. I needed a system that felt organic, avoiding the repetitive 'blocky' feel that often plagues amateur procedural generation.",
      },
      {
        type: "callout",
        label: "💡 Technical Insight",
        value:
          "To achieve organic shapes, I utilized Perlin Noise. By layering multiple 'octaves' of noise and tweaking parameters like lacunarity and persistence, I could simulate complex geographical features—from shallow coastal waters and sandy shores to dense forests and snow-capped mountain peaks.",
      },
      {
        type: "heading",
        value: "Translating Math into Pixels",
      },
      {
        type: "text",
        value:
          "Built entirely in Unity using C#, the core engine translates invisible mathematical noise maps into vibrant pixel art tiles. Performance was a major consideration; generating thousands of tiles in real-time required optimizing my loops and carefully managing Unity's GameObjects. I also implemented a robust seed system, ensuring that any generated world could be shared via a short code and perfectly recreated by other users.",
      },
      {
        type: "quote",
        author: "Development Ethos",
        value:
          "Great procedural generation doesn't just spew out random noise; it carefully curates mathematical chaos into something that feels meticulously hand-crafted.",
      },
      {
        type: "heading",
        value: "The Outcome & Takeaways",
      },
      {
        type: "text",
        value:
          "Releasing the project on itch.io was a fantastic way to cap off the development cycle. Beyond just building a fun map generator, this project profoundly sharpened my C# skills, taught me how to profile and optimize heavy mathematical operations, and gave me a robust understanding of algorithmic problem-solving—skills that translate directly into scalable, enterprise-level software engineering.",
      },
    ],
  },
  {
    id: 2,
    slug: "ancient-climber",
    title: "Ancient Climber: Hyper-Casual Arcade",
    category: "Game Dev",
    description:
      "A commercially driven hyper-casual arcade game built in Unity. Features finely tuned two-button climbing mechanics, dynamic obstacles, and robust character customization within a nostalgic pixel-art aesthetic.",
    coverImage: "/projects/ancient-climber/cover.jpg",
    tech: ["Unity", "C#", "Google Play API", "Pixel Art", "Particle Systems"],
    github: null,
    demo: "https://naufalazzmy.itch.io/ancient-climber",
    featured: true,
    role: "Co-Developer & Gameplay Engineer",
    duration: "2 Months",
    year: "2020",
    content: [
      {
        type: "intro",
        value:
          "Creating a commercially viable game requires more than just clean code; it demands an obsessive focus on user experience. Enter 'Ancient Climber', a collaborative hyper-casual arcade game designed for the competitive mobile market. Working alongside a fellow developer, we set out to build an experience that captures the nostalgic magic of retro gaming while delivering the tight, addictive gameplay loop that modern mobile players expect.",
      },
      {
        type: "heading",
        value: "Engineering the Perfect Climb",
      },
      {
        type: "text",
        value:
          "The core premise of Ancient Climber is deceptively simple: scale as high as possible while dodging dynamic obstacles using only left and right inputs. From a design standpoint, this 'simple' constraint was our greatest challenge. I spent weeks dialing in the hyper-casual timing, ensuring every lateral jump, dodge, and pixel-perfect movement felt instantly responsive and fair. We paired these mechanics with bespoke Unity particle systems, guaranteeing that every narrow escape and high-score milestone delivered a satisfying burst of visual feedback.",
      },
      {
        type: "callout",
        label: "💡 Engineering Focus",
        value:
          "In the hyper-casual space, player retention is inextricably linked to 'game feel.' Balancing the difficulty curve of randomized obstacles against a restrictive two-button input system was a profound exercise in iterative user testing and behavioral design.",
      },
      {
        type: "heading",
        value: "Driving Retention: Customization & Competition",
      },
      {
        type: "text",
        value:
          "To elevate the project from a prototype to a fully-fledged product, we needed systems that drove long-term engagement. I architected and implemented a robust character customization system, giving players a tangible, in-game economy and reward loop for their continued efforts. Knowing that arcade games thrive on competition, I also integrated the Google Play Services API, seamlessly connecting our local gameplay loop to global high-score leaderboards.",
      },
      {
        type: "quote",
        author: "Development Philosophy",
        value:
          "The true art of game development isn't simply adding more mechanics; it's having the discipline to strip away the unnecessary until the core loop is absolutely flawless.",
      },
      {
        type: "heading",
        value: "Collaboration & Commercial Readiness",
      },
      {
        type: "text",
        value:
          "Built collaboratively in Unity, this project was a testament to the power of shared vision and disciplined development. Sharing the codebase required strict version control practices, agile communication, and a unified approach to problem-solving. From optimizing pixel-art assets for mobile performance to debugging complex edge-cases in player collision, Ancient Climber stands as a comprehensive showcase of taking a product from a raw concept to a polished, market-ready release.",
      },
    ],
  },
  {
    id: 3,
    slug: "dont-panic-game-jam",
    title: "Don't Panic",
    category: "Game Dev",
    description:
      "A frantic, physics-based slingshot arcade game born during a 2-week lockdown Game Jam. Flick the immune system, smash viruses, and chase the high score!",
    coverImage: "/projects/dont-panic/cover.jpg",
    tech: ["Unity 2D", "C#", "Physics Engine", "Aseprite", "Agile/Scrum"],
    demo: "https://naufalazzmy.itch.io/dont-panic",
    featured: false,
    role: "Lead Developer & Generalist",
    duration: "2 Weeks",
    year: "2021",
    content: [
      {
        type: "intro",
        value:
          "Picture this: It's 2021, the world is locked down, and the best way to fight off pandemic anxiety from your desk is... well, by making a video game about literally flicking viruses away.",
      },
      {
        type: "text",
        value:
          "Created during a caffeine-fueled 14-day Game Jam, *Don't Panic* is a lighthearted take on a heavy era. Working alongside a tiny, scrappy team, we conceptualized, built, and shipped a physics-based arcade game where players take control of the ultimate defense mechanism: an aggressively bouncy immune system.",
      },
      {
        type: "heading",
        value: "The Anatomy of a Perfect Flick",
      },
      {
        type: "text",
        value:
          "The core gameplay loop sounds simple on paper, but engineering the physics behind the slingshot mechanic was an absolute beast. I had to calculate the exact casting anchor, trajectory logic, and release tension to ensure every flick felt weighty and deeply satisfying. To spice things up and raise the skill ceiling, I implemented a dynamic score multiplier that rewards risky trick shots and aggressive plays.",
      },
      {
        type: "callout",
        value:
          "Operating in a micro-team meant wearing every hat imaginable. From writing the core C# physics controllers to producing the quirky art assets and bopping soundtrack, it was a masterclass in rapid prototyping and aggressive prioritization.",
        label: "💡 The Ultimate Solo-Team Pivot",
      },
      {
        type: "quote",
        value:
          "Who knew that fine-tuning the exact bounciness and terminal velocity of a cartoon white blood cell would be the most stressful yet rewarding 48 hours of my year?",
        author: "Me, debugging physics at 3 AM",
      },
      {
        type: "heading",
        value: "From Zero to Shipped in 14 Days",
      },
      {
        type: "text",
        value:
          "Shipping a fully playable game in two weeks requires ruthless scoping. We had to cut the fluff, focus entirely on the 'juice' (game feel), and deliver a polished experience before the clock ran out. It wasn’t just a fun weekend distraction; it was a high-pressure crash course in end-to-end product lifecycles, proving that sometimes the best way to learn is to throw yourself into the deep end and start coding.",
      },
    ],
  },
  {
    id: 4,
    slug: "bilblok",
    title: "Bilblok: The Adaptive Math Adventure",
    category: "Game Dev",
    description:
      "An adaptive math puzzle game that dynamically scales difficulty, turning 5th and 6th-grade arithmetic into an addictive block-combining frenzy. Developed as the core technical artifact for my Master's research.",
    coverImage: "/projects/bilblok/cover.jpg",
    tech: [
      "Unity",
      "C#",
      "Dynamic Difficulty Adjustment (DDA)",
      "Procedural Generation",
      "Educational UX",
    ],
    demo: "https://naufalazzmy.itch.io/bilblok",
    featured: false,
    role: "Lead Developer & Researcher",
    duration: "6 Months",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "Math homework. Usually met with groans, right? Enter Bilblok, an adaptive math puzzle game born out of my Master's research that proves educational games don't have to be boring. Over a rapid 6-month cycle from prototype to shipping, I built a game where 5th and 6th graders combine blocks using addition, subtraction, multiplication, and division to solve puzzles.",
      },
      {
        type: "heading",
        value: "Hitting the Books (and the Teachers' Lounge)",
      },
      {
        type: "text",
        value:
          "Before writing a single line of code, I had to understand the actual battlefield: the classroom. I collaborated directly with teachers, diving deep into their curriculums to pinpoint exactly where students were hitting a wall. The mission was to extract those specific pain points and translate them into a core gameplay loop that relied on fun factors rather than rote memorization.",
      },
      {
        type: "quote",
        value:
          "If we can engineer the game loop so they completely forget they are doing complex arithmetic, we've won.",
        author: "My guiding philosophy during development",
      },
      {
        type: "heading",
        value: "The Secret Sauce: Dynamic Difficulty Adjustment",
      },
      {
        type: "text",
        value:
          "Here is where things got incredibly spicy. The hardest part wasn't the graphics or the UI—it was the brains behind the game. I needed the difficulty to adapt to the player in real-time. I spent weeks isolating the exact algebraic variables that dictate 'difficulty' in a math problem and translated those into machine-readable parameters.",
      },
      {
        type: "callout",
        label: "💡 Engineering Insight",
        value:
          "I designed a custom procedural level generator that reads the player's performance metrics on the fly. If a student is breezing through, the algorithm smoothly ramps up the complexity. If they stumble, it scales back to keep them in the perfect 'flow state'—preventing both boredom and frustration.",
      },
      {
        type: "heading",
        value: "From Prototype to Shipped Product",
      },
      {
        type: "text",
        value:
          "Shipping Bilblok was the ultimate test of balancing rigorous academic research with good old-fashioned game design. Delivering a polished, bug-free, and highly functional educational tool in just six months required ruthless prioritization and agile iterations. Seeing the kids genuinely enjoy the 'grind' of math made every late-night coding session completely worth it.",
      },
    ],
  },
  {
    id: 5,
    slug: "racing-sim-prototype",
    title: "Racing Sim Prototype",
    category: "Game Dev",
    description:
      "A physics-based racing simulation prototype with realistic car handling, drift mechanics, and procedural track generation.",
    coverImage: "/projects/racing-sim/cover.png",
    tech: ["Unity", "C#", "PhysX"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "Solo Developer",
    duration: "2 months",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "A pure passion project — I wanted to understand how racing games implement realistic car physics. Spoiler: it's incredibly complicated and I now have a deep respect for studios like Polyphony Digital.",
      },
      { type: "heading", value: "Wheel Physics" },
      {
        type: "text",
        value:
          "Real-world tire friction isn't linear — it follows the Pacejka Magic Formula. I implemented a simplified version that captures the key behavior: traction drops sharply past the grip limit, giving that satisfying on-the-edge feel.",
      },
    ],
  },

  // --- AI PROJECTS ---
  {
    id: 6,
    slug: "sketchmind",
    title: "SketchMind",
    category: "AI",
    description:
      "A real-time sketch recognition system using CNNs trained on the Quick Draw dataset. Identifies drawings with 94% accuracy.",
    coverImage: "/projects/sketchmind/cover.png",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: true,
    role: "ML Engineer",
    duration: "3 months",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "SketchMind grew out of a simple question: can a computer recognize what I'm drawing *while* I'm drawing it? Not after I'm done — in real-time, stroke by stroke. Turns out, yes. With the right architecture.",
      },
      { type: "heading", value: "Dataset & Training" },
      {
        type: "text",
        value:
          "Google's Quick Draw dataset has 50 million drawings across 345 categories. I sampled 1,000 drawings per category for training. The trick was augmentation — rotations, scale jitter, stroke order shuffling — to make the model robust to how differently people draw the same thing.",
      },
      {
        type: "callout",
        label: "📊 Results",
        value:
          "94.2% top-1 accuracy on the test set. Real-time inference at ~40ms per frame on CPU — fast enough to feel instant.",
      },
      { type: "heading", value: "The Real-Time Pipeline" },
      {
        type: "text",
        value:
          "OpenCV captures the canvas state every 200ms. The stroke data is rasterized into a 28×28 grayscale image (same format as training data) and passed through the CNN. Flask serves the predictions via WebSocket to keep latency low.",
      },
      { type: "heading", value: "What I'd Do Differently" },
      {
        type: "text",
        value:
          "The model struggles with partial drawings — it needs a certain amount of strokes before it's confident. A transformer-based approach operating on raw stroke sequences (like Google's SketchRNN) would handle this much better. That's the v2 I haven't built yet.",
      },
      {
        type: "quote",
        value:
          "Training a model is easy. Making it useful in the real world is the actual challenge.",
        author: "Every ML engineer, eventually",
      },
    ],
  },
  {
    id: 7,
    slug: "sentimentscope",
    title: "SentimentScope",
    category: "AI",
    description:
      "NLP pipeline for multi-class sentiment analysis on social media data. Fine-tuned BERT model with custom Indonesian language support.",
    coverImage: "/projects/sentimentscope/cover.png",
    tech: ["Python", "HuggingFace", "Transformers", "FastAPI"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "ML Engineer",
    duration: "2 months",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "Indonesian-language NLP is an underserved area. Most sentiment tools are English-first and perform poorly on Indonesian social media text — which is heavy with slang, abbreviations, and Javanese loanwords. SentimentScope was my attempt to fix that.",
      },
      { type: "heading", value: "Fine-tuning IndoBERT" },
      {
        type: "text",
        value:
          "I started with IndoBERT — a BERT model pre-trained on Indonesian text — and fine-tuned it on a custom dataset of 15,000 labeled tweets. The labeling process itself was the hardest part: Indonesian internet slang is fast-moving and highly contextual.",
      },
    ],
  },
  {
    id: 8,
    slug: "visionsort",
    title: "VisionSort",
    category: "AI",
    description:
      "Automated image classification and tagging system for organizing personal photo libraries using transfer learning.",
    coverImage: "/projects/visionsort/cover.png",
    tech: ["Python", "PyTorch", "ResNet", "SQLite"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "ML Engineer",
    duration: "6 weeks",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "I had 40,000 photos sitting in a folder called 'Misc'. VisionSort was born out of that personal frustration — a tool that automatically organizes your photos by what's in them.",
      },
      { type: "heading", value: "Transfer Learning Approach" },
      {
        type: "text",
        value:
          "ResNet-50 pre-trained on ImageNet gives you a powerful feature extractor out of the box. I replaced the classification head with a multi-label classifier and fine-tuned it on a curated set of personal photo categories: landscape, portrait, food, architecture, travel.",
      },
    ],
  },
  {
    id: 9,
    slug: "chatdoc",
    title: "ChatDoc",
    category: "AI",
    description:
      "RAG-based chatbot that allows users to have conversations with their PDF documents. Built with LangChain and local LLMs.",
    coverImage: "/projects/chatdoc/cover.png",
    tech: ["Python", "LangChain", "Ollama", "ChromaDB"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "AI Engineer",
    duration: "5 weeks",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "ChatDoc is what happens when you're tired of Ctrl+F. Upload any PDF — research paper, contract, textbook — and ask it questions in plain language. The answers cite the exact page.",
      },
      { type: "heading", value: "The RAG Architecture" },
      {
        type: "text",
        value:
          "Retrieval-Augmented Generation: the document is chunked and embedded into a vector database (ChromaDB). When you ask a question, the most relevant chunks are retrieved and injected into the LLM's context. Ollama runs everything locally — no API keys, no data leaving your machine.",
      },
      {
        type: "callout",
        label: "🔒 Privacy First",
        value:
          "All processing is local. Your documents never touch an external server.",
      },
    ],
  },
  {
    id: 10,
    slug: "posecoach",
    title: "PoseCoach",
    category: "AI",
    description:
      "Real-time workout posture analysis using MediaPipe and custom angle detection algorithms. Gives live feedback on exercise form.",
    coverImage: "/projects/posecoach/cover.png",
    tech: ["Python", "MediaPipe", "OpenCV", "Streamlit"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "ML Engineer",
    duration: "4 weeks",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "Bad gym form leads to injuries. Good gym form is hard to self-monitor. PoseCoach uses your webcam to watch your posture and tell you in real-time if your squat depth is off or your back is rounding.",
      },
      { type: "heading", value: "Pose Estimation & Angle Math" },
      {
        type: "text",
        value:
          "MediaPipe gives you 33 body landmarks per frame. The real work is defining 'correct form' as a set of joint angle constraints — e.g., for a squat, knee angle should be ≤ 90° at depth, and spine angle should stay within 30° of vertical.",
      },
    ],
  },

  // --- WEB APPS ---
  {
    id: 11,
    slug: "devboard",
    title: "DevBoard",
    category: "Web App",
    description:
      "A personal productivity dashboard for developers — integrates GitHub activity, task management, and Pomodoro timer in one view.",
    coverImage: "/projects/devboard/cover.png",
    tech: ["Vue", "Node.js", "PostgreSQL", "GitHub API"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: true,
    role: "Full Stack Developer",
    duration: "2 months",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "I had 5 different tabs open at all times — GitHub, a todo app, a Pomodoro timer, my calendar, and Slack. DevBoard was my attempt to collapse all of that into one focused view designed specifically for how I work.",
      },
      { type: "heading", value: "The Design Philosophy" },
      {
        type: "text",
        value:
          "Productivity tools fail when they become productivity burdens. DevBoard's UI is built around a single principle: show only what you need right now. Everything else is one click away, not front-and-center.",
      },
      {
        type: "callout",
        label: "⚡ Key Feature",
        value:
          "The GitHub activity heatmap pulls your real contribution data and overlays it with your focus session history — so you can see the correlation between deep work time and output.",
      },
      { type: "heading", value: "Technical Architecture" },
      {
        type: "text",
        value:
          "Vue 3 frontend with a lightweight Node.js/Express backend for OAuth and caching GitHub API responses (rate limits are brutal). PostgreSQL stores tasks, Pomodoro history, and user preferences. The whole thing runs in Docker.",
      },
      { type: "heading", value: "Lessons Learned" },
      {
        type: "text",
        value:
          "I built DevBoard for myself, which meant I was both developer and primary user. This was a double-edged sword — I iterated fast because I felt every rough edge immediately, but I also fell into the trap of building features I personally wanted rather than ones that made the core experience better.",
      },
      {
        type: "quote",
        value:
          "The hardest product decision is not what to build — it's what to cut.",
        author: "Every product manager ever",
      },
    ],
  },
  {
    id: 12,
    slug: "linkbase",
    title: "Linkbase",
    category: "Web App",
    description:
      "A self-hosted bookmark manager with tagging, full-text search, and browser extension. Think Pocket, but yours.",
    coverImage: "/projects/linkbase/cover.png",
    tech: ["React", "Express", "PostgreSQL", "Docker"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "Full Stack Developer",
    duration: "6 weeks",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "Pocket killed its free tier. Raindrop is great but subscription-based. I wanted a bookmark manager that I owned completely — data, hosting, the whole stack. So I built one.",
      },
      { type: "heading", value: "Full-Text Search" },
      {
        type: "text",
        value:
          "PostgreSQL's built-in tsvector/tsquery full-text search is surprisingly powerful. Linkbase indexes the title, description, tags, and even the scraped page content — so you can search for what was on the page, not just what you named the bookmark.",
      },
    ],
  },
  {
    id: 13,
    slug: "eventflow",
    title: "EventFlow",
    category: "Web App",
    description:
      "Event management platform with ticket generation, attendee check-in QR codes, and real-time analytics dashboard.",
    coverImage: "/projects/eventflow/cover.png",
    tech: ["Vue", "Laravel", "MySQL", "Chart.js"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "Full Stack Developer",
    duration: "3 months",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "A friend ran campus events and was managing attendees in a Google Sheet. EventFlow replaced that — digital tickets, QR check-ins, live attendance tracking, and a post-event analytics report.",
      },
      { type: "heading", value: "QR Check-in System" },
      {
        type: "text",
        value:
          "Each ticket gets a cryptographically signed QR code. The check-in app (a PWA) scans it, validates the signature, and marks attendance — all offline-capable. When connectivity resumes, it syncs. This was critical for venues with spotty WiFi.",
      },
    ],
  },
  {
    id: 14,
    slug: "openmenu",
    title: "OpenMenu",
    category: "Web App",
    description:
      "A restaurant digital menu platform with QR code generation, order management, and a no-code menu builder for owners.",
    coverImage: "/projects/openmenu/cover.png",
    tech: ["Next.js", "Supabase", "Tailwind", "Stripe"],
    github: "https://github.com/naufalazzmy",
    demo: null,
    featured: false,
    role: "Full Stack Developer",
    duration: "2 months",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "Post-pandemic, every restaurant had a QR code menu — but most were just PDFs. OpenMenu is an actual platform: a no-code builder for restaurant owners, a customer-facing menu with real-time availability, and an order management dashboard.",
      },
      { type: "heading", value: "No-Code Builder" },
      {
        type: "text",
        value:
          "The hardest UI problem was making the menu builder genuinely usable by non-technical restaurant owners. Drag-and-drop category ordering, image upload with auto-resize, and live preview — all built in Next.js with careful attention to mobile usability.",
      },
    ],
  },
];

export const categories = ["All", "Game Dev", "AI", "Web App"];
