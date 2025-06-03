import projectfair1 from '../assets/projectFair1.png'
import projectfair2 from '../assets/projectFair2.png'
import projectfair3 from '../assets/projectFair3.png'
import media from '../assets/media.png'
import mediaplayer from '../assets/mediaplayer.png'
import mediaplayer1 from '../assets/mediaplayer1.png'
import cook1 from '../assets/cook1.png'
import cook2 from '../assets/cook2.png'
import cook3 from '../assets/cook3.png'
import ecart1 from '../assets/ecart1.png'
import ecart2 from '../assets/ecart2.png'
import ecart3 from '../assets/ecart3.png'



const projects = [
    { 
    id: 1, 
    name: 'Cook Pedia', 
    image:[cook1,cook2,cook3],
    description: 'A full-stack recipe web application featuring both user and admin modules.',
    skills: ['Angular', 'Node.js','Express.js', 'MongoDB','TypeScript',  'JWT','MaterialUI', 'HTML', 'CSS', 'React Router','Bootstrap'],
    live: 'https://cookpedia-frontend-o8km.vercel.app/',
    github: 'https://github.com/Shhreyaaa/cookpedia-frontend',
    imageHome: cook1,
    expandedDescription: 'A full-stack recipe web application with distinct User and Admin modules, offering a complete and interactive cooking experience. Users can search and filter recipes based on meal type and cuisine, view detailed recipe steps and ingredients, and have the option to save or download their favorite recipes. Users can also add testimonials and personalize their experience. The Admin panel provides full control over content and user management, allowing recipe CRUD operations, user listing and deletion, and feedback moderation (approve/reject/delete). A visual bar chart presents insights on cuisines vs. download counts for better decision-making.',
    features:[
    'Search and filter recipes',
    'Save and download recipe options',
    'User login, registration, and testimonials',
    'Admin panel with full recipe and user management',
    'Feedback approval, rejection, and deletion',
    'Bar chart showing cuisine-wise downloads'
  ]

  },
  
  { 
    id: 2, 
    name: 'Media Player', 
    image:[mediaplayer,media,mediaplayer1],
    description: 'A React-based media player for uploading, organizing, and watching videos.',
    skills: ['React.js','Node.js','Express.js', 'JSON Server', 'HTML', 'CSS', 'JavaScript', 'React Router', 'Bootstrap'],
    live: 'https://media-player-nine-steel.vercel.app/',
    github: 'https://github.com/Shhreyaaa/Media-Player',
    imageHome: mediaplayer,
    expandedDescription: 'A lightweight media management platform built using React and JSON Server that allows users to upload, categorize, and watch videos.Users can perform CRUD operations on videos, organize them using a drag-and-drop interface into custom categories, and revisit their watch history. Designed with a focus on UI interactivity and responsiveness, the app offers an intuitive media experience for users looking to manage personal video libraries.',
    features: [
    'Upload, edit, and delete videos',
    'Categorize videos via drag-and-drop',
    'Track and display watch history',
    'Responsive and clean UI for smooth user experience'
  ]
  },
  { 
    id: 3, 
    name: 'Project Fair', 
    image:[projectfair1,projectfair2,projectfair3],
    description: 'A project platform for developers to showcase and browse projects.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap', 'JWT', 'Mongoose','HTML','CSS', 'JavaScript', 'React Router','MaterialUI','Redux'],
    live: 'https://project-fair-o5hn.vercel.app/',
    github: 'https://github.com/Shhreyaaa/ProjectFair',
    imageHome: projectfair1,
    expandedDescription:'A full-stack web platform for developers to showcase and discover tech projects, built using the MERN stack. Users can create a profile, add/edit/delete their projects, and view projects submitted by others. Projects can be searched based on the programming language used, enhancing discoverability. The profile section allows users to manage their presence and update project info dynamically.',
    features: [
    'Add, edit, and delete projects',
    'Browse and explore all user projects',
    'Search functionality by programming language',
    'User profile creation and project management'
  ]
  },

  {
    id: 4, 
    name: 'E cart', 
    description: 'A simple e-commerce app built using React and JSON Server.',
    skills: ['React.js', 'Node.js', 'JSON Server', 'HTML', 'CSS', 'JavaScript', 'React Router', 'Bootstrap'],
    live: 'https://ecart-94vs.vercel.app/',
    github: 'https://github.com/Shhreyaaa/ecart',
    image:[ecart1,ecart2,ecart3],
    imageHome:ecart1,
    expandedDescription: 'A simple e-commerce application built with React and JSON Server, providing a user-friendly interface for browsing products, managing a shopping cart, and maintaining a wishlist. Users can search for products by keyword, add or remove items from their cart, and manage their wishlist with add/remove options. The app features React-based state handling for a clean and responsive UI.',
    features: [
    'Search products by keyword',
    'Add and remove items from the cart',
    'Manage wishlist with add/remove options',
    'React-based state handling with clean UI'
  ]
  }
];

export default projects;
