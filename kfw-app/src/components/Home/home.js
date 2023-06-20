import React from 'react';
import IntroCarousel from './introCarousel/introCarousel.js';
import Story from './story/story.js';
import Tastings from './tastings/tastings.js';
import Newsletter from './newsletter/newsletter.js';
import Shopping from './shopping/shopping.js';

const Home = ()=>{
    return (
        <div>
        <IntroCarousel/>
        <Story/>
        <Shopping/>
        <Tastings/>
        <Newsletter/>
       </div>
    )

}

export default Home;