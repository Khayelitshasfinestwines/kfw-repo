import React from 'react';
import Card from '../Card/Card.js';
import ShoppingImage from './cardImages/wineImage.jpg';

import './shoppingPage.css';

const Home = () => {
  return (
    <div>
   

    
<div className='imageArea'>
    <div className='image-container'> 
    <Card
     
     
        title='Red Wine'
        imageUrl={ShoppingImage}
        body='LOREM IPSUM GENERATOR
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
      />
</div>
      
      <div className='image-container2'>
      <Card


  
  title='White Wine'
  imageUrl={ShoppingImage}
  body='LOREM IPSUM GENERATOR
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
/>

      </div>

      
   


</div>

<div className='centerText'>  <button type="button" class="btn btn-dark btn-lg mt-4 mb-5">Check Out</button>
    </div>

<div>

</div>

    
    </div>
  );
};

export default Home;
