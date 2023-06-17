
import './App.css';
import NavBar from './components/navbar.js'
import IntroCarousel from './components/introCarousel.js'
import Story from './components/story/story.js'






function App() {
  return (
    <div>
    <NavBar className = 'text-light'></NavBar>
    
    <IntroCarousel></IntroCarousel>

    <Story></Story>

    </div>
    
  );
}

export default App;
