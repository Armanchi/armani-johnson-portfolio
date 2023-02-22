import React from "react";
import "./shared/globalStyles.css"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div>
      <Intro />
      <About />
      {/* <About />
      <Experience />
      <Projects />
      <Contact /> 
       */}
      </div>
      <Navbar />
    </div>
  );
}

export default App;
