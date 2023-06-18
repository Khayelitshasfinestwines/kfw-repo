import React from 'react';
import './shopping.css';
import ShoppingImage from './shoppingImages/wineImage2.jpg'
import ShoppingImage2 from './shoppingImages/wineImage.jpeg'

const Shopping = () => {
  return (
    <div>
      <div className='shoppingFont1'>
        Our Collection
      </div>
     
      <div className='centerText'>
        Wines would be displayed here, and will link to another page where the user can go through the process of purchasing.  
   
</div>

<div className='imageArea'>

<div className="centerText" style={{ paddingLeft: '30px' }}>
Wine description
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</div>


<div className="image-container">
  <img src={ShoppingImage} alt="Shopping Image" className="small-image" />
</div>



<div className="image-container2">
  <img src={ShoppingImage} alt="Shopping Image" className="small-image2" />
</div>

<div className='centerText'>
LOREM IPSUM GENERATOR
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur./div>


</div>






    </div>

    <div className='centerText'>  <button type="button" class="btn btn-dark btn-lg mt-4 mb-5">Shop</button>
    </div>

  
    
    </div>
  );
}

export default Shopping;
