
import './App.css';

import TastingsPage from './components/tastingPage/tastingPage.js'
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar';
import {Route, Routes } from 'react-router-dom';
import ShoppingPage from './components/shoppingPage/shoppingPage';
import ContactPage from './components/contactPage/contactPage';
import StoryPage from './components/storyPage/storyPage';
import InternationalPage from './components/internationalPage/internationalPage';
import LoginPage from './components/loginPage/loginPage';
import Contacts from './components/Home/contacts/contacts';
import WineClubPage from './components/wineClubPage/wineClub';
import { FirebaseProvider } from './firebase/firebase';






function App() {
  return (


    <div>

  

      <NavBar/>
     <Routes>
      <Route path='/tastings' element= {<TastingsPage/>}> </Route>
      <Route path= '/' element = {<Home/>}> </Route>
      <Route path= '/shopping' element = {<ShoppingPage/>}> </Route>
      <Route path= '/contact' element = {<ContactPage/>}> </Route>
      <Route path= '/story' element = {<StoryPage/>}> </Route>
      <Route path= '/international' element = {<InternationalPage/>}> </Route>
      <Route path= '/login' element = {<LoginPage/>}> </Route>
      <Route path= '/wineclub' element = {<WineClubPage/>}> </Route>
     </Routes>
     <Contacts/>



 

    </div>

   



    
  );
}

export default App;
