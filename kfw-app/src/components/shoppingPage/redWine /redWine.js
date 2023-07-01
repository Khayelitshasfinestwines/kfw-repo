import React from 'react';
import './redWine.css';
import StoryImage from './redwineImages/storyimage1.jpg';
import { Link } from 'react-router-dom';

const RedWine = () => {
  return ( 
  <> <h3><div className='center2'> Red Wine </div></h3>  
  <div className="container2">
      <div className="column1">
        <div>
          <img src={StoryImage} alt="Story Image" style={{ width: '500px' }} />
        </div>
      </div>
      <div className="column2">Column 2</div>
    </div></>
  );
};

export default RedWine;
