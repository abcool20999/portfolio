import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ProjectCard } from './components/ProjectCard';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <NavBar />
      <Hero />
      <Skills />
      <Project />
      <ProjectCard />
      <Contact />
      <Footer />
      </div>
    </>
  );
}

export default App;

