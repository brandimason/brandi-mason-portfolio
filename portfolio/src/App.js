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
    <div>
      <NavBar />
      <div id="home" className="bg-gray-200 h-screen">
        <Home/>
      </div>

      <div id="about" className="bg-gray-200 h-screen">
        <h1>story</h1>
        <About/>
      </div>

      <div id="skills" className="bg-gray-200 h-screen">
        <h1>skills</h1>
        <Skills/>
      </div>

      <div id="projects" className="bg-gray-200 h-screen">
        <h1>projects</h1>
        <Projects/>
      </div>

      <div id="blogs" className="bg-gray-200 h-screen">
        <h1>blogs</h1>
        <Blogs/>
      </div>

      <div id="contact" className="bg-gray-200 h-screen">
        <h1>get to know me</h1>
        <GetToKnowMe/>
      </div>

      <div id="contact" className="bg-gray-200 h-screen">
        <h1>get in touch</h1>
        <Contact/>
      </div>


    </div>
  );
}

export default App;
