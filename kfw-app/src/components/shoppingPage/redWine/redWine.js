import React from 'react';
import './redWine.css';
import StoryImage from './redwineImages/storyimage1.jpg';
import { Link } from 'react-router-dom';

const RedWine = () => {
  return ( 
  <>  
  <div className="container2">
      <div className="column1">
        <div>
          <img src={StoryImage} alt="Story Image" style={{ width: '500px' }} />
        </div>
      </div>
      
      <div className="column2">
      <h3><div > R e d  B l e n d </div></h3> 
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk o</div>
    </div></>
  );
};

export default RedWine;
