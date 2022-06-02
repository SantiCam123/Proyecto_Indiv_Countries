import React from "react";
import '../CSS/Card.css'

export default function Cards({name, image, continent}){
    return (
        <div className="card">
            <img src={image} alt='Img not found' width='400px' height='250px' />
            <div className="text">
            <h3>{name}</h3>
            <h5>{continent}</h5>
            </div>
        </div>
    )
}


