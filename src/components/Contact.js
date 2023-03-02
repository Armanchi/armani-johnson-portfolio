import React from "react";
import "../styles/Contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoOpenOutline } from "react-icons/io5";


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
                        {<AiOutlineLinkedin size={60}/>}
                        linkedin
                        <button className="link-button">{<IoOpenOutline className="icon" size={12}/>} <a  href="https://github.com/Armanchi" className="contact-links">open</a></button>
                    </li>
                    <li className="list-link">
                        {<AiFillGithub size={60}/>}
                        github
                        <button className="link-button">{<IoOpenOutline size={12}/>} <a  href="https://github.com/Armanchi" className="contact-links">open</a></button>
                    </li>

                    <li className="list-link">
                        {<RxEnvelopeClosed size={60}/>}
                        email
                        <button className="link-button">{<IoOpenOutline size={12}/>}<a href = "mailto:armanijohnson0104@gmail.com" className="contact-links">
                            open</a></button>
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