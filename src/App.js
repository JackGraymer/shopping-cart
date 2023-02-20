import './App.css';
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Products from './components/products';
import Contact from './components/contact';

function App() {
  return(
    <BrowserRouter>
    <Header/>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Products' element={<Products/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const Header = () => {
  return(
    <div className='nav'> 
      <h2><Link to='/'>Shop Name</Link></h2>
      <div className='nav-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Products'>Products</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
      </div>
    </div>
  )
}

export default App