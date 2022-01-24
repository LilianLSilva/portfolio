import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Lilian Leonor Silva</h1>
        <p>Backend Developer | PHP</p>
    </div>
    );
};

export default Cover
