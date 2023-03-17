import React from 'react';
import {Routes,Route} from 'react-router-dom'
import DashBord from './components/Dashboard';
import Login from './components/login';
import Signup from './components/signup';
import Home from './home';
import './App.css';
import './style.css';

import DataState from './context/DataState'

const App = () => {

  return (
    <div>
       <DataState>
        <Routes>
         <Route path='/login' element={<Login/>} />
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/signup1' element={<Signup/>}/>
           <Route path='/dashboard' element={<DashBord/>}/>
           <Route path='/' element={<Home/>}
           
           />
         </Routes>
         </DataState>
    </div>
  );
}

export default App;
