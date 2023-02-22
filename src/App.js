import React from "react";
import "./shared/globalStyles.css"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
      <Intro />
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
