import { useState } from "react"
import CartContext from "./CartContext"


const CartProvider=(props)=>{
const[products,setproducts]=useState([])
    const addItemHandler=(product)=>{
        setproducts([...products,product])
    }

    const  Cartitems={
        products:products,
        totalAmount:0,
        addItem:addItemHandler
        
        
    }
    return <CartContext.Provider value={Cartitems}>{props.children}</CartContext.Provider>
}

export default CartProvider;