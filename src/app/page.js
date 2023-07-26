import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import {PersonCard} from "@/components/card/person-card";
// import Tilt from 'react-parallax-tilt';

const ServerTilt = ({children}) => {
    if (typeof window === undefined || 1 === 1) {
        return <div>{children}</div>
    }

    return <div>{children}</div>

    // return <Tilt>{children}</Tilt>
}

export default function Home() {
    return (
        <main>
            <header>
                <a href="#" className="logo">Selah Vie</a>
                <ul>
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#merch">Merch</a></li>
                    <li><a href="https://linktr.ee/selahvie">Stream</a></li>
                </ul>
            </header>

            <section className="main-section">
                <img src="scene/stars.png" id="stars"/>
                <img src="scene/moon.png" id="moon"/>
                <img src="selahvie-cutouts/sitting-best.png" id="behind"/>
                <h2 id="text">Greatest Hits</h2>
                <a href="#sec" id="btn">Buy</a>
                <span style={{width: 16,}}/>
                <a href="https://linktr.ee/selahvie" id="btn">Stream</a>
                <img src="selahvie-cutouts/mountains_front-4.png" id="mountains_front"/>
            </section>

            <section className="merch" id="merch">
                <h1>MERCH</h1>
                <h3>coming soon..</h3>
                <img src="clothes/tshirt.png" className="card" id="t-shirt"/>
                <img src="clothes/socks.png" className="card" id="socks"/>
                <img src="clothes/hoodie.png" className="card" id="hoodie"/>
            </section>

            <section className="card-section" id="about">
                <div className="sec" id="sec">
                    <h2 id="text">About us</h2>
                    <div className="container">
                        <PersonCard img="selahvie-cutouts/joni.png"
                                    id="joni"
                                    number="01"
                                    name="Petrőcz Jonatán"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                        <PersonCard img="selahvie-cutouts/rafi_stil.png"
                                    id="rafi"
                                    number="02"
                                    name="Dobránszky Rafael"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                        <PersonCard img="selahvie-cutouts/nono.png"
                                    id="nono"
                                    number="03"
                                    name="Horváth Noémi"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                        <PersonCard img="selahvie-cutouts/levi.png"
                                    id="levi"
                                    number="04"
                                    name="Kassai Levente"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                        <PersonCard img="selahvie-cutouts/izsak.png"
                                    id="izsak"
                                    number="05"
                                    name="Semsei Izsák"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                        <PersonCard img="selahvie-cutouts/beni.png"
                                    id="beni"
                                    number="06"
                                    name="Harmath Beni"
                                    description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
                                        amet consectetur
                                        adipisicing elit."/>
                    </div>
                </div>
            </section>

            <footer><p>made by Semsei Izsák©</p></footer>

        </main>
    )
}
