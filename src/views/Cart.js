import React from "react"
import { useSelector } from "react-redux"
import CartItem from "../components/cart/CartItem"
import Header from "../components/header/Header"
import "../components/cart/Cart.css"

export default function Cart() {
    const cart = useSelector(state => state.products)

    const productsToRender = cart.map(pr => {
        return <CartItem product={pr}/>
    })
    return (
        <>
            <Header />
            <h1 className="cart-main-title">CART</h1>
            {productsToRender}
        </>
    )
}