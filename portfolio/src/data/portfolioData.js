export const data = {
  personalInfo: {
    name: "Pramod Aryal",
    titles: ["Developer", "Researcher", "Freelancer", "AI/ML Enthusiast"],
    location: "Based in Busan, South Korea (from Nepal)",
    email: "workemail.pramod@gmail.com",
    phone: "+977 9816069759",
    linkedin: "https://www.linkedin.com/in/pramod58",
    github: "https://github.com/Pramod058",
    whatsapp: "https://wa.me/9779816069759",
    profilePicture: "assets/profile.png", // Add a square image named profile.png to your /public folder
  },
  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "C++", "C"],
    libraries: [
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
      "Geopandas",
      "Sklearn",
      "Streamlit",
    ],
    frameworks: ["React.js", "NestJS", "Django"],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Docker",
      "PostgreSQL",
      "Supabase",
      "Trello",
    ],
  },
  experience: [
    {
      role: "Data Specialist",
      company: "Cloudfactory Nepal",
      period: "Present",
      responsibilities: [
        "Performed image and video annotation for machine learning models.",
        "Conducted data cleaning, validation, and classification tasks.",
        "Ensured data quality through rigorous assurance and control processes.",
        "Assumed team leadership responsibilities on various projects.",
      ],
    },
    {
      role: "Remote Intern",
      company: "NobelHub",
      period: "Previous",
      responsibilities: [
        "Developed leadership and public speaking skills through active participation.",
        "Facilitated multiple courses and training sessions.",
        "Pitched business ideas in a collaborative, mass-audience setting.",
      ],
    },
  ],
  projects: [
    {
      title: "ML Dashboard with Streamlit",
      description:
        "Developed a comprehensive dashboard for data collection, cleaning, exploration, model training, and prediction. Features a basic NLP sentiment analysis tool.",
      techStack: ["Streamlit", "Python", "Pandas", "Scikit-learn"],
      githubLink:
        "https://github.com/Pramod058/Machine-Learning---Dashboard-development-with-Streamlit",
      siteLink:
        "https://pramod058-machine-learning-dashboard-development-w-app-vwm9p7.streamlit.app/",
    },
    {
      title: "Boston Housing Price Prediction",
      description:
        "Utilized Kaggle datasets to predict housing prices in Boston using various machine learning models within a Jupyter Notebook environment.",
      techStack: ["Python", "Jupyter", "Pandas", "Scikit-learn"],
      githubLink:
        "https://github.com/Pramod058/Machine-Learning--Boston-Housing-Prediction",
      siteLink: null,
    },
    {
      title: "GIS Data Science for Climate in Nepal",
      description:
        "Leveraged the Geopandas library to evaluate and visualize spatial (Raster, vector) data, plotting climate-related outcomes for Nepal.",
      techStack: ["Python", "Geopandas", "Jupyter"],
      githubLink:
        "https://github.com/Pramod058/GIS-Data-Science-for-Climate-in-Nepal",
      siteLink: null,
    },
    {
      title: "Stress Tracker Application - Joyous",
      description:
        "A group project for a client enabling users to track daily stress levels, view charts, and access guided meditation and journaling features.",
      techStack: ["React.js", "JavaScript"],
      githubLink:
        "https://github.com/Pramod058/Stress-Tracker-Application--Joyous",
      siteLink: null,
    },
  ],
  certifications: [
    {
      title: "AI for Everyone",
      issuer: "Coursera",
      status: "Issued: June 2020",
      image: "/assets/certificates/ai_for_everyone.jpg",
    },
    {
      title: "Computer Networks: Bits and Bytes",
      issuer: "Coursera",
      status: "Issued: Date", // Add date
      image: "/assets/certificates/cn_bits_and_bytes.jpg",
    },
    {
      title: "Programming for Everybody (Python)",
      issuer: "Coursera",
      status: "Issued: July 2020",
      image: "/assets/certificates/prog_for_everybody.jpg",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      status: "Issued: Aug 2020",
      image: "/assets/certificates/python_for_everybody.jpg",
    },
    {
      title: "Technical Support Fundamentals",
      issuer: "Coursera",
      status: "Issued: Date", // Add date
      image: "/assets/certificates/tech_support_fundamental.jpg",
    },
  ],
};
