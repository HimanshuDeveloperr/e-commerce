import React from 'react'

const CartContext=React.createContext({
    products:[],
    totalAmount:0,
    addItem:(item)=>{},
})

export default CartContext