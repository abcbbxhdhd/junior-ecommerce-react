import React, { useState } from "react"
import { useSelector } from "react-redux"
import "./ProductDetail.css"

export default function ProductFeatures({product}) {

    const currentCurrency = useSelector(state => state.currentCurrency)
    const [selectedAttribute, setSelectedAttribute] = useState({})

    function handleAttributeSelect(attribute) {
        setSelectedAttribute(attribute)
    }

    const attributesToRender = product.attributes.map(attr => {
        return (   
            <div className="attr-column">
                <h3 className="attribute-type-name">{attr.name.toUpperCase()}:</h3>
                <div className="attr-row">
                   {attr.items.map(item => {
                       if (attr.type === "swatch") {
                           return (<div onClick={() => handleAttributeSelect({type: attr.type, value: item.displayValue})} style={{background: `${item.displayValue}`}} className={selectedAttribute.value === item.displayValue ? "item-attr-selected" : "item-attr"}></div>)
                       } else {
                           return (<div onClick={() => handleAttributeSelect({type: attr.type, value: item.displayValue})} className={selectedAttribute.value === item.displayValue ? "item-attr-selected" : "item-attr"}><p className="item-attr-name">{item.displayValue}</p></div>)
                       }
                   })}
                </div>
            </div>
        )
    })

    const price = product.prices.find(price => price.currency.label === currentCurrency)

    const priceToRender = 
                    <div className="price-section">
                        <h3 className="attribute-type-name">PRICE:</h3>
                        <p className="attribute-price-value">{price.currency.symbol + price.amount}</p>
                    </div>

    return( 
        <div className="product-features">
            <h1 className="pr-brand">{product.brand}</h1>
            <h2 className="pr-name">{product.name}</h2>
            {attributesToRender}
            {priceToRender}
            <button className="add-to-cart-btn">ADD TO CART</button>
            <p className="description-product-detail">{product.description.replace(/(<([^>]+)>)/ig, '')}</p>
        </div>
    )
}