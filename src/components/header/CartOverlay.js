import React from "react"
import { useSelector } from "react-redux"

export default function CartOverlay() {
    const cartProducts = useSelector(state => state.products)

    const productAmount = () => {
        let value = 0;
        cartProducts.forEach(product => {
            value += product.amount
        });
        return value
    }

    const amount = productAmount()

    return (
        <div className="cart-overlay">
            <i className="ri-shopping-cart-2-line"></i>
            { amount > 0 && <div className="product-amount-badge">
                <h4>{amount}</h4>
            </div>}
        </div>
    )
}