import React from 'react';
import Card from '../Card/Card.js';
import ShoppingImage from './cardImages/wineImage.jpg';
import ShoppingImage2 from './cardImages/wineImage2.jpg';
import ShoppingImage3 from './cardImages/wineImage3.jpg';
import './shoppingPage.css';


const Home = () => {
  return (
    <div>

        <div className='container'>
   

    
<div className='imageArea'>
    <div className='image-container'> 
    <Card
     
     
        title='Red Blend'
        imageUrl={ShoppingImage}
        body='A Blend of: SYRAH & CABERNET SAUVIGNON'
      />
</div>
      
      <div className='image-container2'>
      <Card


  
  title='White Blend'
  imageUrl={ShoppingImage2}
  body='A Blend of: CHENIN BLANC, SAUVIGNON BLANC & SÉMILLON'
/>


      </div>

      <div className='image-container2'>
      <Card


  
  title='Check back soon!'
  imageUrl={ShoppingImage3}
  body='It is a surprise'
/>


      </div>

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
