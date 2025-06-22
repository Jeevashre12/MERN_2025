import React from 'react';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'; 
import './index.css'
import State from './Hooks/State.jsx';
import Hooks from './pages/Hooks.jsx';
import Navbar from './components/Navbar.jsx';
import  { Route,Routes} from 'react-router-dom';
import Skills from './pages/Skills.jsx';
import Effect from './Hooks/Effect.jsx';
import Effect2 from './Hooks/Effect2.jsx';
import Login from './pages/Login.jsx';
import Ref from './Hooks/Ref.jsx'
const App = () => {
  
  var fruits = ["Manago", "Papaya", "Orange"];
  var user = { username: "Jeeva", password: "1234" };

  return (
    <div>
      
      
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home items={fruits} users={user} />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/hooks' element={<Hooks/>} />
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path = '/ref' element = {<Ref />} />

      </Routes>
    </div>
  );
};

export default App;

