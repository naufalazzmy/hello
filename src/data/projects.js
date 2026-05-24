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
];

export const categories = ["All", "Web App", "Game Dev", "AI Research"];
