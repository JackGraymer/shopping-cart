import React from "react";
import './components.css'
import github from "./github.png"

const Contact = () => {
    return(
        <div className="contact">
            <div className="title ">
                <h1> Contact Us</h1>
                <h2> We welcome your feedback, comments, and questions. <br/> Please feel free to contact us using the links below, and we'll get back to you as soon as possible.</h2>
                <h3> This company has a simple goal, to make all your tech needs available. <br/>
                <hr></hr>
                </h3>
            </div>     
            <div className="contact-links">
                <div className="links">
                     <a className="git" href="https://github.com/JackGraymer" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${github})`}}> </a>
                     <p> Send us a <a href='mailto:fakemail@example.com' style={{textDecoration:'underline'}}>Fake email</a></p> 
                     <p>Call headquarters at <a href="tel:1112223344">111-222-3344</a>.</p>
                </div>
            </div>               
        </div>
                
    )
}

export default Contact