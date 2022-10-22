import React from 'react';
import { Link } from 'react-router-dom';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import '../CSS/Footer.css';

export default function Footer() {
  return (
    <div>
        <footer className='FAll'>
        <h5 style={{color: 'white', justifyContent: 'flex-start', marginLeft:'30px'}}>© Developed, Santiago Campos Snels</h5>
            <div className='Simb'>
        <a href='https://github.com/SantiCam123' target="blank"><BsGithub size={'50px'} style={{marginRight: '30px', color: 'white'}} /></a>
        <a href='https://www.linkedin.com/in/santiago-campos-snels-0919b022b/' target="blank"><BsLinkedin size={'50px'} style={{marginRight: '40px', color: 'white'}} /></a>
            </div>
        </footer>
    </div>
  )
}
