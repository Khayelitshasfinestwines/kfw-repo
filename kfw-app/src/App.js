
import './App.css';

import TastingsPage from './components/tastingPage/tastingPage.js'
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar';
import {Route, Routes, Navigate } from 'react-router-dom';
import ShoppingPage from './components/shoppingPage/shoppingPage';
import ContactPage from './components/contactPage/contactPage';
import StoryPage from './components/storyPage/storyPage';
import InternationalPage from './components/internationalPage/internationalPage';
import CartPage from './components/cartPage/cartPage';
import LoginPage from './components/loginPage/loginPage';
import Contacts from './components/Home/contacts/contacts';
import WineClubPage from './components/wineClubPage/wineClub';
import RedWine from './components/shoppingPage/redWine/redWine';
import WhiteWine from './components/shoppingPage/whiteWine/whiteWine';
import { FirebaseProvider } from './firebase/firebase';
import ProfilePage from './components/profilePage/profilePage';
import React, {useState} from 'react';
import RequireAuth from './components/RequireAuth';






function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (


    <div>

  
   
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     <Routes>
      {/* <Route path='/tastings' element= {<TastingsPage/>}> </Route> */}
      <Route path= '/' element = {<Home/>}> </Route>
      <Route path= '/shopping' element = {<ShoppingPage/>}> </Route>
      <Route path= '/contact' element = {<ContactPage/>}> </Route>
      <Route path= '/story' element = {<StoryPage/>}> </Route>
      <Route path= '/international' element = {<InternationalPage/>}> </Route>
      <Route path = '/cart' element = {<CartPage></CartPage>}></Route>
      <Route path= '/wineclub' element = {<WineClubPage/>}> </Route>
      <Route path= '/redblend' element = {<RedWine/>}> </Route>
      <Route path= '/whiteblend' element = {<WhiteWine/>}> </Route>
      {/* <Route path= '/profile' element = {<ProfilePage/>}></Route> */}
     </Routes>
     <Contacts/>
   



 

    </div>

   



    
  );
  
}

export default App;