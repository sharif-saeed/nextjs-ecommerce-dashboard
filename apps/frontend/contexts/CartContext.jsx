"use client"

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export function CartProvider( {children}){

    const [cart, setCart] = useState([])

    useEffect(
        ()=>{
            const cartlocal = JSON.parse(localStorage.getItem("cart")) 
            if(cartlocal){
                setCart(cartlocal)
            }
        }
        , [])

    useEffect(
        ()=>{
            localStorage.setItem("cart", JSON.stringify(cart))
        }
        , [cart])
    
    function addToCart(product){
        setCart(prev => {
            let selectedProduct = prev.find((item)=> item._id == product._id)

            if(!selectedProduct){
                return [...prev, {...product, quantity:1}]
            }
            else{
                return prev.map(item=>
                    item._id == product._id ?
                    {...item, quantity: item.quantity+1}:
                    item
                )
            }
        })
    }

    function removeFromCart(productId){
        setCart(prev => prev.filter((product)=> product._id != productId))
    }

    function updateQuantity(productId, newQuantity){
        setCart(prev=>
            prev.map(item=>
                item._id == productId?
                {...item, quantity: newQuantity}:
                item
            )
        )
    }

    function getTotal(){
        let total = 0
        cart.forEach(item=>
            total += item.quantity * item.price
        )
        return total
    }

    function clearCart(){
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, getTotal, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}