import { useQuery } from "@apollo/client"
import React, {useState, useEffect} from "react"
import { useSelector} from "react-redux"
import { GET_PRODUCTS_BY_CATEGORY } from "../../common/queries"
import ProductImage from "./ProductImage"
import "./Mainpage.css"

export default function ProductsGrid() {
    const currentCategory = useSelector(state => state.currentCategory)
    const currentCurrency = useSelector(state => state.currentCurrency)
    const {data, error, loading} = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            categoryName: currentCategory
        }
    })

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (data) {
            setProducts(data.category.products)
        } 
    }, [data])

    const productsToRender = products.map(product => {
        const price =  product.prices.find(price => price.currency.label === currentCurrency.label)
        return <ProductImage 
                    id={product.id} 
                    imgUrl={product.gallery[0]} 
                    name={product.name} 
                    inStock={product.inStock}
                    price={{symbol: product.prices[0].currency.symbol, amount: product.prices[0].amount}}/>
    })

    return (
        <div className="products-grid">
            <h1 className="category-main-title">{currentCategory.toUpperCase()}</h1>
            <div className="image-description-grid">
                {productsToRender}
            </div>
        </div>
    )
}