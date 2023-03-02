import React from "react";
import "../styles/About.css";

const About = () => {
    const first = (
        <p>
        Hello! My name is Armani and I love creating things.
        My interest in web development began back in my tumblr days
        and has grown since then.
        Currently I am attending Code the Dream school and learning React.
        </p>
    );

    const second = (
        <p>Outside of learning, I love attending conventions with my family. I also enjoy my
            fair share of video games and books.
        </p>
    );

    const techStack = [
        "Javascript",
        "React.js",
        "Node.js",
        "Express",
        "HTML & CSS"
      ];

    // const {tech_item} = techStack.map(stack => <li>{stack}</li>);
    
    return (
      <div id="about">
          <div className="section-header">
            <span className="section-title"> about me </span>
          </div>
          <div className="about-container">
            <div className="about-description">
              {[first]}
              {"I have worked with:"}
              <ul className="tech-stack">
                {techStack.map(function (tech_item, i) {
                  return (
                      <li>{tech_item}</li>
                  );
                })}
              </ul>
              {[second]}
            </div>
            <div className="about-image">
            <img src="https://live.staticflickr.com/65535/52707022798_4c065bd00c_o.jpg" width="320" height="438" alt="Untitled design - 1"></img><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            </div>
          </div>
      </div>
    );
  }


export default About;