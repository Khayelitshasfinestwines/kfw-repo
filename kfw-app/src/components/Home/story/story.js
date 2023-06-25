import React, { useState, useEffect } from 'react';
import StoryImage from './storyimages/storyimage1.jpg';
import './story.css';
import { Link } from 'react-router-dom';

const Story = () => {
  const [isImageVisible, setImageVisible] = useState(true);

  const handleMediaQueryChange = (mediaQuery) => {
    setImageVisible(mediaQuery.matches);
  };

  // Add event listener for media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setImageVisible(mediaQuery.matches);
    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listener
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <div className="twocolumns">
        <div>
          <h1 className="storyheader mt-5">Our Story</h1>
          <figure>
            <blockquote className="blockquote mt-3">
              <p>Everybody, no matter who you are or where you’re from, deserves a good glass of wine.</p>
            </blockquote>
            <figcaption className="blockquote-footer mt-1">
              Lindile Ndzaba <cite title="Source Title">Founder of Khayelitsha's Finest Wines</cite>
            </figcaption>
          </figure>
          <div className="backstory">
            <p>
              "Discover the inspiring journey of Lindile Ndzaba and Khayelitsha's Finest Wine—a tale of passion, empowerment, and community upliftment. From humble beginnings to breaking barriers in the world of wine, Lindile's quest to bring fine wine culture to Khayelitsha will captivate your heart. Step into our story page to explore the remarkable impact of Khayelitsha's Finest Wine and be inspired to join us on this extraordinary adventure."
            </p>
          </div>
          <Link to="/story">
            <button type="button" className="btn btn-dark btn-lg mt-4 storybutton">
              Learn More
            </button>
          </Link>
        </div>

        {isImageVisible && (
          <div>
            <img src={StoryImage} alt="Story Image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;
