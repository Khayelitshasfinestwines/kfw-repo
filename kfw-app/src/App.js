
import './App.css';
import NavBar from './components/navbar.js'
import IntroCarousel from './components/introCarousel.js'







function App() {
  return (
    <div>
    <NavBar className = 'text-light'></NavBar>
    
    <IntroCarousel></IntroCarousel>
    </div>
    
  );
}

export default App;
