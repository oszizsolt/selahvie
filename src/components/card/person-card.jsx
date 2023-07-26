'use client'

import React from "react";
import Tilt from 'react-parallax-tilt';

export const PersonCard = (props) => {
    return <Tilt style={{
        transformStyle: "preserve-3d",
    }} perspective={500}>
        <div className="card">
            <img src={props.img} id={props.id}/>
            <div className="content" style={{
                transform: "translateZ(60px)",
                transformStyle: "preserve-3d",
            }}>
                <h2>{props.number}</h2>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <a href="#">Read more</a>
            </div>
        </div>
    </Tilt>
}
