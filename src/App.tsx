import React from 'react';
import logo from './logo.svg';
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import Verify from './Pages/Verify/Verify';
import Home from './Pages/Home/Home';
import Footer from './component/footer/Footer';
import Project from './Pages/Project/Project';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<Signup />} />
        <Route path='/project' element={<Project />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/verify' element={<Verify />}/>
        <Route path='/login' element={<SignIn/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
