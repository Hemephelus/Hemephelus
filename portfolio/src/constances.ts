export const projects = {
  personal_projects: {
    wed_development: [
      {
        logoSrc: "/glascript.svg",
        logoAlt: "glascript",
        subTitle:
          "A web-based app to help apps script developers find apps script libraries. (Full-Stack)",
        title: "Glascript",
        role: "Full-stack Developer",
        projectLink: "/projects/glascript",
        websiteLink: "https://www.glascript.com/",
        overview: [
          "Glascript is a dedicated platform designed to assist Google Apps Script developers in discovering and integrating Apps Script libraries into their projects. The platform simplifies the process of finding relevant libraries and provides users with the necessary script IDs to facilitate seamless installation.",
        ],
        problem: [
          "Fragmented Library Resources: There was no centralized repository or platform where developers could easily search for and access Apps Script libraries, leading to inefficiencies and prolonged development times.",
        ],
        solution: [
          "Centralized Library Repository: Aggregated a wide range of Apps Script libraries into a single platform, allowing developers to search and discover libraries relevant to their needs.",
          "Direct Integration Support: Provided script IDs alongside each library, enabling developers to quickly copy and integrate them into their projects without extensive searches.",
          "User-Friendly Interface: Designed an intuitive and clean interface to enhance user experience, making the process of finding and integrating libraries straightforward.",
        ],
        result: [
          "Increased Engagement: The site currently receives over 3,000 visits per week, indicating strong community interest and reliance on the platform.",
        ],
        slide_imgs: [
          "/glascript/home.jpg",
          "/glascript/library.jpg",
          "/glascript/docs.jpg",
        ],
        tools: [
          { name: "Nextjs", src: "/tools/nextjs.png" },
          { name: "Tailwind", src: "/tools/tailwind.png" },
          { name: "React", src: "/tools/react.png" },
          { name: "Supabase", src: "/tools/supabase.png" },
          { name: "TypeScript", src: "/tools/typescript.png" },
          { name: "Apps Script", src: "/tools/apps-script.png" },
          { name: "Google Sheets", src: "/tools/google-sheets.png" },
        ],
      },
      {
        logoSrc: "/pig.png",
        logoAlt: "greedy-pig",
        subTitle:
          "A web-based dice game people can play in with friends. (Front-End)",
        title: "Greedy pig",
        role: "Front-End Developer",
        projectLink: "/projects/greedy-pig",
        websiteLink: "https://greedy-pig.vercel.app/",
        overview: [
          "Greedy Pig is a web-based adaptation of the traditional dice game 'Pig' designed to offer a digital alternative to the classic pen-and-paper gameplay. This online version allows players to enjoy the game without the need for physical dice or scorekeeping materials.",
        ],
        problem: [
          "Inconvenient Gameplay Mechanics: The necessity for physical dice and manual scorekeeping made the game less accessible and enjoyable, especially in settings where these materials weren't readily available.",
        ],
        solution: [
          "Digital Dice Rolling: Implemented an online dice-rolling mechanism, eliminating the need for physical dice and ensuring fair play.",
          "Automated Scorekeeping: Integrated real-time score tracking to remove manual calculations and reduce potential errors.",
          "User-Friendly Interface: Designed an intuitive and engaging interface to enhance user experience and make the game accessible to players of all ages.",
        ],
        result: [
          "Positive User Feedback: The game has been played by numerous individuals, all of whom have expressed enjoyment and appreciation for the digital adaptation.",
          "Increased Accessibility: By providing an online platform, Greedy Pig has made the classic game more accessible to a wider audience, allowing people to play anytime without the need for physical materials.",
        ],
        slide_imgs: [
          "/greedy-pig/home.jpg",
          "/greedy-pig/setup.jpg",
          "/greedy-pig/game.jpg",
          "/greedy-pig/game-over.jpg",
        ],
        tools: [
          { name: "Vite", src: "/tools/vite.png" },
          { name: "Tailwind", src: "/tools/tailwind.png" },
          { name: "React", src: "/tools/react.png" },
          // { name: "Supabase", src: "/tools/supabase.png" },
          { name: "JavaScript", src: "/tools/javascript.png" },
        ],
      },
      {
        logoSrc: "/moniac.svg",
        logoAlt: "moniac",
        subTitle:
          "A web-based simulator modeling Nigeria's economy, allowing users to adjust policies and visualize their impact. (Front-End)",
        title: "Moniac",
        role: "Front-End Developer",
        projectLink: "/projects/moniac",
        websiteLink: "https://moniac.vercel.app/",
        overview: [
          "Our simulation is inspired by Bill Phillips' hydraulic economics computer, known as the MONIAC (Monetary National Income Analogue Computer), invented in 1949. This web-based simulation models key economic variables specific to Nigeria, allowing users to experiment with various economic policies. Users can adjust parameters such as interest rates and taxation to visualize the effects of policy changes on the Nigerian economy.",
        ],
        problem: [
          "Complex Economic Concepts: Economic theories and models are often abstract, making them less accessible to students and policymakers.",
          "Lack of Interactive Learning Tools: There is a scarcity of platforms that allow users to experiment with economic policies in a controlled, risk-free environment.",
        ],
        solution: [
          "Interactive Policy Adjustment: Users can modify parameters such as interest rates and taxation levels to observe real-time effects on economic indicators.",
          "Visual Representation: The simulation provides graphical outputs, helping users visualize how changes in policies influence the economy.",
          "Educational Resource: Serves as a teaching tool for students and educators to better understand economic dynamics through hands-on experimentation.",
          "User Engagement: Incorporated an Easter egg feature allowing users to click and move elements around the screen, enhancing interactivity and user engagement.",
        ],
        result: [
          "Positive Feedback: Users appreciate the interactive nature of the tool, finding it both informative and engaging.",
        ],
        slide_imgs: ["/moniac/home.jpg"],
        tools: [
          { name: "Tailwind", src: "/tools/tailwind.png" },
          { name: "JavaScript", src: "/tools/javascript.png" },
          { name: "P5js", src: "/P5js.png" },
          { name: "HTML", src: "/tools/html.png" },
        ],
      },
      // {
      //   logoSrc: "/osisi.svg",
      //   logoAlt: "osisi",
      //   subTitle: "A web-based representation of my family tree. (Front-End)",
      //   title: "Osisi",
      // role:"Front-End Developer"
      // projectLink: "/projects/osisi",
      //   websiteLink: "https://osisi.vercel.app/",
      //   overview: [],
      //   problem: [],
      //   solution: [],
      //   result: [],
      //   slide_imgs: [],
      //   tools: [],
      // },
    ],

    data_science: [
      {
        logoSrc: "/limitz.svg",
        logoAlt: "limitz",
        subTitle:
          "An extension that adds econometrics analysis and statistics functions to your google sheets.",
        title: "Limitz",
        websiteLink:
          "https://workspace.google.com/marketplace/app/limitz/666774254026",
      },
      {
        logoSrc: "/ayo.svg",
        logoAlt: "ayo",
        subTitle:
          "My Masters Thesis on the game Ayo where I Explored Explainability in Reinforcement Learning for games.",
        title: "The Ayo Game",
        websiteLink: "https://github.com/Hemephelus/Ayo-Game",
      },
      {
        logoSrc: "/credit.svg",
        logoAlt: "credit",
        subTitle:
          "A credit risk model i built to determine if a candidate is credit worthy.",
        title: "Credit Risk",
        websiteLink: "https://github.com/Hemephelus/credit_risk_project",
      },
    ],

    p5js: [
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Stitch Patterns",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/IdztmqLpa",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Regression",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/sDJvDDwoN",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Force Directed Graph",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/x-hstG7BM",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Boid Simulation - Optimization",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/EGWOTmiAV",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Moving Colors Gird",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/thAWVpzRk",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Traveling Salesperson",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/4FTH3FoCe",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Regression OLS",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/UVrjhy08C",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Proximity Graphs.",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/bY5BE6UwO",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Ai X & O",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/Lb2j6SBiv",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Adjustable Fractal",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/Rs4GteFyd",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Quick Sort",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/-cwGB8kPC",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Quick Sort",
        websiteLink: "https://editor.p5js.org/nwachukwuujubuonu/full/Z0ti292o5",
      },
      {
        logoSrc: "/P5js.png",
        logoAlt: "P5js",
        subTitle: "",
        title: "Bubble Sort",
        websiteLink:
          "https://editor.p5js.org/nwachukwuujubuonu/full/4oJF8eIDsR",
      },
    ],
  },
  freelance: [
    {
      logoSrc: "/sppg/sppg.svg",
      logoAlt: "sppg",
      title: "SPPG Dashboard",
      subTitle:
        "A web-based dashboard that shows students status through out the academic program. (Full-Stack)",
      role: "Full-Stack Developer",
      projectLink: "/projects/sppg-dashboard",
      websiteLink: "https://thesppg.org/",
      //
      overview: [
        "The School of Politics, Policy, and Governance (SPPG), an institution training new political leaders, required a website that granted students access to their data. I built a platform that pulled information from their database, empowering students and administrators with key insights.",
      ],
      //
      problem: [
        "The database was Airtable, which had a lot of integrations and built-in automations. However, the team preferred to stay with Airtable rather than migrate to a more robust database. Additionally, the Airtable API limited requests to just five per second. Another challenge was that direct authentication to the table was not possible. Lastly, students checked their status at roughly the same time twice a day, creating a surge in requests.",
      ],
      //
      solution: [
        "Using Nextjs, I developed the front-end of the application. I made some improvements to the pre-existing UI designs making the app more user friendly.",
        "My initial solution to the Airtable rate limit was to add a simple Google Sheets layer to store Airtable data and use Apps Script to create API endpoints for the frontend. This approach worked during the demo stage, but after three months of deployment, over 50% of users could not see their data.",
        "To improve reliability, I used Apps Script as a cron job to fetch data from Airtable and update Firebase every hour. However, the architecture built around Google Sheets didn't translate well to Firebase—I kept hitting the 50,000 daily read quota. I redesigned the way the data was stored for a faster look up time.",

        "For authentication, I implemented an OTP system. Users enter their matriculation number, triggering an email containing a one-time password to the associated email address.",

      ],
      result: [
        " After making architectural improvements, I reduced the reads to fewer than 2,000 per day, ensuring a more stable solution. [See Last slide]",
      ],
      slide_imgs: [
        "/sppg/sppg-main-dashboard.jpg",
        "/sppg/sppg-g-attendance.jpg",
        "/sppg/sppg-g-makeup.jpg",
        "/sppg/sppg-g-status.jpg",
        "/sppg/sppg-g-assign.jpg",
        "/sppg/sppg-g-faq.jpg",
        "/sppg/sppg-before.jpg",
        "/sppg/sppg-after.jpg",
      ],
      tools: [
        { name: "Nextjs", src: "/tools/nextjs.png" },
        { name: "Tailwind", src: "/tools/tailwind.png" },
        { name: "React", src: "/tools/react.png" },
        { name: "Firebase", src: "/tools/firebase.png" },
        { name: "TypeScript", src: "/tools/typescript.png" },
        { name: "Airtable API", src: "/tools/airtable.png" },
        { name: "Apps Script", src: "/tools/apps-script.png" },
        { name: "Google Sheets", src: "/tools/google-sheets.png" },
      ],
    },
  ],
  work_experience: [
    {
      logoSrc: "/Infamy_Logo_Crown_Logo.png",
      logoAlt: "infamy",
      subTitle:
        "Built a dedicated website to provide a seamless experience for users to create their teams effortlessly, reducing friction in tournament sign-ups.",
      title: "Infamy Fantasy Esports",
      dateRange: "Apr 2022 - Present",
      role: "Technical Lead",
      projectLink: "/projects/infamy",
      websiteLink: "https://www.infamy.gg/",
      overview: [
        "Infamy is a premier fantasy esports Discord community dedicated to bringing competitive gaming fans together through tournaments and interactive events for Valorant, Rainbow Six Siege, and Overwatch 2. Their mission is to create an engaging and competitive space where players can showcase their skills and connect with like-minded gamers.",
      ],
      problem: [
        "Manual Tournament Management: Tournament data, including player stats, match results, and leaderboard updates, was managed manually through Google Sheets, which was time-consuming and prone to errors.",
        "Lack of Automation & User-Friendly Team Creation: The process of syncing tournament data between Discord and Google Sheets required manual intervention. Additionally, players had no streamlined way to create and manage their teams, leading to confusion and inefficiencies.",
      ],
      solution: [
        "Automated key tournament processes by integrating Google Apps Script with Google Sheets, reducing the need for manual data entry.",
        "Developed a custom Discord bot that connected directly to Google Sheets, allowing tournament organizers to fetch player stats, upload teams, and manage members' roles within Discord.",
        "Built a dedicated website to provide a seamless experience for users to create their teams effortlessly, reducing friction in tournament sign-ups.",
        "Implemented scheduled jobs to ensure tournament data remained up to date without manual intervention.",
        "Optimized data fetching to improve performance while staying within Google API limits.",
      ],
      result: [
        "Eliminated the need for manual data entry, improving efficiency.",
        "Reduced leaderboard update times from unpredictable to every 15mins.",
        "Enabled self-service team creation, reducing admin workload and improving the player experience.",
        "Scaled tournament operations, allowing for more participants without additional operational overhead.",
      ],
      slide_imgs: [
        "/infamy/home.jpg",
        "/infamy/tournaments.jpg",
        "/infamy/tournaments-leaderboard.jpg",
        "/infamy/roaster.jpg",
        "/infamy/overall-leaderboard.jpg",
        "/infamy/discord-bot.jpg",
      ],
      tools: [
        { name: "React", src: "/tools/react.png" },
        { name: "Supabase", src: "/tools/supabase.png" },
        { name: "Discord API", src: "/tools/discord.png" },
        { name: "JavaScript", src: "/tools/javascript.png" },
        { name: "Tailwind", src: "/tools/tailwind.png" },
        { name: "Apps Script", src: "/tools/apps-script.png" },
        { name: "Google Sheets", src: "/tools/google-sheets.png" },
      ],
    },
  ],
};
