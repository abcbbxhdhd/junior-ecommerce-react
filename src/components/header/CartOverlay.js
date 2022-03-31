import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import CartOverlayItem from "./CartOverlayItem"

export default function CartOverlay() {
    const cartProducts = useSelector(state => state.products)
    const [isOverlayToggled, setIsOverlayToggled] = useState(false)
    const currentCurrency = useSelector(state => state.currentCurrency)
    const navigate = useNavigate()

    const productAmount = () => {
        let value = 0;
        cartProducts.forEach(product => {
            value += product.amount
        });
        return value
    }

    function toggleOverlay() {
        setIsOverlayToggled(prev => !prev)
    }

    function navigateToCart() {
        navigate('/cart')
    }

    const amount = productAmount()
    const productsToRender = cartProducts.map(product => {
        return <CartOverlayItem product={product}/> 
    })

    let totalPrice = 0;
    cartProducts.forEach(pr => {
        totalPrice += pr.amount * pr.prices.find(price => price.currency.label === currentCurrency).amount
    })

    return (
        <div className="cart-overlay">
            <i onClick={toggleOverlay} className="ri-shopping-cart-2-line"></i>
            { amount > 0 && <div className="product-amount-badge">
                <h4>{amount}</h4>
            </div>}

            {
                isOverlayToggled &&
                <div className="overlay-display">
                    <div className="overlay-title">
                        <h1>My Bag.</h1>
                        <h2>{amount} items</h2>
                    </div>
                    {productsToRender} 
                <div className="cart-overlay-total">
                    <h3 className="cart-overlay-total-text">Total</h3>
                    <h3 className="cart-overlay-total-text">{Math.round(totalPrice)}</h3>     
                </div>
                <div className="cart-overlay-links">
                    <button onClick={navigateToCart} className="cart-overlay-btn_link">VIEW BAG</button>
                    <button className="cart-overlay-btn_link">CHECK OUT</button>
                </div>    
                </div>
            }
        </div>
    )
}