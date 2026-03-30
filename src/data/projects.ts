interface Project {
  id: number;
  name: string;
  summary: string;
  type: string;
  isHighlighted: boolean;
  photos: string[];
  detailedInfo: string;
  techStack: string[];
  capabilities: string[];
  codeUrl?: string;
  websiteUrl?: string;
}
export const PROJECT_LIST = [
 {
    "id": 1,
    "name": "Smart Jewelry Finder AI-Powered",
    "summary": "Awarded 'Best Intern Project' at PT UBS, this system utilizes CLIP (ViT-L-14) to identify jewelry products through image similarity, eliminating the need for physical barcodes.",
    "type": "Machine Learning & Full Stack AI",
    "isHighlighted": true,
    "photos": ["ab.png", "abc.png", "bc.png"],
    "detailedInfo": "Developed a high-performance Content-Based Image Retrieval (CBIR) system for PT Untung Bersama Sejahtera (UBS). The project addresses the challenge of identifying jewelry items (rings, necklaces, earrings) when physical labels are missing. By fine-tuning the CLIP ViT-L-14 architecture using Transfer Learning, the system maps visual features into a vector space, allowing for instant SKU identification through image uploads with high Top-K retrieval accuracy.",
    "techStack": ["Python", "PyTorch", "CLIP", "Streamlit", "Selenium", "Hugging Face"],
    "capabilities": [
        "Fine-Tuning Vision Transformers",
        "Automated Web Scraping",
        "Vector Embedding Indexing",
        "Content-Based Image Retrieval (CBIR)",
        "Real-time Model Deployment",
        "Accuracy Evaluation (mAP, Precision@K)"
    ],
    },
      {
      id: 2,
      name: "HSBC Data Analysis",
      summary: "Data pipeline and dashboard automation project at HSBC, transforming raw datasets into business-ready insights using BigQuery, Python, JupyterHub, and Qlik Sense",
      type: "Data Analyst",
      isHighlighted: true,
      photos: ["t.png", "u.png", "v.png"],
      detailedInfo: "Streamlined data processing by integrating datasets collected from online/offline forms in Excel into the Data Science Workbench. Data was extracted and processed with BigQuery, analyzed using Python in JupyterHub, and transformed into interactive dashboards with Qlik Sense to support business insights and decision-making.",
      techStack: ["Excel", "BigQuery", "Python", "JupyterHub", "Qlik Sense"],
      capabilities: ["Data Pipeline Automation", "ETL Process", "Interactive Dashboards"],
    },
    {
      id: 3,
      name: "Cinema Express",
      summary: "Full-stack cinema web application with Express.js backend and Vue.js frontend, featuring complete CRUD operations for movie management and seat booking systems",
      type: "Web Application",
      isHighlighted: true,
      photos: ["a.png", "b.png", "c.png", "d.png"],
      detailedInfo: "Cinema Express is a full-stack web application designed to streamline cinema operations and enhance customer booking experiences. The application demonstrates advanced CRUD operations through a sophisticated Express.js backend API paired with a responsive Vue.js frontend, creating a seamless platform for managing movie schedules, seat reservations, and customer interactions.",
      techStack: ["Express.js", "Vue.js", "MySQL", "Bootstrap", "Node.js"],
      capabilities: ["Movie Management", "Seat Booking System", "User Authentication", "Admin Dashboard", "Real-time Updates"],
      codeUrl: "https://github.com/yyasminputri/Express-Vue-Web"
    },
    {
      id: 4,
      name: "Indonesia Poverty Classification ML Model",
      summary: "Machine learning research project analyzing poverty levels in Indonesia using Random Forest, SVM, KNN, and Neural Networks for socioeconomic data classification",
      type: "Machine Learning",
      isHighlighted: true,
      photos: ["e.png", "f.png", "g.png"],
      detailedInfo: "This comprehensive machine learning project addresses one of Indonesia's most pressing socioeconomic challenges through data-driven analysis and predictive modeling. By implementing and comparing four distinct algorithms - Random Forest, Support Vector Machine, K-Nearest Neighbors, and Artificial Neural Networks - the project provides robust classification of poverty levels based on comprehensive socioeconomic datasets from across Indonesian provinces and districts.",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Google Colab", "Machine Learning"],
      capabilities: ["Multi-Algorithm Comparison", "Data Preprocessing", "Statistical Analysis", "Model Evaluation", "Data Visualization"],
      codeUrl: "https://colab.research.google.com/drive/1ohMWi8uA_1bCaxNOGSFeSCyBAGTuHynv?usp=sharing#scrollTo=jlqMIDWBEaZw"
    },
    {
      id: 5,
      name: "ILBI Innovation Center Website",
      summary: "Official institutional website for ITS Innovation and Business Incubator featuring startup programs, entrepreneurship resources, and business development services",
      type: "Web Development",
      isHighlighted: true,
      photos: ["h.png", "i.png", "j.png", "k.png"],
      detailedInfo: "The ILBI Innovation Center Website serves as the digital gateway to Institut Teknologi Sepuluh Nopember's premier startup ecosystem and entrepreneurship hub. This professionally crafted institutional website provides comprehensive information about incubation programs, mentorship opportunities, funding resources, and success stories that inspire and guide the next generation of Indonesian entrepreneurs and innovators.",
      techStack: ["WordPress", "Figma", "UI/UX Design"],
      capabilities: ["Content Management", "Program Information", "Application Forms", "News & Events", "Responsive UI"],
      websiteUrl: "https://www.its.ac.id/stp/inkubator/",
    },
     {
      id: 6,
      name: "Powerpuff Recipe",
      summary: "Full-stack recipe web application built with Next.js featuring server-side rendering and dynamic routing for optimal performance and user experience",
      type: "Full Stack Development",
      isHighlighted: true,
      photos: ["2.png", "3.png", "4.png", "5.png"],
      detailedInfo: "Powerpuff Recipe is a full-stack web application designed to revolutionize how people discover, share, and manage cooking recipes. Built with Next.js for optimal performance and SEO, it features server-side rendering for faster load times and dynamic routing for seamless navigation between recipe categories and individual recipes.",
      techStack: ["Next.js", "React", "JavaScript", "Tailwind CSS", "Vercel"],
      capabilities: ["CRUD Operations", "Database Integration", "Frontend-Backend Integration", "Recipe Management", "Search & Filter", "Bookmarking/Save to Favorites"],
      codeUrl: "https://github.com/yyasminputri/NextJS-React-Application"
    },
    {
      id: 7,
      name: "Starbucks Mobile App Redesign",
      summary: "A thoughtful redesign of the Starbucks mobile application experience",
      type: "UI/UX Design",
      isHighlighted: false,
      photos: ["s.png", "o.png", "p.png", "r.png"],
      detailedInfo: "A complete redesign of the Starbucks mobile application focusing on improved user experience, modern design principles, and enhanced functionality. Features intuitive navigation, updated visual design, and optimized user flows for ordering and rewards.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Modern UI Design", "Improved UX Flow", "Membership", "Mobile Optimization", "Interactive Prototyping"],
      codeUrl: "https://github.com/yyasminputri/Redesign-Starbucks"
    },
    {
      id: 8,
      name: "Glowin Beauty App",
      summary: "A comprehensive beauty and wellness mobile application for skincare enthusiasts",
      type: "Mobile Application",
      isHighlighted: false,
      photos: ["z.png", "w.png", "x.png", "y.png"],
      detailedInfo: "Glowin is a beauty and wellness application designed to help users track their skincare routines, discover new products, and maintain healthy beauty habits with personalized recommendations and progress tracking.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Skincare Tracking", "Product Discovery", "Personal Recommendations", "Membership", "Bookmarking/Save to Favorites"],
      codeUrl: "https://github.com/yyasminputri/GlowinApplication"
    },
    {
      id: 9,
      name: "Animal Crossing 3D Interactive Scene",
      summary: "An immersive 3D web experience inspired by the beloved Animal Crossing universe",
      type: "Game Development",
      isHighlighted: false,
      photos: ["l.png", "m.png", "n.png"],
      detailedInfo: "An immersive 3D scene inspired by the popular Animal Crossing game series. Built using Three.js to create interactive graphics and environment design directly in the browser, featuring detailed 3D models and atmospheric lighting.",
      techStack: ["Three.js", "JavaScript", "WebGL", "HTML5 Canvas", "GLSL Shaders"],
      capabilities: ["3D Environment Rendering", "Interactive Graphics", "Real-time Lighting", "Browser-based Gaming", "Responsive Controls"],
      codeUrl: "https://github.com/yyasminputri/Animal-Crossing-ThreeJS"
    },
   {
      id: 10,
      name: "Tastory",
      summary: "Modern Android recipe app built with Jetpack Compose, designed for exploring visual cooking guides with native performance and beautiful Material Design 3 interface",
      type: "Mobile Application",
      isHighlighted: false,
      photos: ["9.png", "6.png", "7.png", "8.png"],
      detailedInfo: "A recipe application built with Android Jetpack Compose that allows users to browse, save, and read visual cooking guides. Designed for mobile-first experience with intuitive navigation.",
      techStack: ["Kotlin", "Jetpack Compose", "Android SDK", "Android Studio"],
      capabilities: ["Visual Recipe Guides", "Interactive Cooking Guides", "Search & Filter"],
      codeUrl: "https://github.com/yyasminputri/Recipe-Application"
    },
  ];