
import './App.css';
import NavBar from './components/navbar.js'
import IntroCarousel from './components/introCarousel/introCarousel.js'
import Story from './components/story/story.js'

import Newsletter from './components/newsletter/newsletter.js'
import Contacts from './components/contacts/contacts.js'
import Shopping from './components/shopping/shopping'





function App() {
  return (
    <div>
    <NavBar className = 'text-light'></NavBar>
    
    <IntroCarousel></IntroCarousel>

    <Story></Story>
    <Shopping></Shopping>

    


    <Newsletter></Newsletter>

    <Contacts></Contacts>

    </div>
    
  );
}

export default App;
