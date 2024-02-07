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
        <div>
          <div id="home" className="bg-gray-200 h-screen">
            <Home/>
          </div>

          <div id="about" className="bg-gray-200 h-screen">
            <h1>story</h1>
            <About/>
          </div>

          {/* <div id="skills" className="bg-gray-200 h-48">
            <h1>skills</h1>
            <Skills/>
          </div> */}
          <Skills/>

          <div id="projects" className="bg-gray-200 h-screen">
            <h1>projects</h1>
            <Projects/>
          </div>

          <div id="blogs" className="bg-gray-200 h-screen">
            <h1>blogs</h1>
            <Blogs/>
          </div>

          <div id="contact" className="bg-gray-200 h-96">
            <GetToKnowMe/>
          </div>

          <div id="contact">
            <Contact/>
          </div>
        </div>
    </div>
  );
}

export default App;
