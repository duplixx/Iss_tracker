import React from "react"
import thumbnail from "../images/thumbnail.jpeg"

export default function Story() {
    return (
        <div className="story_section" >
            <div className="left_story_section">
                <h1 className="top_left_story">Our</h1>
                <h1 className="top_right_story">Story</h1>
                <p>The story behind making of Stellium is
                exploration, creativity and curiosity....</p>
            </div>
            <div className="right_story_section">

                <a href="https://www.youtube.com/watch?v=jCZgopSjteI" target="_blank"><img src={thumbnail} alt="video" /></a>
            </div>
        </div>
    )
}