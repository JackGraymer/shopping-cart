import React, { useEffect, useState } from "react";
import './components.css'


const Products = () => {
    //state
    const [data, setData] = useState(null)
    const [cartHide, setCartHide] = useState('none')
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
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
        console.log(e.target.type)
        //If product already in cart, increase amount

        if(cart.find(item => item.id === object.id)){
            console.log('amount + 1') 
            cart.map((item) => {
                if(object.id === item.id){
                    console.log(e.target.textContent)
                    if(e.target.textContent === '+' || e.target.textContent === 'Add to Cart'){
                        item.amount++
                    setCart([...cart])
                    
                    }else if(e.target.textContent === '-'){
                        item.amount--
                        setCart([...cart])
                    }else if(e.target.type === 'number'){
                        item.amount = Number(e.target.value)
                        setCart([...cart])
                    }
                } 
            })
        }else{
            object.amount = 1
        setCart([...cart, object])
        }
    }

    function deleteFromCart(){
        cart.map((item) => {
            if(item.amount <= 0){
            console.log('delete item')
            let newcart = [...cart]
            newcart = newcart.filter((f) => f !== item)
            console.log('new cart',newcart)
            setCart(newcart)
            }
        })
    }

    //Renders when fetch is completed
    useEffect(() => {
    jsonData();
    }, []);

    //Renders total value of the Chart and cart icon amount
    useEffect(() => {
        let sum = 0
        let totalItems = 0
        cart.map((item) => {
            sum += item.price * item.amount
            totalItems += item.amount
        })
        deleteFromCart()
        setTotal(sum)
        setTotalItems(totalItems)
        console.log(totalItems, total, cart)
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
                <button className="cart-btn" onClick={hideCart}> <p>🛒&nbsp;</p> <p className="cart-number">{totalItems}</p></button>
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
                                        <h2>{product.title}</h2>
                                        <h3>Price: {product.price} $</h3>

                                        <div className="card-amount">
                                            <button className="card-btn" onClick={addToCart}>-</button>
                                            <input type='number' defaultValue={product.amount} onBlur={addToCart} className='card-input'></input>
                                            <button className="card-btn" onClick={addToCart}>+</button>
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