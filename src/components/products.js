import React, { useEffect, useState } from "react";
import './components.css'


const Products = () => {
    const [data, setData] = useState(false)

    const logger = function () {
        console.log(data)
      }

     
      let jsonData = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=10')
        .then((res) => res.json())    
        setData(response.products )
        console.log('fetch', data)
      
      }

      useEffect(() => {
        jsonData();
      }, []);

    return(
        <div className="products">
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
                   <Cart/>
            </div>               
        </div>
    )

}

const Cart = () => {
    return(
        <button className="cart-btn"> <p>🛒&nbsp;</p> <p className="cart-number">1</p></button>
    )
}

  

export default Products