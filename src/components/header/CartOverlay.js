import React, { useState } from "react"
import { useSelector } from "react-redux"
import CartOverlayItem from "./CartOverlayItem"

export default function CartOverlay() {
    const cartProducts = useSelector(state => state.products)
    const [isOverlayToggled, setIsOverlayToggled] = useState(false)

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

    const amount = productAmount()
    const productsToRender = cartProducts.map(product => {
        return <CartOverlayItem product={product}/> 
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
                    <h3 className="cart-overlay-total-text"></h3>     
                </div>
                <div className="cart-overlay-links">
                    <button className="cart-overlay-btn_link">VIEW BAG</button>
                    <button className="cart-overlay-btn_link">CHECK OUT</button>
                </div>    
                </div>
            }
        </div>
    )
}