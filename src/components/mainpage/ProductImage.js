import React from "react"
import "./Mainpage.css"
import useHover from "../../hooks/useHover"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"

export default function ProductImage(props) {
    const [ref, isHovered] = useHover()
    const navigate = useNavigate()

    function handleProductRedirect() {
        navigate(`/${props.id}`)
    }

    return (
        <div ref={ref} className="product-description">
            <img className={props.inStock ? "product-img_in" : "product-img_out"} src={props.imgUrl}></img>
            {(props.inStock && isHovered) && <div className="add-product" onClick={handleProductRedirect}><i className="ri-shopping-cart-line"></i></div>}
            {!props.inStock && <h3 className="out-of-stock_label">OUT OF STOCK</h3>}
            <p className={props.inStock ? "product-name_in" : "product-name_out"}>{props.name}</p>
            <p className={props.inStock ? "product-price_in" : "product-price_out"}>{props.price.symbol + props.price.amount}</p>
        </div>
    )
}