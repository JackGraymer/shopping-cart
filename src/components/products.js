import React, { useEffect, useState } from "react";
import './components.css'


const Products = () => {
    //state
    const [data, setData] = useState(false)
    const [cartHide, setCartHide] = useState('none')


    //Fetches objects to display in product list
    let jsonData = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=10')
        .then((res) => res.json())    
        setData(response.products )
        console.log('fetch', data) 
    }

    function hideCart () {
        if(cartHide === 'none'){
            setCartHide('')
        }else{
            setCartHide('none')
        }
    }

    //Renders when fetch is completed
      useEffect(() => {
        jsonData();
      }, []);
    
    //Displays list of objects 
    const List = () =>{
        return(
            <div className="list">
                {data && data.map((item) => (
                    <div className='item' key={crypto.randomUUID()} itemID={item.id}> 
                        <div className="image"> 
                        <img src={item.thumbnail}></img>
                        </div>
                        <div className="text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div>
                                <h3>{item.price}$</h3>
                                <button className="purchase">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )) }  
                <button className="cart-btn" onClick={hideCart}> <p>🛒&nbsp;</p> <p className="cart-number">1</p></button>
                <Cart/>
            </div>  
        )
    }
    
    const Cart = () => {
        return(
            <div className="cart" style={{display:cartHide}}>
                <div className="cart-list">
                    <button className="cart-close-btn" onClick={hideCart}><h1>❌</h1></button>
                </div>
            </div>
        )
    }

    return(
        <div className="products">  
            <List/>                       
        </div>
    )

}



  

export default Products