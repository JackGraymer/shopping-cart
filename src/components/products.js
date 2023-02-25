import React, { useEffect, useState } from "react";
import './components.css'


const Products = () => {
    //state
    const [data, setData] = useState(false)
    const [cartHide, setCartHide] = useState('none')
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
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
        let object = e.target.parentNode.parentNode.firstChild.textContent
        object = data.find(element => element.title === object)

        //If product already in cart, increase amount

        if(cart.find(item => item.id === object.id)){
            console.log('amount + 1') 
            cart.map((item) => {
                if(object.id === item.id){
                    item.amount++
                    setCart([...cart])
                }
            })
    
        }else{
            object.amount = 1
        setCart([...cart, object])
        }
    }

    //Renders when fetch is completed
    useEffect(() => {
    jsonData();
    }, []);

    //Renders total value of the Chart
    useEffect(() => {
        let sum = 0
        cart.map((item) => (
            sum += item.price * item.amount
        ))
        setTotal(sum)
        console.log(total, cart)
    },[cart])

    //Displays list of products 
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
                <button className="cart-btn" onClick={hideCart}> <p>🛒&nbsp;</p> <p className="cart-number">{cart.length}</p></button>
                <Cart/>
            </div>  
        )
    }
    
    const Cart = () => {
        return(
            <div className="cart" style={{display:cartHide}}>
                <div className="cart-list">
                    <div className="cart-header">
                        <h1>Shopping Cart</h1> 
                        <button className="cart-close-btn" onClick={hideCart}><h1>❌</h1></button>
                    </div>                    
                    <div className="cart-products">
                        {
                            cart.map((product) => (
                                <div key={crypto.randomUUID()} className='cart-card'>
                                    <div className="card-image" style={{backgroundImage:`url(${product.thumbnail})`}}> {/* <img src={product.thumbnail}></img> */}</div>
                                    <div className="card-text">
                                        {product.title}
                                        <div>
                                            <button className="card-btn">-</button>
                                            <input type='number' defaultValue={product.amount}></input>
                                            <button className="card-btn">+</button>
                                        </div> 
                                    </div>
                                    

                                </div>
                            ))
                            
                        }
                    </div>
                    <div className="cart-footer">
                        <h3>Total: {total}$</h3>
                        <button className="cart-confirm-btn">To Checkout</button>
                    </div>
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