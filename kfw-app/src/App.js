
import './App.css';

import TastingsPage from './components/tastingPage/tastings.js'
import Home from './components/Home/home';

import {Route, Routes } from 'react-router-dom';





function App() {
  return (

    <div>


     <Routes>
      <Route path='/tastings' element= {<TastingsPage/>}> </Route>
      <Route path= '/' element = {<Home/>}> </Route>

     </Routes>



    </div>



    
  );
}

export default App;
