import React from 'react'
import './storyPage.css';
import StoryPageImage from './storyPageImages/storypage2.jpg';

const StoryPage = ()=>{

    return (
        <div>
            <div className="container">
            <img src={StoryPageImage} alt="story header" style={{ width: '100%' }} />
                <div className="centered">Our Story</div>
            </div>
        </div>
    )
}

export default StoryPage