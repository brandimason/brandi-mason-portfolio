import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import GetToKnowMe from "./components/GetToKnowMe";

function App() {
  return (
    <div className="content-center">
      <NavBar />

      <Home/>
    
      <About/>
    
      <Skills/>

      <Projects />
    
      <Blogs/>

      <GetToKnowMe />
    
      <Contact/>
    </div>
  );
}

export default App;
