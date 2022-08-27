import React from "react";
import './footer.css'

import linkedin from './img/linkedin.png';
import github from './img/github.png';

function footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/pelipe-gaiek-da-costa-sampaio-5a47191b2/">
                <img src={linkedin} />
            </a>
            <p>Developed by Gaiek da costa</p>
            <a href="https://github.com/gaiekdacosta">
                <img src={github} />
            </a>
        </div>
    )
}

export default footer;
