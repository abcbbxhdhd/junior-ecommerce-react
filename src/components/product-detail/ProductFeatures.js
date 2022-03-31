import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./ProductDetail.css"
import { addProduct } from "../../redux/reducers/cartReducer"
import { nanoid } from "nanoid"


export default function ProductFeatures({product}) {
    const cart = useSelector(state => state.products)
    const currentCurrency = useSelector(state => state.currentCurrency)
    const [selectedAttributes, setSelectedAttributes] = useState([])
    const dispatch = useDispatch()

    function handleAttributeSelect(attribute) {
        setSelectedAttributes(prevAttr => {
            let copy = prevAttr
            let indexOf = copy.findIndex(attr => attr.attributeName === attribute.attributeName)
            if (indexOf !== -1) {
                copy[indexOf] = attribute
            } else {
                copy.push(attribute)
            }
            return [...copy]
        })
    }

    function isSelectedAttribute(displayValue, attributeName) {
        return selectedAttributes.findIndex(attr => attr.value === displayValue && attr.attributeName === attributeName) !== -1
    }

    function handleAddProduct() {
        dispatch(addProduct({
            productId: product.id,
            id: nanoid(),
            attribute: selectedAttributes,
            amount: 1,
            prices: product.prices
        }))
        alert(`${product.brand} ${product.name} added to cart`)
    }

    const attributesToRender = product.attributes.map(attr => {
        return (   
            <div className="attr-column">
                <h3 className="attribute-type-name">{attr.name.toUpperCase()}:</h3>
                <div className="attr-row">
                   {attr.items.map(item => {
                       if (attr.type === "swatch") {
                           return (<div onClick={() => handleAttributeSelect({type: attr.type, value: item.displayValue, attributeName: attr.name})} style={{background: `${item.displayValue}`}} className={isSelectedAttribute(item.displayValue, attr.name) ? "item-attr-selected" : "item-attr"}></div>)
                       } else {
                           return (<div onClick={() => handleAttributeSelect({type: attr.type, value: item.displayValue, attributeName: attr.name})} className={isSelectedAttribute(item.displayValue, attr.name) ? "item-attr-selected" : "item-attr"}><p className="item-attr-name">{item.displayValue}</p></div>)
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

    function handleDisabledButtonClick() {
        alert("You need to choose attributes.")
    }

    return( 
        <div className="product-features">
            <h1 className="pr-brand">{product.brand}</h1>
            <h2 className="pr-name">{product.name}</h2>
            {attributesToRender}
            {priceToRender}
            { 
                selectedAttributes.length > 0
                ? <button onClick={handleAddProduct} className="add-to-cart-btn">ADD TO CART</button>
                : <button onClick={handleDisabledButtonClick} className="add-to-cart-btn">ADD TO CART</button>
            }
            <p className="description-product-detail">{product.description.replace(/(<([^>]+)>)/ig, '')}</p>
        </div>
    )
}