# Traveller Choice website
##### 
> At Travellers Choice, we believe that travel has the power to transform lives, broaden horizons, and create lasting memories. Our mission is to make the world accessible to everyone by offering a seamless, personalized travel experience tailored to your unique preferences and budget.

*With a team of passionate travel experts, we curate a diverse selection of destinations, accommodations, and activities to suit every type of traveler. From exotic beach getaways to cultural immersions and outdoor adventures, we'll help you discover the perfect trip for you.*

*Travellers Choice is more than just a booking platform - it's a community of like-minded explorers who share a love for adventure and a thirst for new experiences. Join us as we embark on a journey to unlock the world's wonders, one trip at a time.*

# Contributing
We welcome contributions from the community to help improve and expand the Travellers Choice platform. If you're interested in contributing, please follow these steps:
* Fork the repository
* Create a new branch for your feature or bug fix
* Make your changes and test them thoroughly
* Submit a pull request with a detailed description of your changes

## Contact Us
If you have any questions, feedback, or concerns, please don't hesitate to reach out to us:
* Email: support@travellerschoice.com

* Twitter: @TravellersChoice

* Facebook: Travellers Choice

#### We're here to help and ensure you have an amazing travel experience.
License
Travellers Choice is licensed under the MIT License.

# Tools and Technologies
Travellers Choice was built using the following tools and technologies:

## Front-end
* React: A JavaScript library for building user interfaces. Travellers Choice utilizes React's component-based architecture and state management capabilities to create a dynamic and responsive user experience.
* Tailwind CSS: A utility-first CSS framework that provides a set of pre-defined classes for rapid UI development. Tailwind CSS allows for efficient and consistent styling across the application.
## Back-end
* Supabase: An open-source alternative to Firebase, Supabase provides a complete backend solution, including a PostgreSQL database, authentication, and real-time subscriptions. Travellers Choice uses Supabase to handle data storage, user management, and real-time updates.
## Language
* JavaScript: The primary programming language used for both the front-end and back-end components of Travellers Choice. JavaScript powers the interactive features, API integrations, and overall functionality of the application.
Other Tools
## Git: A distributed version control system used for tracking changes in the codebase and collaborating with the development team.
* GitHub: A web-based hosting service for version control using Git. The Travellers Choice project is hosted on GitHub, allowing for easy collaboration, issue tracking, and deployment.
* Visual Studio Code: A popular code editor used by the development team, providing a feature-rich environment for writing, debugging, and managing the codebase.
* npm (Node.js Package Manager): The default package manager for the JavaScript runtime environment, Node.js. Travellers Choice utilizes npm to manage and install project dependencies.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## using vite

npm create vite@latest

## to start a local host

npm install
npm run dev

## react router dom 
### always need this!
npm install react-router-dom



# for icons im using react icons

npm install react-icons --save

## please important temi

## to use aos in react

we need to follow this major steps

## install the package

npm install --save aos@next

## to initialize AOS

import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

## next add it to your react export default function

useEffect(() => {
AOS.init();
}, [])
