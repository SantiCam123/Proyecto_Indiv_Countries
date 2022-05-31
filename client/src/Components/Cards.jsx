import React from "react";

export default function Cards({name, image, continent}){
    return (
        <div>
            <img src={image} alt='Img not found' />
            <h3>{name}</h3>
            <h5>{continent}</h5>
        </div>
    )
}