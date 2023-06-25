import React, { useState } from 'react';
import StoryImage from './storyimages/storyimage1.jpg';
import './story.css'

const Story = () => {

  return (
    <div>
    <div className="leftcontainer">
      <div className="content">
        <h1 className="storyheader mt-5">Our Story</h1>
        <figure>
        <blockquote class="blockquote mt-3">
          <p>Everybody, no matter who you are or where you’re from, deserves a good glass of wine.</p>
        </blockquote>
        <figcaption class="blockquote-footer mt-1">
          Lindile Ndzaba <cite title="Source Title">Founder of Khayelitsha's Finest Wines</cite>
        </figcaption>
        </figure>
        <div className = "backstory">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        
        <button type="button" class="btn btn-dark btn-lg mt-4 storybutton">Learn More</button>
      </div>
    </div>

    <div className="rightcontainer">
      <div className = "image">
        <img src = {StoryImage} alt = "Story Image"></img>
      </div>
    </div>
    </div>
    )
}

export default Story;