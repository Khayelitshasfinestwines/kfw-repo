import React from 'react';
import IntroCarousel from './introCarousel/introCarousel.js';
import Story from './story/story.js';

import Newsletter from './newsletter/newsletter.js';
import Contacts from './contacts/contacts.js';
import Shopping from './shopping/shopping.js';

const Home = ()=>{
    return (
        <div>
        <IntroCarousel/>
        <Story/>
        <Shopping/>
        <Newsletter/>
        <Contacts/>
       </div>
    )

}

export default Home;