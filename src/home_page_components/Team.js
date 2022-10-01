import React from "react"
import data from "../assets/csvjson"
import Tilt from 'react-parallax-tilt';

export default function Team() {

    const team = data.map(item => {
        return (

            <div className="about_team">
                <Tilt>
                    <img src={item.PICTURE} className="profile_img" alt="img" />
                </Tilt>
                <h3>{item.NAME} </h3><span className="text-lg">+{item.DOMAIN}</span>
                <hr />
                <p className="team_des">{item.Description}</p>
                <div class="icon">
                    <a id="aa" href={item.INSTAGRAM} target="_blank"><i class="fa-brands fa-instagram fa-2x"></i></a>
                    <a id="aa" href={item.GITHUB} target="_blank"><i class="fa-brands fa-github fa-2x"></i></a>
                    <a id="aa" href={item.LINKEDIN} target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                </div>
            </div>
        )
    })

    return (
        <section className="team_section" id="team">
            <div className="left_team_section">
                <div className="left_section_title">
                    <p className="left_section_title1">Meet our </p>
                    <p className="left_section_title2">people</p>
                    <p className="p">We are a diverse team of domain experts and problem solver</p>

                </div>
            </div>
            <div className="right_team_section">

                {team}
            </div>
        </section>
    )
}