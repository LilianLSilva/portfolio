import React from 'react';
import MyImage from "../../media/myImage.jpeg";
import "./About.css";


const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Let me tell you something about me</h3>
                <p>I have been working as a developer since the second year of the Computer Engineering degree from which I received in 2019, I have learned to develop in PHP, with Mysql, Laravel, also with some Javascript, I would like to have the opportunity to learn new technologies that help me grow as a developer.</p>
            </div>
            <div className='about-img'>
                <img src={MyImage} alt="about"/>
            </div>
        </div>
    )
}

export default About
