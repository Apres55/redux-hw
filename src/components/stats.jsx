import React from "react";
import '../App.css'
import heart from '../footersvg/heart.svg';
import refresh from '../footersvg/refresh.svg';
import speech from '../footersvg/speech-bubble.svg';
import upload from '../footersvg/upload.svg';


const Stats = () => {
    let random = getRandomInt(422);
    let randomTwo = getRandomInt(222);
    let randomLike = getRandomInt(322);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const [value, setValue] = React.useState(random);
    const [valueTwo, setValueTwo] = React.useState(randomTwo);
    const [valueThree, setValueThree] = React.useState(randomLike);
    return(
    <div className='postFooter'>
        <button onClick={() => setValue((prev) => prev +1)}><img src={speech} className="footer-logo" alt="logo" /><p>{value}</p></button>
        <button onClick={() => setValueTwo((prev) => prev +1)}><img src={refresh} className="footer-logo" alt="logo" /><b>{valueTwo}</b></button>
        <button onClick={() => setValueThree((prev) => prev +1)}><img src={heart} className="footer-logo" alt="logo" /><b>{valueThree}</b></button>
        <button><img src={upload} className="footer-logo" alt="logo" /></button>
    </div>)
}

export default Stats