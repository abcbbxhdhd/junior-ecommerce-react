import React from "react"
import CartOverlay from "./CartOverlay"
import CurrencyPicker from "./CurrencyPicker"
import NavCategories from "./NavCategories"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <div className="left-section">
                <NavCategories />
            </div>
            <div className="center-section">

            </div>
            <div className="right-section">
                <CurrencyPicker />
                <CartOverlay />
            </div>
        </header>
    )
}