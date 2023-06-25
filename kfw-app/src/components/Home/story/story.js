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
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum."
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
