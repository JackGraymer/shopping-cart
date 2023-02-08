import React from "react";
import { NavLink } from "react-router-dom";
import './components.css'

const Home = () => {
    return(
        <div className="home">
            <div className="half">
                <div className="title">
                    <h1> Where Technology Becomes Houseware</h1>
                    <h2> Get the gadgets tha you need in one place</h2>
                    <h3> This company has a simple goal, to make all your tech needs available. <br/>
                    <hr></hr>
                    We work hard to make your life as easy and comfortable as possible. </h3>
                    <NavLink className="products-btn" to='/Products'>Products</NavLink>
                </div>
                
            </div>
            <div className="half"></div>
        </div>
    )
}

export default Home