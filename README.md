# Traveller Choice website
##### 
> At Travellers Choice, we believe that travel has the power to transform lives, broaden horizons, and create lasting memories. Our mission is to make the world accessible to everyone by offering a seamless, personalized travel experience tailored to your unique preferences and budget.

*With a team of passionate travel experts, we curate a diverse selection of destinations, accommodations, and activities to suit every type of traveler. From exotic beach getaways to cultural immersions and outdoor adventures, we'll help you discover the perfect trip for you.*

*Travellers Choice is more than just a booking platform - it's a community of like-minded explorers who share a love for adventure and a thirst for new experiences. Join us as we embark on a journey to unlock the world's wonders, one trip at a time.*



## Tools used in this site

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
