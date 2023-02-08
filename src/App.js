import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
    <Header/>
      <Routes>

      </Routes>
    </BrowserRouter>
  )
}

const Header = () => {
  return(
    <div className='nav'> 
      <h2><NavLink to=''>Shop Name</NavLink></h2>
      <div className='nav-links'>
        <NavLink to=''>Home</NavLink>
        <NavLink to=''>Products</NavLink>
        <NavLink to=''>Contact</NavLink>
      </div>
    </div>
  )
}

let jsonData = function() {
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log)

}





export default App

