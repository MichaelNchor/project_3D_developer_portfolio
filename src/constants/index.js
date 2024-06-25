import {
  joe,
  uits, 
  ilp,
  todolist,
  slack,
  adventureboy,
  datavis,
  drawing,
  hallofmusic,
  keeper,
  musicvis,
  onepiece,
  parksite,
  rockpaperscissors,
  superstore,
  synomemes,
  warehouse,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  csharp,
  redis, 
  postgres,
  aspnet,
  hubtel,
  youtube
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Graphic Design",
    icon: creator,
  },
  {
    title: "Mathematics",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "azure devops",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer (Backend)",
    company_name: "Hubtel.com",
    icon: hubtel,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Contributed to the codebase and Developed Api’s, Jobs and Consumers in C# using the .NET framework.",
      "Worked in the Health and User Accounts team where I contributed to the codebase by developing new features, addressing bugs and unit testing.",
      "Write elegant code using principles such as SOLID, YAGNI, KISS, DRY.
      "Participate in weekly team presentations where we gave updates of our work over the work week."
      "Work with technologies like ASP.NET, Azure DevOps, Redis, Elastic Search, Kafka, SDKs, Signal R, Quartz Jobs Scheduling, PostgreSQL and Unit Testing.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "University Information Technology Services (UITS)",
    icon: uits,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Oct 2023",
    points: [
      "Built a C# ASP.NET and SQL Server, Tailwindcss, ExpressJS, NodeJS and EJS Templating application to digitise student hard ID cards into soft cards which can be scanned to verify student status.",
      "Testing and Data Entry for a .NET Blazortimetable application to help departments in KNUST schedule classes and meetings efficiently.",
      "Development of a Shopping Cart Application with C# ASP.NET.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Digital Marketing Intern",
    company_name: "International Learning Planners(ILP Overseas)",
    icon: ilp,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Apr 2022",
    points: [
      "Won Best Performer Premium Certificate for Dec. 2021 and Jan. 2022",
      "Promoted from intern to Team Leader Officer, Team Leader Manager and Head of Department for Digital Marketing Domain",
      "Produced Blogs, SEO and Engaging Content (Videos and Posters) for ILP Overseas website and Social Media Platforms that boosted publicity.",
    ],
  },
  {
    title: "Web and Software Development Freelancing",
    company_name: "Self-Employed",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Build web Applications for clients and teach how to code",
    ],
  },
    {
    title: "Web and Software Development Freelancing",
    company_name: "Self-Employed",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Build web Applications for clients and teach how to code",
    ],
  },
  {
    title: "Youtube",
    company_name: "Mike's Code Journal",
    icon: youtube,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I started a YouTube channel called Mike’s Code Journal where I upload videos on programming concepts",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Very Hardworking and Punctual. Always finding solutions and helping the group",
    name: "Joseph Danquah",
    designation: "PHP Developer",
    company: "UITS",
    image: joe,
  },
];

const projects = [
   {
      "name":"Superstore Application",
      "description":"A Complete Online store Application with Authentication and Authorization, Admin and User routes, Paypal Payment, Currency change, product review and more. Built with ExpressJS, NodeJS, MongoDB, EJS Templating, HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"nodejs",
            "color":"blue-text-gradient"
         },
         {
            "name":"expressjs",
            "color":"pink-text-gradient"
         },
         {
            "name":"mongodb",
            "color":"green-text-gradient"
         },
         {
            "name":"bootstrap",
            "color":"red-text-gradient"
         }
      ],
      "image": superstore,
      "source_code_link":"https://github.com/MichaelNchor/superstore",
     "live_demo_link":"https://superstore-iy8m.onrender.com",
   },
     {
      "name":"Slack Clone Messaging Application",
      "description":"A Complete Slack clone with Authentication and Authorization, Channel creation, direct messaging, texting with images, videos and emojis, sharing and watching external links in app (e.g. Youtube) and more. Developed with ReactJS, ExpressJS, NodeJS and Stream API.",
      "tags":[
         {
            "name":"reactjs",
            "color":"blue-text-gradient"
         },
         {
            "name":"streamapi",
            "color":"green-text-gradient"
         },
         {
            "name":"tailwind",
            "color":"pink-text-gradient"
         }
      ],
      "image":slack,
      "source_code_link":"https://github.com/MichaelNchor/messaging-app-server/",
       "live_demo_link":"https://messaging-app-dx79.onrender.com/",
   },
     {
      "name":"Endless Runner Video Game",
      "description":"An adventure game, adventure boy, where player has to escape obstacles, risk losing lives to earn coins and capture the flag at the end. Built with P5.JS libraries, HTML, CSS and JS.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"p5.js",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":adventureboy,
      "source_code_link":"https://github.com/MichaelNchor/AdventureBoy",
       "live_demo_link":"https://michaelnchor.github.io/AdventureBoy/",
   },
   {
      "name":"Sketching Application",
      "description":"A Complete Drawing Application like Microsoft Paint for creative drawing shapes, applying color, editing, image upload, stamps, etc. Developed with P5.jS libraries, HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"p5.js",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image": drawing,
      "source_code_link":"https://github.com/MichaelNchor/DrawingApp",
     "live_demo_link":"https://michaelnchor.github.io/DrawingApp/",
   },
   {
      "name":"Synomemes Web Application",
      "description":"Worked with colleage as Frontend Developer on synomemes social media application for sharing memes. With Authentication and Authorization, Meme sharing, likes, comments, and more. Built with PHP, Laravel, MySQL, HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"laravel",
            "color":"blue-text-gradient"
         },
         {
            "name":"php",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
         {
            "name":"css",
            "color":"red-text-gradient"
         },
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },        
      ],
      "image": synomemes,
      "source_code_link":"https://github.com/MichaelNchor/Meme-World",
     "live_demo_link":"#",
   },
   {
      "name":"Warehouse Management Application",
      "description":"A Warehouse Management system made with Angularjs, Express js, Node js, PostgreSQL.",
      "tags":[
         {
            "name":"angularjs",
            "color":"blue-text-gradient"
         },
         {
            "name":"mongodb",
            "color":"green-text-gradient"
         },
         {
            "name":"expressjs",
            "color":"pink-text-gradient"
         }
      ],
      "image":warehouse,
      "source_code_link":"https://github.com/MichaelNchor/angular-crud-application",
     "live_demo_link":"#",
   },
   {
      "name":"Pokemon Website",
      "description":"A Themepark Website built with HTML, CSS and Javascript with booking and ticketting.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":parksite,
      "source_code_link":"https://github.com/MichaelNchor/Themepark-site",
     "live_demo_link":"https://michaelnchor.github.io/Themepark-site/",
   },
   {
      "name":"Todo List App",
      "description":"A Todo list application built with React js, Express js, Node js and MySQL ",
      "tags":[
         {
            "name":"reactjs",
            "color":"blue-text-gradient"
         },
         {
            "name":"mysql",
            "color":"green-text-gradient"
         },
         {
            "name":"expressjs",
            "color":"pink-text-gradient"
         },
         {
            "name":"tailwind",
            "color":"blue-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":todolist,
      "source_code_link":"https://github.com/MichaelNchor/TodoList",
     "live_demo_link":"#",
   },
   {
      "name":"Google keep clone",
      "description":"Keeper google keep UI clone for taking notes built with React js, and Tailwind css",
      "tags":[
         {
            "name":"reactjs",
            "color":"blue-text-gradient"
         },
         {
            "name":"mysql",
            "color":"green-text-gradient"
         },
         {
            "name":"expressjs",
            "color":"pink-text-gradient"
         },
         {
            "name":"tailwind",
            "color":"blue-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":keeper,
      "source_code_link":"https://github.com/MichaelNchor/Google-Keep-Clone",
     "live_demo_link":"#",
   },
   {
      "name":"Data Visualization Application",
      "description":"A Data visualization Application built with p5 js libraries, HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"p5.js",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":datavis,
      "source_code_link":"https://github.com/MichaelNchor/Data-Visualizer",
     "live_demo_link":"https://michaelnchor.github.io/Data-Visualizer/",
   },
   {
      "name":"Music Visualizer Application",
      "description":"Visualize music by various components like tempo, rhythm etc. built with p5.js libraries, HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"p5.js",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":musicvis,
      "source_code_link":"https://github.com/MichaelNchor/MusicVisualizer",
     "live_demo_link":"https://michaelnchor.github.io/MusicVisualizer/",
   },
   {
      "name":"Rock-Paper-Scissors Application",
      "description":"A complete Rock-paper-scissors game built with, Tailwind , HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"tailwind",
            "color":"green-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":rockpaperscissors,
      "source_code_link":"https://github.com/MichaelNchor/Rock-Paper-Scissors",
     "live_demo_link":"https://michaelnchor.github.io/Rock-Paper-Scissors/",
   },
   {
      "name":"Anime Documentation page",
      "description":"Documentation for one piece characters with nightmode, built with HTML, CSS and Javascript.",
      "tags":[
         {
            "name":"javascript",
            "color":"blue-text-gradient"
         },
         {
            "name":"html",
            "color":"pink-text-gradient"
         },
          {
            "name":"css",
            "color":"red-text-gradient"
         }
      ],
      "image":onepiece,
      "source_code_link":"https://codepen.io/michaelnchor/pen/OJjgQeG",
     "live_demo_link":"https://codepen.io/michaelnchor/pen/OJjgQeG",
   }
];

export { services, technologies, experiences, testimonials, projects };
