import React from "react";
import "./shared/globalStyles.css"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from  "./components/Projects"

function App() {
  return (
    <div className="App">
      <div>
      <Intro />
      <About />
      <Projects />
      {/* <Experience />
      <Contact />  */}
      </div>
      <Navbar />
    </div>
  );
}

export default App;
