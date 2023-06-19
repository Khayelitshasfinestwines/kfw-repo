import React from 'react';
import NavBar from '../navbar.js';
import IntroCarousel from '../introCarousel/introCarousel.js';
import Story from '../story/story.js';

import Newsletter from '../newsletter/newsletter.js';
import Contacts from '../contacts/contacts.js';
import Shopping from '../shopping/shopping.js';

const Home = ()=>{
    return (
        <div>
        <NavBar className = 'text-light'/>
        <IntroCarousel/>
        <Story/>
        <Shopping/>
        <Newsletter/>
        <Contacts/>
       </div>
    )

}

export default Home;