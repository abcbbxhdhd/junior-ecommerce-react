import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GET_PRODUCT_BY_ID } from "../../common/queries"
import { addProduct, removeProduct } from "../../redux/reducers/cartReducer"

export default function CartOverlayItem(props) {
    const {data, loading, error} = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            productId: props.product.productId
        }
    })
    const [product, setProduct] = useState()
    const dispatch = useDispatch()
    const currentCurrency = useSelector(state => state.currentCurrency)

    function handleAddProduct(product) {
        dispatch(addProduct(product))
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

    const attributesToRender = props.product.attribute.map(attr => {
        if (attr.type === "text") {
            return <div className="cart-overlay-attribute_text">{attr.value}</div>
        }
        return <div className="cart-overlay-attribute_swatch" style={{background: attr.value}}></div>
    })

    const price = product.prices.find(price => price.currency.label === currentCurrency)

    return (
        <div className="cart-overlay-item">
                <div className="cart-overlay-description">
                    <h2 className="cart-overlay-name">{product.brand}</h2>
                    <h2 className="cart-overlay-name">{product.name}</h2>
                    <p className="cart-overlay-price_one">{price.currency.symbol + price.amount}</p>
                    <div className="cart-overlay-attributes">
                        {attributesToRender}
                    </div>
                </div>
            <div className="cart-overlay-extra-info">
                <div className="cart-overlay-counter">
                    <button onClick={handleAddProduct} className="cart-overlay-counter_btn">+</button>
                    <h3 className="cart-overlay-item-amount">{props.product.amount}</h3>
                    <button onClick={handleRemoveProduct} className="cart-overlay-counter_btn">-</button>
                </div>
                <img className="cart-overlay-img" src={product.gallery[0]}></img>
            </div>

        </div>

    )
}