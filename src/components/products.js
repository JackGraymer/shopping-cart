import React, { useEffect, useState } from "react";
import './components.css'


const Products = () => {
    //state
    const [data, setData] = useState(false)
    const [cartHide, setCartHide] = useState('none')
    const [cart, setCart] = useState({
        products:[],
        total:''
    })


    //Fetches objects to display in product list
    let jsonData = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=10')
        .then((res) => res.json())    
        setData(response.products )
        console.log('fetch', data) 
    }
    //Shows and Hides Cart
    function hideCart () {
        if(cartHide === 'none'){
            setCartHide('')
        }else{
            setCartHide('none')
        }
    }

    //Adds products to Cart
    function addToCart(e){
        console.log('added to cart')
        console.log(cart)
        let object = e.target.parentNode.parentNode.firstChild.textContent
        object = data.find(element => element.title = object)
        //console.log(object)
        setCart({...cart, products:[...cart.products, object]})
        console.log(cart.products.length)
        //setCart({...cart, number: cart.products.length })
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
                                <button className="purchase" onClick={addToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )) }  
                <button className="cart-btn" onClick={hideCart}> <p>🛒&nbsp;</p> <p className="cart-number">{cart.products.length}</p></button>
                <Cart/>
            </div>  
        )
    }
    
    const Cart = () => {
        return(
            <div className="cart" style={{display:cartHide}}>
                <div className="cart-list">
                    <button className="cart-close-btn" onClick={hideCart}><h1>❌</h1></button>
                    <div className="cart-products"></div>
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