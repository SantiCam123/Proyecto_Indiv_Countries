import React from "react";
import {Link} from 'react-router-dom';
import '../CSS/LandingPage.css';

export default function LandingPage(){
    return(
        <div class='fondo'>
            <Link to='/home'>
            <h1 className="welcome">Welcome to Henry´s travel</h1>
            </Link>
        </div>
    )
}


