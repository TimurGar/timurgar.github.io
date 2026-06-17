export const products = [
  {
    href: "https://web.archive.org/web/20260331060358/https://rali.coffee/",
    title: "RALI",
    description: 'Rali is a canned protein coffee brand delivering 20 grams of protein, electrolytes, and steady energy for an active lifestyle. As CTO, I designed and built the website and D2C sales pipeline that helped us sell out our first run of 5,000 cans in 32 days and land placements at Richmond-area retailers like Blanchard\'s and Libbie Market.',
    thumbnail: "/images/rali-1.png",
    images: [
      "/images/rali-1.png",
      "/images/rali-video.mp4",
      "/images/rali-2.png",
      "/images/rali-3.png",
      "/images/rali-4.png",
      "/images/rali-5.png",
      "/images/rali-6.png",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Shopify"],
    slug: "rali",
    robotics: false,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
            About RALI
          </h3>
          <p className="text-sm lg:text-base font-normal text-secondary mb-3">
            Rali is a canned protein coffee brand built to fuel an active lifestyle. Each can delivers 20 grams of protein, electrolytes, and 100 milligrams of caffeine, designed to hydrate rather than dehydrate.
          </p>
          <p className="text-sm lg:text-base font-normal text-secondary">
            The brand launched under the tagline <span className="italic font-semibold">"Revive Your Drive,"</span> targeting people who want steady energy throughout their day.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
            My Role
          </h3>
          <p className="text-sm lg:text-base font-normal text-secondary">
            As CTO, I owned the technical side of the company end to end. I designed and built the Rali website from scratch and constructed the direct-to-consumer (D2C) sales pipeline that powered our launch.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-3">
            Market Impact
          </h3>
          <p className="text-sm lg:text-base font-normal text-secondary mb-3">
            We sold out our first run of 5,000 cans in just 32 days, establishing strong market demand. The product is now stocked at leading Richmond-area retailers including Blanchard&apos;s, Libbie Market, Ginger Juice, Supper Club, and For the Love of Flour Bakery.
          </p>
        </div>
      </div>
    ),
  },
  {
    href: "https://getunify.vercel.app/",
    title: "Unify",
    description:
      "Unify is an AI-powered platform that streamlines how universities review, approve, and share campus events and announcements, reducing manual work and improving communication between the university and its students.",
    thumbnail: "/images/unify2.png",
    images: [
      "/images/unify1.png",
      "/images/unify2.png",
      "/images/unify3.png",
      "/images/unify4.png",
    ],
    stack: ["Python", "React", "Google Gemini", "Mongo DB", "Github Actions"],
    slug: "unify",
    robotics: false,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },
  {
    href: "https://spiderbytesv2.vercel.app/",
    title: "SpiderBytesV2",
    description:
      "Modernized campus news & events email system for University of Richmond, now powered by AI and automation.",
    thumbnail: "/images/sbv2-7.png",
    images: [
      "/images/sbv2-7.png",
      "/images/sbv2-8.png",
      "/images/sbv2-6.png",
      "/images/sbv2-1.png",
      "/images/sbv2-2.png",
      "/images/sbv2-3.png",
      "/images/sbv2-4.png",
      "/images/sbv2-5.png",
    ],
    stack: ["Python", "React", "Google Gemini", "Mongo DB", "Github Actions"],
    slug: "spiderbytesv2",
    robotics: false,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },
  {
    href: "https://wurm.vercel.app/",
    title: "Wurm (Book Sharing App)",
    description:
      "Student-built marketplace for selling and exchanging course textbooks.",
    thumbnail: "/images/wurm-1.png",
    images: [
      "/images/wurm-1.png",
      "/images/wurm4.png",
      "/images/wurm5.png",
      "/images/wurm6.png",
      "/images/wurm-2.png",
      "/images/wurm3.png",
    ],
    stack: ["React", "Node.js", "Mongo DB", "Express", "Tailwindcss"],
    slug: "wurm",
    robotics: false,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },
  {
    href: "https://keepertimurg.herokuapp.com/",
    title: "Keeper (Project Management App)",
    description:
      "A web app for streamlining workflow & data management of personal projects.",
    thumbnail: "/images/keeper-3.png",
    images: [
      "/images/keeper-1.png",
      "/images/keeper-2.png",
      "/images/keeper-3.png",
    ],
    stack: ["Flask", "Python", "SQLAlchemy", "Bootstrap"],
    slug: "keeper",
    robotics: false,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },
  {
    href: "https://github.com/TimurGar/Unit-3/blob/main/CS%20Mini%20IA%20-%20Dtrack/Dtrack_main.md",
    title: "Dtrack (Health App)",
    description:
      "Mobile App for Personalized Exercise Tracking for Diabetic Health.",
    thumbnail: "/images/dtrack-2.png",
    images: [
      "/images/dtrack-1.png",
      "/images/dtrack-2.png",
      "/images/dtrack-3.png",
    ],
    stack: ["KivyMD", "Python", "SQL", "Material Design"],
    slug: "dtrack",
    robotics: false,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },

  // ROBOTICS PROJECTS
  {
    href: "",
    title: "Autonomous Environment Mapper",
    description:
      "The robot is built using an Arduino microcontroller, and programmed in C language. It's equipped with ultrasonic and color sensors to detect obstacles and navigate through its environment while simultaneously mapping the area.",
    thumbnail: "/images/car-robot.jpg",
    images: ["/images/car-robot.jpg"],
    stack: ["Arduino", "C"],
    slug: "robot",
    robotics: true,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },

  {
    href: "",
    title: "FDM 3D Printers",
    description:
      "I built three different 3D printers (with Scara, Hbot, CoreXY kinematics) from scratch using an Arduino microcontroller with RAMPS and programmed it in C language with a help of Marlin Open Source Libary. The besides printing with different types of filament, the printers are cable of auto bed leveling, and filament runout detection.",
    thumbnail: "/images/scara.jpg",
    images: [
      "/images/scara.jpg",
      "/images/new-3D-printer.jpg",
      "/images/old-3D-printer.jpg",
    ],
    stack: ["Arduino", "C", "RAMPS", "Marlin"],
    slug: "printers",
    robotics: true,
    content: (
      <div>
        {}
        <p></p>{" "}
      </div>
    ),
  },
];
