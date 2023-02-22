import React from "react";
import "../styles/Intro.css";
import Typewriter from "typewriter-effect";

const Intro = () => {
    return(
        <div id="intro">
        <div className="main-container">
        <div className="typewriter">
        <Typewriter onInit={(typewriter)=> {typewriter
        .typeString("Hi, I'm Armani.")
        .pauseFor(1000)
        .start();
        }}
        />
        </div>
        <h2 className="subTitle">I build things online.</h2>
        <div className="intro-desc">
            <p>I'm a software developer based in Houston, Tx.
                I'm interested in any type of development that requires 
                creativity and critical thinking.
            </p>
        </div>
        </div>
        </div>
    )
}

export default Intro;