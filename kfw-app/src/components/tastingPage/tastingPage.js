import React from 'react'
import './tastingPage.css'
import TastingPhoto1 from './newtasting.jpeg'

const TastingsPage = ()=>{

    return (
<div>
        <div>
                <div className="heading-container ">
                    <div className=' container  mt-3 '>
                    <img className='mt-3 tastings-photo'
                    src={TastingPhoto1}
                    alt="Wine Tastings header"
                />
                    </div>

                <div className="centered">Wine Tours</div>
        </div>

        <div className='text-center mt-3 tasting-blurb'>
            Wine Tours (explanation)
        </div>

        <div className='button-center'>

                <button className='btn btn-dark mt-3 mb-3'>Book Now</button>


        </div>

        </div>
     
    </div>
    )
}







export default TastingsPage