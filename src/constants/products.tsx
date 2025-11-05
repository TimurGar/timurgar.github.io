export const products = [
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
    images: ["/images/wurm-1.png", "/images/wurm-2.png"],
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
