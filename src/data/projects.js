/**
 * Projects Data Schema
 *
 * @typedef {Object} ProjectContent
 * @property {'intro'|'heading'|'text'|'callout'|'quote'|'image'|'images'} type - The type of content block
 * @property {string} [value] - The main text content
 * @property {string} [label] - Used only for 'callout' type (e.g., '💡 Key Insight')
 * @property {string} [author] - Used only for 'quote' type
 * @property {string} [src] - Used only for 'image' type
 * @property {Array<{src: string, caption?: string}>} [items] - Used only for 'images' type
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
    featured: false,
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
  //web project
  {
    id: 5,
    slug: "hospital-appointment-scheduler",
    title: "Appointment & Service Scheduler",
    category: "Web App",
    description:
      "A streamlined, end-to-end scheduling platform that cures the headache of booking hospital services, managing appointments, and handling payments.",
    coverImage: "/projects/appointment/cover.jpg",
    image: "/projects/appointment/snap0.jpg",
    tech: ["PHP", "Vue.js", "MySQL", "Telegram Web API", "NGINX"],
    github: null,
    demo: "https://corner-rsud.ntbprov.go.id/",
    featured: false,
    role: "Full-Stack Developer",
    duration: "4 Weeks",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "Let’s face it: hospital visits are stressful enough without wrestling with a clunky, outdated booking system. The goal here was to completely cure the administrative headache for both patients and medical staff.",
      },
      {
        type: "heading",
        value: "The Diagnosis: Untangling the Booking Chaos",
      },
      {
        type: "text",
        value:
          "Patients needed a frictionless, intuitive way to schedule a variety of services—from routine doctor consultations and vaccinations to specialized lab examinations. On the flip side, hospital administrators required a powerful, no-nonsense dashboard to manage this constant influx of appointments and track payments without dropping the ball. The core challenge was translating a complex operational pipeline into a beautifully simple UI/UX.",
      },
      {
        type: "heading",
        value: "The Treatment: Vue, PHP, and a Dash of Telegram",
      },
      {
        type: "text",
        value:
          "I architected an end-to-end web application designed from the ground up for simplicity. I built a snappy, reactive frontend using Vue.js to guide users effortlessly from service selection to final payment. Under the hood, I engineered a robust PHP and MySQL backend to handle the heavy lifting of schedule conflicts and data management. To keep everyone instantly in the loop, I integrated the Telegram Web API, serving up real-time notifications right to the users' pockets.",
      },
      {
        type: "images",
        items: [
          { src: "/projects/appointment/snap0.jpg" },
          { src: "/projects/appointment/snap1.jpg" },
        ],
      },
      {
        type: "callout",
        label: "💡 Key Insight",
        value:
          "Leveraging the Telegram Web API cleverly bypassed the friction of traditional SMS or forcing users to download yet another standalone app, delivering instant updates through a platform they already use and trust.",
      },
      {
        type: "heading",
        value: "The Prognosis: A Healthy, Automated Ecosystem",
      },
      {
        type: "text",
        value:
          "The result is a buttery-smooth scheduling engine that successfully bridges the gap between patient needs and hospital operations. By automating the booking and payment pipelines, the platform gives patients their time (and sanity) back, while empowering administrators to ditch the spreadsheets and focus on delivering excellent healthcare services.",
      },
      {
        type: "quote",
        author: "Project Retrospective",
        value:
          "Good design is good healthcare. When you make the administrative side invisible, you let the medical side shine.",
      },
    ],
  },
  {
    id: 6,
    slug: "internal-it-ticketing-system",
    title: "Automated IT Support & Ticketing Command Center",
    category: "Web App",
    description:
      "A centralized, real-time ticketing platform designed to eradicate administrative chaos. Features include multi-channel bot notifications and live chat consultation to supercharge internal team productivity.",
    coverImage: "/projects/laporsimrs/cover0.jpg",
    image: "/projects/ticketing-system-details.jpg",
    tech: [
      "Laravel",
      "Tailwind CSS",
      "WhatsApp API",
      "Telegram API",
      "WebSockets",
    ],
    github: null,
    demo: "https://laporsimrs.rsudntb.id/",
    featured: false,
    role: "Full-Stack Developer",
    duration: "3 Months",
    year: "2022",
    content: [
      {
        type: "intro",
        value:
          "Let’s face it: trying to manage IT requests through hallway shoulder-taps and scattered messages is a recipe for administrative disaster. Our internal department was hitting a wall with technician reporting and support logistics. The solution? Scrapping the manual chaos and engineering a centralized, real-time ticketing powerhouse.",
      },
      {
        type: "heading",
        value: "The Catalyst: Taming the Reporting Wild West",
      },
      {
        type: "text",
        value:
          "The core problem was visibility and workflow friction. Users needed a frictionless way to signal for help, and our IT squad needed a structured pipeline to triage and resolve those issues instantly. I designed this system to bridge that gap. Now, when a user hits a roadblock, they simply log a ticket, and our team is mobilized in seconds.",
      },
      {
        type: "callout",
        label: "💡 Strategic Impact",
        value:
          "By transitioning from reactive scrambling to proactive tracking, we drastically reduced response times and eliminated the 'lost ticket' syndrome.",
      },
      {
        type: "heading",
        value: "Under the Hood: Building the Ultimate Workflow",
      },
      {
        type: "text",
        value:
          "A ticketing system is only as good as its communication loop. Beyond building an intuitive admin dashboard with deep reporting analytics, I wired up real-time progress tracking. To ensure nothing slipped through the cracks, I integrated multi-channel notifications directly into WhatsApp and Telegram. If a user needs immediate hand-holding, they can bypass the queue entirely and use the built-in real-time chat consultation feature.",
      },
      {
        type: "images",
        items: [
          { src: "/projects/laporsimrs/cover.jpg" },
          { src: "/projects/laporsimrs/img0.jpg" },
          { src: "/projects/laporsimrs/img1.jpg" },
          { src: "/projects/laporsimrs/img2.jpg" },
        ],
      },
      {
        type: "heading",
        value: "The Result: Productivity on Autopilot",
      },
      {
        type: "text",
        value:
          "Deploying this platform was a massive quality-of-life upgrade for the entire company. By streamlining the request lifecycle and automating the communication busywork, we fundamentally leveled up the department's productivity and gave the IT team their sanity back.",
      },
      {
        type: "quote",
        value:
          "Turning a logistical bottleneck into a slick, automated workflow is exactly why I build software. Good code doesn't just process data; it gives people their time back.",
        author: "M Naufal Azzmi H.",
      },
    ],
  },
  {
    id: 7,
    slug: "muturs",
    title: "MUTURS - Hospital Quality Management Portal",
    category: "Web App",
    description:
      "A lightning-fast, centralized internal platform engineered to elevate hospital service quality and streamline oversight across all administrative tiers.",
    coverImage: "/projects/muturs/cover.jpg",
    image: "/projects/muturs/img1.jpg",
    tech: ["Filament", "Laravel", "PHP", "Tailwind CSS", "Livewire"],
    github: null,
    demo: "https://muturs.rsudntb.id/",
    featured: false,
    role: "Lead Full-Stack Developer",
    duration: "1 Week",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "Healthcare operations move at breakneck speed, and their software needs to keep pace. This project was a high-octane, one-week mission to bring absolute clarity and control to the complex world of hospital administration.",
      },
      {
        type: "heading",
        value: "The Diagnosis: Fragmented Operations",
      },
      {
        type: "text",
        value:
          "When it comes to patient care, operational friction isn't just annoying; it's a liability. The hospital's executive team required a centralized 'nervous system' to enforce service standards, monitor performance metrics, and unify communication across various management levels. The catch? They needed a production-ready solution immediately to address pressing quality assurance gaps.",
      },
      {
        type: "heading",
        value: "The Treatment: Rapid Architecture with Filament",
      },
      {
        type: "text",
        value:
          "Challenge accepted. Operating under a strict seven-day deadline, I spearheaded the end-to-end development of a secure internal web application. Knowing that speed could not compromise reliability, I strategically elected to build the platform using Filament. This allowed me to rapidly scaffold a robust, highly intuitive administrative dashboard, translating complex, multi-tiered operational workflows into a sleek, actionable interface.",
      },
      {
        type: "images",
        items: [{ src: "/projects/muturs/img1.jpg" }],
      },
      {
        type: "callout",
        label: "💡 HR Insight: Agile Execution",
        value:
          "Delivering a secure, fully functional enterprise management tool from scratch in a single week demonstrates extreme technical proficiency, ruthless prioritization, and an elite ability to execute under pressure.",
      },
      {
        type: "heading",
        value: "The Prognosis: Empowered Leadership",
      },
      {
        type: "text",
        value:
          "The result is a dynamic operational hub that empowers hospital leaders to seamlessly track service quality and identify bottlenecks in real-time. By accelerating the delivery of this platform, I eliminated administrative silos and provided management with the exact tools they need to uphold the highest standards of healthcare—proving that sometimes, rapid development yields the healthiest results.",
      },
      {
        type: "quote",
        author: "Lead Developer",
        value:
          "Who says enterprise healthcare software has to be a headache? Sometimes the best medicine for organizational chaos is a meticulously engineered dashboard, delivered ahead of schedule.",
      },
    ],
  },
  {
    id: 8,
    slug: "blood-donation-tracker",
    title: "Hospital Blood Reserve & Distribution Tracker",
    category: "Web App",
    description:
      "A mission-critical web application built to digitize, track, and seamlessly distribute life-saving blood donation data across hospital departments.",
    coverImage: "/projects/darah/cover.jpg",
    tech: ["PHP", "CodeIgniter 3", "Vanilla JavaScript", "Bootstrap CSS"],
    github: null,
    demo: null,
    featured: false,
    role: "Fullstack Developer",
    duration: "2 Month",
    year: "2021",
    content: [
      {
        type: "intro",
        value:
          "Picture this: It's my first year as a fullstack developer, and my inaugural mission isn't just about pushing pixels—it's about routing life-saving resources. The challenge? Architecting a robust blood donation tracker for a bustling hospital environment.",
      },
      {
        type: "heading",
        value: "The Pulse of the Problem",
      },
      {
        type: "text",
        value:
          "Hospitals run on precision. When a donor rolls up their sleeve, that critical data needs to be logged, categorized, and distributed across various hospital wards without a single hiccup. A disorganized supply chain in healthcare isn't just an inconvenience; it's a severe operational risk. The hospital needed a digital central nervous system for their blood bank to replace fragmented tracking methods.",
      },
      {
        type: "callout",
        label: "💡 First-Year Milestone",
        value:
          "Taking ownership of a high-stakes healthcare application right out of the gate forged my deep appreciation for secure, fault-tolerant software architecture.",
      },
      {
        type: "heading",
        value: "Building the Arteries (The Tech)",
      },
      {
        type: "text",
        value:
          "To keep the system lightweight, secure, and highly reliable, I leaned into the rock-solid MVC architecture of CodeIgniter 3. Writing clean, structured PHP ensured the backend was bulletproof. For the front end, I utilized Bootstrap CSS to deploy a clean, no-nonsense UI that medical staff could navigate instantly. To keep data entry snappy for nurses on the floor, I implemented pure Vanilla JavaScript—no heavy frameworks, just raw, efficient performance.",
      },
      {
        type: "images",
        items: [{ src: "/projects/darah/img1.jpg" }],
      },
      {
        type: "quote",
        author: "Development Philosophy",
        value:
          "When the end-user is busy saving lives, your code needs to be as clean, responsive, and reliable as the tools in their operating room.",
      },
      {
        type: "heading",
        value: "The Lifeline Delivered",
      },
      {
        type: "text",
        value:
          "The result was a highly intuitive, fast, and centralized web application that successfully digitized the blood donation lifecycle. Hospital staff gained real-time visibility into their blood reserves, ensuring the right resources reached the right departments exactly when needed. Delivering a project with this level of real-world impact was the ultimate launchpad for my software engineering career.",
      },
    ],
  },
  {
    id: 9,
    slug: "lab-clinic-wms-django",
    title: "VitalStock: Lab Clinic Warehouse Management System",
    category: "Web App",
    description:
      "A rapid-deployment Warehouse Management System built in Django to bring order, accuracy, and sanity to hospital lab clinic inventory.",
    coverImage: "/projects/inventorylab/cover.jpg",
    tech: ["Python", "Django", "Inventory Management", "Data Reporting"],
    github: null,
    demo: null,
    featured: false,
    role: "Fullstack Developer",
    duration: "4 weeks",
    year: "2021",
    content: [
      {
        type: "intro",
        value:
          "Welcome to the ultimate inventory glow-up. When a hospital lab clinic needed to get their crucial supplies in check, I stepped in to build a streamlined Warehouse Management System (WMS) that turned operational chaos into clinical clockwork.",
      },
      {
        type: "heading",
        value: "The Mission: Taming the Medical Supply Closet",
      },
      {
        type: "text",
        value:
          "Hospital labs run on precision, but keeping track of reagents, vials, and critical medical supplies can quickly become a logistical nightmare. The clinic needed a robust, user-friendly system to manage their vital inventory—without drowning the medical staff in overly complex software. They needed reliability, and they needed it fast.",
      },
      {
        type: "callout",
        label: "⚡ Rapid Execution",
        value:
          "Designed, developed, and deployed from scratch in a lightning-fast 4-week sprint, proving that speed and high-quality architecture can absolutely share the same hospital room.",
      },
      {
        type: "heading",
        value: "The Method: Django to the Rescue",
      },
      {
        type: "text",
        value:
          "Armed with Python and the Django framework, I engineered a web application tailored specifically for essential warehouse management. I built out critical core features like 'stock opname' (pain-free inventory auditing) and automated reporting, ensuring that every single beaker and bandage was accounted for. The backend was structured to be as reliable and steady as a heartbeat.",
      },
      {
        type: "images",
        items: [{ src: "/projects/inventorylab/img.jpg" }],
      },
      {
        type: "quote",
        author: "Developer Insight",
        value:
          "Writing clean code is always a win, but engineering a system that helps a hospital lab run smoother and focus on patient care? That’s the real career highlight.",
      },
      {
        type: "heading",
        value: "The Milestone: A Healthier Supply Chain",
      },
      {
        type: "text",
        value:
          "The final product was a highly functional, no-nonsense WMS that empowered the clinic to track their stock with pinpoint accuracy and generate data-rich reports on the fly. It delivered an immediate boost to operational efficiency and stands as a masterclass in rapid, impactful web development.",
      },
    ],
  },
  {
    id: 10,
    slug: "hospital-data-lifeline",
    title: "The Hospital Data Lifeline: Supercharging Analytics with Metabase",
    category: "Web App",
    description:
      "Architected an end-to-end ETL pipeline and integrated Metabase to deliver dynamic, on-demand analytics to hospital auditors and management, eliminating manual query fatigue.",
    coverImage: "/projects/dashboard/cover.jpg",
    tech: [
      "Metabase",
      "ETL Pipelines",
      "REST APIs",
      "SQL",
      "Server Administration",
      "System Architecture",
    ],
    github: null,
    demo: null,
    featured: false,
    role: "Fullstack Developer",
    duration: "3-6 Months",
    year: "2023",
    content: [
      {
        type: "intro",
        value:
          "As a fullstack developer, our job isn't just to write code and spit out apps; it's to architect the absolute best-case scenario for the business. When hospital management needed rapid, robust data delivery, simply patching our existing systems wasn't going to cut it.",
      },
      {
        type: "heading",
        value: "The 'Why': Drowning in Manual Queries",
      },
      {
        type: "text",
        value:
          "Working in a small hospital dev team comes with outsized responsibilities. Management demanded fast data delivery, which was manageable at first. But then came the auditors. They required highly complex, ever-shifting data patterns for compliance and review. Manually writing and running custom SQL queries every time a new data pattern was requested was rapidly becoming a massive bottleneck. I realized we didn't just need a feature update—we needed a complete paradigm shift in how we handled and delivered data.",
      },
      {
        type: "callout",
        label: "💡 The Big Pivot",
        value:
          "Instead of hardcoding endless reports into the main application, I pivoted to a provider-centric model, deploying Metabase as the heavy-lifting engine for our data analytics.",
      },
      {
        type: "heading",
        value: "The 'How': Building the Pipeline",
      },
      {
        type: "text",
        value:
          "To make this vision a reality, I engineered a robust ETL (Extract, Transform, Load) pipeline to cleanly organize and feed our raw hospital data into Metabase. I handled the end-to-end deployment server settings to ensure high availability and strict data security. But I didn't stop at a standalone dashboard—I utilized the Metabase API to seamlessly embed these complex analytics directly into our main Super App, giving management a unified, single-pane-of-glass experience.",
      },
      {
        type: "quote",
        author: "Developer's Log",
        value:
          "A good developer builds an app to solve a problem. A great developer builds an ecosystem so they never have to run the same manual query twice.",
      },
      {
        type: "heading",
        value: "The 'Result': Automated Harmony",
      },
      {
        type: "images",
        items: [
          { src: "/projects/dashboard/img0.jpg" },
          { src: "/projects/dashboard/img1.jpg" },
        ],
      },
      {
        type: "text",
        value:
          "The deployment was a total game-changer for hospital operations. Auditors could now access the complex, slice-and-dice data they needed without waiting on the dev team. Management got lightning-fast, embedded analytics right inside their daily Super App. By bridging the gap between raw database metrics and a user-friendly interface, I transformed a tedious manual chore into a slick, highly scalable automated pipeline.",
      },
    ],
  },
  {
    id: 11,
    slug: "wedinote-ai-saas",
    title: "Wedinote",
    category: "Web App",
    description:
      "An all-in-one digital wedding planner and guestbook SaaS, engineered with Next.js and cutting-edge AI-assisted development workflows.",
    coverImage: "/projects/wedinote/cover.jpg",
    tech: [
      "Next.js",
      "Generative AI",
      "Model Context Protocol (MCP)",
      "AI Coding Agents",
      "SaaS Architecture",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
    ],
    github: null,
    demo: null,
    featured: false,
    role: "Lead Fullstack Developer & AI Integrator",
    duration: "Ongoing (Beta)",
    year: "2026",
    content: [
      {
        type: "intro",
        value:
          "In the golden age of Generative AI and the relentless wave of SaaS innovation, I decided to ride the crest and build something truly impactful. Enter Wedinote: a next-generation platform designed to take the stress out of saying 'I do.'",
      },
      {
        type: "heading",
        value: "The Why: Taming the Wedding Chaos",
      },
      {
        type: "text",
        value:
          "Weddings are beautiful, but planning them is notoriously chaotic. I saw a prime opportunity to bring order to the madness by architecting a unified digital wedding planner. The vision was simple but ambitious: bundle digital invitations, a robust planning dashboard, and an interactive guestbook into one seamless, elegant SaaS application.",
      },
      {
        type: "heading",
        value: "The How: Orchestrating AI as a Co-Pilot",
      },
      {
        type: "text",
        value:
          "Under the hood, Wedinote is powered by a high-performance Next.js foundation. But the real magic happened in the development workflow itself. I didn't just write code; I orchestrated AI. From brainstorming core features and generating dynamic content to configuring advanced Generative AI coding agents equipped with custom skills and Model Context Protocol (MCP) integrations, this project was a masterclass in modern software engineering.",
      },
      {
        type: "callout",
        label: "💡 Core Technical Insight",
        value:
          "Leveraging MCP and custom AI agents drastically reduced boilerplate overhead, allowing me to focus entirely on complex state management, user experience, and high-level SaaS architecture.",
      },
      {
        type: "heading",
        value: "The Result: A Private Beta and a Paradigm Shift",
      },
      {
        type: "images",
        items: [
          { src: "/projects/wedinote/img.jpeg" },
          { src: "/projects/wedinote/img1.jpg" },
          { src: "/projects/wedinote/img2.jpg" },
        ],
      },
      {
        type: "text",
        value:
          "Currently deployed in a private beta testing phase, Wedinote is already proving its mettle in the wild. Beyond delivering a functional product, the most profound takeaway was experiencing firsthand the paradigm shift from traditional manual coding to high-octane, AI-assisted development.",
      },
      {
        type: "quote",
        author: "Project Reflection",
        value:
          "Building Wedinote taught me that the future of engineering isn't just about writing better syntax; it's about seamlessly collaborating with AI to architect vastly superior systems.",
      },
    ],
  },
  {
    id: 12,
    slug: "sifin-saas",
    title: "SifIn: Intelligent Shift Management & Presence Verification",
    category: "Web App",
    description:
      "A high-integrity shift and attendance ecosystem utilizing device GPS, real-time face detection, and local network validation to eliminate buddy-punching.",
    coverImage: "/projects/sifin/cover.jpg",
    tech: [
      "Laravel",
      "Vue.js",
      "Inertia.js",
      "GPS Geolocation API",
      "Face Detection API",
      "Laravel Cloud",
    ],
    github: null,
    demo: "http://sifin-main-sbditw.free.laravel.cloud/",
    featured: false,
    role: "Lead Fullstack Developer",
    duration: "7 Days",
    year: "2026",
    content: [
      {
        type: "intro",
        value:
          "Say goodbye to vulnerable paper rosters and easily tricked time clocks. SifIn is a modern shift management SaaS engineered to keep dynamic teams in perfect sync—whether they are handling critical patient care on-site or operating deep in the field.",
      },
      {
        type: "heading",
        value: "The Friction: Ghost Hours & Attendance gymnastics",
      },
      {
        type: "text",
        value:
          "Local businesses, particularly multi-shift healthcare facilities and field-heavy enterprises, were drowning in attendance chaos. Between manual spreadsheets, forgotten ID cards, and honor-system messaging for remote check-ins, tracking presence was an administrative nightmare. Management lost hours verifying payroll claims, while vulnerable workflows left companies exposed to 'buddy punching.' The market needed a bulletproof, frictionless solution capable of confirming real-world presence instantly.",
      },
      {
        type: "callout",
        label: "💡 Key Insight",
        value:
          "By relying on native hardware layers instead of pure trust, we turned the everyday smartphone into an immutable biometric verification hub.",
      },
      {
        type: "heading",
        value: "The Blueprint: Architecting a Tri-Fold Verification Matrix",
      },
      {
        type: "text",
        value:
          "To solve this, I built SifIn using the ultra-efficient Laravel, Inertia, and Vue.js trifecta. This architecture delivers a lightning-fast, native-feeling Single Page Application (SPA) tuned for mobile web views. Under the hood, I engineered a multi-layered validation routine: precise GPS geolocation coordinates for field workers, instantaneous local Wi-Fi gateway handshakes for desk staff, and a lightweight browser-based face detection API to seal identity. Everything was deployed seamlessly via Laravel Cloud to handle elastic scale gracefully.",
      },
      {
        type: "quote",
        author: "Lead Developer",
        value:
          "We didn't just write an API; we designed an agile presence-verification machine that respects both the business's bottom line and the employee's time.",
      },
      {
        type: "images",
        items: [
          { src: "/projects/sifin/img.jpg" },
          { src: "/projects/sifin/img2.jpg" },
          { src: "/projects/sifin/img3.jpg" },
        ],
      },
      {
        type: "heading",
        value: "The Outcome: Validated Integrity & Real-World Trials",
      },
      {
        type: "text",
        value:
          "The resulting application bridges high-security logic with an incredibly fluid interface. SifIn has successfully moved from the lab into an active beta test environment at a local clinic, handling real-time staff shift changes, complex rotations, and automated time-logging with absolute precision. By offering contextual, flexible check-in methods, the platform completely eliminates manual errors and provides administrators with a single, unalterable source of truth.",
      },
    ],
  },
  {
    id: 13,
    slug: "vue-interactive-form-builder",
    title: "Interactive Form Builder",
    category: "Web App",
    description:
      "A robust, interactive form builder built in Vue to empower non-technical users and eliminate developer bottlenecks. Built 100% manually to challenge my architectural chops.",
    coverImage: "/projects/formbuilder/cover.jpg",
    tech: ["Vue.js"],
    github: "https://github.com/naufalazzmy/form-builder",
    demo: "https://naufalazzmy.github.io/form-builder/",
    featured: false,
    role: "Lead Frontend Engineer",
    duration: "6 Weeks",
    year: "2024",
    content: [
      {
        type: "intro",
        value:
          "Let's be real: no developer dreams of spending their sprint tweaking slightly different versions of the exact same medical form. I decided to flip the script, eliminate the bottleneck, and put the power directly into the users' hands.",
      },
      {
        type: "heading",
        value: "The Spark: Curing the Copy-Paste Blues",
      },
      {
        type: "text",
        value:
          "In the fast-paced world of medical record development, our internal users demanded rapid form deployments with a UX that mimicked the physical paper workflows they already knew and loved. For the dev team, this translated to a massive time-sink—endless Jira tickets just to accommodate slight data variations. The bottleneck was glaring. Rather than playing catch-up, I aimed to remove developers from the form-creation equation entirely.",
      },
      {
        type: "callout",
        label: "💡 Architectural Shift",
        value:
          "Instead of hardcoding a thousand slightly different forms, I engineered a system where the end-users effectively become their own frontend developers.",
      },
      {
        type: "heading",
        value: "The Execution: Pure Vue, No Training Wheels",
      },
      {
        type: "text",
        value:
          "I architected an intuitive, interactive form builder. Non-technical users can now seamlessly construct bespoke layouts on the fly. The magic happens under the hood: the builder instantly serializes their visual layout into a clean, standardized JSON schema. This payload is then effortlessly digested and rendered by our primary frontend architecture, bridging the gap between non-technical creation and technical execution.",
      },
      {
        type: "quote",
        author: "Developer Philosophy",
        value:
          "Sometimes, to truly test your mettle, you have to turn off the autopilot. I built this entirely without Gen AI just to see if my gut was as sharp as my IDE.",
      },
      {
        type: "heading",
        value: "The Result: Unblocking the Dev Pipeline",
      },
      {
        type: "text",
        value:
          "Developed entirely in Vue during 2024, this project was an exhilarating challenge in component design and complex state management. The result? Our medical staff gets their pixel-perfect forms in minutes, our developers get their time back, and I got the satisfaction of proving that good old-fashioned coding grit never goes out of style.",
      },
    ],
  },
  {
    id: 14,
    slug: "hospital-super-app-evolution",
    title: "SIMRS: A 5-Year Evolution",
    category: "Web App",
    description:
      "A transformative 5-year journey upgrading a massive legacy PHP hospital management system into a modern, highly scalable, DDD-architected Laravel & React ecosystem.",
    coverImage: "/projects/simrs/cover.jpg",
    tech: [
      "Laravel",
      "ReactJS",
      "PHP",
      "Domain-Driven Design (DDD)",
      "WebSockets",
      "REST API",
      "MySQL",
    ],
    github: null,
    demo: null,
    featured: true,
    role: "Lead Developer, Fullstack Engineer, Backend Architecture Specialist",
    duration: "5+ Years",
    year: "2026",
    content: [
      {
        type: "intro",
        value:
          "What started as my first role as a Software Engineer turned into an epic five-year saga of transforming a hospital's digital heartbeat. Imagine a monolithic 'Super App' that handles everything from doctor schedules and electronic medical records to warehouse inventory, HR, and vendor management. Now, imagine rebuilding it from scratch while keeping the hospital running smoothly. Challenge accepted.",
      },
      {
        type: "heading",
        value: "🎯 The 'Why': From Native PHP to Modern Lifesaver",
      },
      {
        type: "text",
        value:
          "When I first joined, the hospital was relying on a legacy system built entirely in native PHP—everything from authentication and caching to the API layer was custom-rolled. The mission was clear: modernize the core logic without losing the bespoke business rules. We needed stability, security, and a foundation that wouldn't give us a headache every time we needed to scale.",
      },
      {
        type: "images",
        items: [
          {
            src: "/projects/simrs/img.jpg",
          },
        ],
      },
      {
        type: "callout",
        label: "💡 Soft Skills Level Up",
        value:
          "Working bottom-up meant diving deep into the trenches. I spent just as much time understanding user workflows—translating raw hospital needs into technical requirements—as I did writing code. It was a baptism by fire that massively accelerated my communication and product management skills.",
      },
      {
        type: "heading",
        value: "🚀 The 'How' Phase 1: The Laravel Revival (2019–2024)",
      },
      {
        type: "images",
        items: [
          {
            src: "/projects/simrs/img1.jpg",
          },
          {
            src: "/projects/simrs/img2.jpg",
          },
        ],
      },
      {
        type: "text",
        value:
          "Partnering closely with a senior engineer, we spearheaded the migration to Laravel. We leveraged its built-in features to clean up the architecture while introducing highly efficient caching layers, hardened security via third-party APIs, and WebSockets for real-time updates. By optimizing database queries and implementing robust cron jobs, we built a system that purred quietly under heavy operational loads.",
      },
      {
        type: "heading",
        value: "🏗️ The 'How' Phase 2: Scaling Smartly (2025–Present)",
      },
      {
        type: "text",
        value:
          "By 2025, our team had grown, and the application needed to evolve again. To prevent stepping on each other's toes, we strategically decoupled the frontend and backend. I pivoted to focus entirely on backend architecture. We adopted Domain-Driven Design (DDD) within Laravel to separate modules logically, ensuring cross-team understanding and frictionless feature updates. Meanwhile, the frontend transitioned to ReactJS, and with the integration of AI tools in our workflow, our development speed became downright rapid.",
      },
      {
        type: "quote",
        author: "My Engineering Philosophy",
        value:
          "Overengineering might sound cool in technical blogs, but in the trenches of real-world development, 'it works efficiently and scales easily' is the ultimate feature.",
      },
      {
        type: "heading",
        value: "🎉 The 'Result': Impact Beyond Code",
      },
      {
        type: "text",
        value:
          "The results transcended standard engineering metrics. The 2024 version rollout drastically improved the hospital's operational efficiency, plugging cashflow leaks and directly contributing to a measurable increase in the hospital's financial surplus. Today, the system isn't just a piece of software; it's a scalable, breathing ecosystem that empowers the medical staff and management team to do their best work, supported by an architecture that's built to last.",
      },
    ],
  },
  {
    id: 15,
    slug: "computer-vision-cabbage-detection",
    title: "Computer Vision: Cabbage Detection",
    category: "AI Research",
    description:
      "Engineered a lightweight, edge-deployed CNN on a Raspberry Pi to power an autonomous disinfectant-spraying robot, reducing human exposure to hazardous agricultural chemicals.",
    coverImage: "/projects/cnn/cover.webp",
    tech: [
      "Open CV",
      "Python",
      "TensorFlow",
      "Computer Vision",
      "CNN",
      "Raspberry Pi",
      "Deep Learning",
    ],
    github: null,
    demo: null,
    featured: false,
    role: "Computer Vision Engineer",
    duration: "3 Months",
    year: "2020",
    content: [
      {
        type: "intro",
        value:
          "Cast your mind back to 2020. Deep Learning was the absolute wild west, the hype train was moving at terminal velocity, and I was deeply obsessed with the possibilities of image processing. This project was born as a side-thesis adventure with a highly practical goal: building an autonomous robot to spray agricultural disinfectants, completely removing humans from the hazardous chemical equation.",
      },
      {
        type: "heading",
        value: "The Mission: Give a Robot Cabbage-Vision",
      },
      {
        type: "text",
        value:
          "While the rest of the team built the physical rover, my responsibility was to give it eyes. The objective sounded straightforward enough on paper: detect cabbages in the field so the robot knows exactly where to direct its payload. But there was a massive catch. This entire system had to run locally on a humble Raspberry Pi. We were talking pure edge computing with zero room for bloated models or cloud computing latency.",
      },
      {
        type: "callout",
        label: "💡 The Hardware Bottleneck",
        value:
          "Balancing high accuracy with extreme hardware constraints. I needed an architecture lightweight enough to run inference on a Raspberry Pi without melting the board, yet precise enough to confidently differentiate a cabbage from ambient foliage.",
      },
      {
        type: "heading",
        value: "The Execution: Training on GPUs, Deploying on the Edge",
      },
      {
        type: "text",
        value:
          "I rolled up my sleeves and tackled the full machine learning lifecycle from scratch. After rigorously gathering, cleaning, and preparing the training data, I architected a custom Convolutional Neural Network (CNN) using TensorFlow. I put my local GPU to the ultimate test during the training phase, iteratively tweaking hyperparameters to achieve maximum efficiency. It was a masterclass in optimization—stripping away the excess until the model was lean, mean, and ready for deployment on low-power hardware.",
      },
      {
        type: "quote",
        author: "Project Reflection",
        value:
          "Building for edge devices forces you to trade raw, brute-force compute power for algorithmic elegance. That constraint is where the real engineering magic happens.",
      },
      {
        type: "heading",
        value: "The Result: Mission Accomplished",
      },
      {
        type: "images",
        items: [
          { src: "/projects/cnn/video.webm" },
          { src: "/projects/cnn/video1.webm" },
        ],
      },
      {
        type: "text",
        value:
          "The deployment was a major success. Running purely on the Pi, the custom CNN accurately identified cabbages in real-time, effectively guiding the robot's spraying mechanism and significantly reducing the need for human interaction with toxic chemicals. While I’d love to revisit the codebase and benchmark it against today’s cutting-edge lightweight models, this project stands as a massive milestone in my journey—proving my ability to own an end-to-end ML pipeline from data curation to edge deployment.",
      },
    ],
  },
];

export const categories = ["All", "Web App", "Game Dev", "AI Research"];
