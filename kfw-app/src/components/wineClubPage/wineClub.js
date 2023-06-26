import React from "react";
import wineClubImage from './wineClubImage.png';
import './wineClub.css'

const WineClubPage = () => {

  return (
    <div>
        <div>
                <div className="heading-container">
                <img
                    src={wineClubImage}
                    alt="Wine Club header"
                    style={{ width: "100%" }}
                />
                <div className="centered">Wine Club</div>
        </div>

        <div className='text-center mt-3 wine-club-blurb'>
            Want to join our wine club for exclusive offers and promotions? (????), sign up here to gain the best access to Khayelisha's Finest Wines
        </div>

        <div className='button-center'>

                <button className='btn btn-dark mt-3 mb-3'>Purchase Membership</button>


        </div>

        </div>
     
    </div>
    
  );
};

export default WineClubPage;
