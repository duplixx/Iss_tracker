import React from "react"
import { BiRocket } from "react-icons/bi"

export default function Footer() {
    return (
        <div className="footer_section">

            <div className="footer_col_1">
                <div className="col1_title_section">

                    <h1 className="col1_title">Stellium </h1>
                    <span><BiRocket /></span>
                </div>
                <div className="col1_quickLinks">
                    <ul>
                        <li>
                            Home
                        </li> |
                        <li>
                            About
                        </li> |
                        <li>
                            Our Story
                        </li> |
                        <li>
                            Team
                        </li>
                    </ul>
                </div>
                <p className="col1_des">Copyright &#169; 2022 <big>STELLIUM Developer</big> All Right Reserved</p>
            </div>
            <div className="footer_col_2">
                <p>
                    <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>Galgotias University
                </p>
                <p>
                    <span><i class="fa fa-phone" aria-hidden="true"></i></span> +91 9876543210
                </p>
                <p>
                    <span><i class="fa fa-envelope" aria-hidden="true"></i></span>xyz@gamil.com
                </p>
            </div>
            <div className="footer_col_3">
                <h4>
                    About the Company
                </h4>
                <p><big>Stellium</big> is a website which provides the location of ISS tracker and many more things.</p>
                <div className="col3_icon">

                    <i class="fa-brands fa-instagram fa-2x"></i>
                    <i class="fa-brands fa-github fa-2x"></i>
                    <i class="fa-brands fa-linkedin fa-2x"></i>
                </div>
            </div>

        </div>
    )
}