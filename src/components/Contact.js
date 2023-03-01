import React from "react";
import "../styles/Contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";

const Contact = () => {
    return(
        <div id="contact">
            <span className="section-title-con">contact</span>
            <div className="contact-sub">
                <h2 className="contact-sub">Drop a line!<br></br>
                tell me about your project</h2>
            </div>
            <div className="link-container-two">
            <div className="link-desc">
                <ul className="icons-container">
                    <li className="list-link">
                        {<AiFillGithub size={60}/>}
                        github
                        <a  href="https://github.com/Armanchi" className="contact-links hover-underline-animation">open</a>
                    </li>
                    <li className="list-link">
                        {<AiOutlineLinkedin size={60}/>}
                        linkedin
                        <a  href="https://www.linkedin.com/in/armani-johnson-337945221/" className="contact-links hover-underline-animation">open</a>
                        </li>
                    <li className="list-link">
                        {<RxEnvelopeClosed size={60}/>}
                        email
                        <a href = "mailto:armanijohnson0104@gmail.com" className="contact-links hover-underline-animation">
                            open</a>
                        </li>
                </ul>
                <div>
                </div>
            </div>
            
            </div>
        </div>

    )
}



export default Contact;