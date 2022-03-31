import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { GET_PRODUCT_BY_ID } from "../../common/queries"
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import { removeProduct, plusOneProduct } from "../../redux/reducers/cartReducer"

export default function CartItem(props) {
    const {data, loading, error} = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            productId: props.product.productId
        }
    })
    const [product, setProduct] = useState()
    const dispatch = useDispatch()
    const currentCurrency = useSelector(state => state.currentCurrency)
    const [currentImageIdx, setCurrentImageIdx] = useState(0)
    
    function handleGalleryForward() {
        if (currentImageIdx < product.gallery.length - 1) {
            setCurrentImageIdx(idx => idx + 1)
        }
    }

    function handleGalleryBack() {
        if (currentImageIdx > 0) {
            setCurrentImageIdx(idx => idx - 1)
        }
    }  

    function handlePlusOneProduct(id) {
        dispatch(plusOneProduct(id))
    }

    function handleRemoveProduct(id) {
        dispatch(removeProduct(id))
    }

    useEffect(() => {
        if (data) {
            setProduct(data.product)
        }
    }, [data])

    if (!product) {
        return <h1>Loading...</h1>
    }

    console.log(currentImageIdx)
    const attributesToRender = props.product.attribute.map(attr => {
        if (attr.type === "text") {
            return <div className="cart-item-attribute_text">{attr.value}</div>
        }
        return <div className="cart-item-attribute_swatch" style={{background: attr.value}}></div>
    })

    const price = product.prices.find(price => price.currency.label === currentCurrency)

    return (
        <div className="cart-item">
                <div className="cart-item-description">
                    <h2 className="cart-item-name">{product.brand}</h2>
                    <h2 className="cart-item-name">{product.name}</h2>
                    <p className="cart-price_one">{price.currency.symbol + price.amount}</p>
                    <div className="cart-item-attributes">
                        {attributesToRender}
                    </div>
                </div>
            <div className="cart-item-extra-info">
                <div className="cart-item-counter">
                    <button onClick={() => handlePlusOneProduct(props.product.id)} className="cart-item-counter_btn">+</button>
                    <h3 className="cart-item-amount">{props.product.amount}</h3>
                    <button onClick={() => handleRemoveProduct(props.product.id)} className="cart-item-counter_btn">-</button>
                </div>
                <div className="cart-item-gallery">
                    <i onClick={handleGalleryBack} className="ri-arrow-left-s-line"></i>
                    <img className="cart-item-img" src={product.gallery[currentImageIdx]}></img>
                    <i onClick={handleGalleryForward} className="ri-arrow-right-s-line"></i>
                </div>
            </div>

        </div>

    )
}