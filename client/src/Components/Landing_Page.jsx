import React from "react";
import {Link} from 'react-router-dom';
import '../CSS/LandingPage.css';

export default function LandingPage(){
    return(
        <div class='fondo'>
            <h1>Welcome to Henry´s travel</h1>
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}


