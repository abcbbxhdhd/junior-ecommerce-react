import React from "react"
import CartOverlay from "./CartOverlay"
import CurrencyPicker from "./CurrencyPicker"
import NavCategories from "./NavCategories"
import "./Header.css"
import { useNavigate } from "react-router"

export default function Header() {
    const navigate = useNavigate()

    function navigateHome() {
        navigate("/")
    }

    return (
        <header>
            <div className="left-section">
                <NavCategories />
            </div>
            <div className="center-section">
                <i onClick={navigateHome} className="ri-shopping-bag-2-line"></i>
            </div>
            <div className="right-section">
                <CurrencyPicker />
                <CartOverlay />
            </div>
        </header>
    )
}