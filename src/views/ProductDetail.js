import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { GET_PRODUCT_BY_ID } from "../common/queries"
import { useQuery } from "@apollo/client"
import ImageCarousel from "../components/product-detail/ImageCarousel"
import ProductFeatures from "../components/product-detail/ProductFeatures"
import Header from "../components/header/Header"
import "../components/product-detail/ProductDetail.css"

export default function ProductDetail() {
    const {productId} = useParams()
    const {data, loading, error} = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            productId
        }
    })
    const [product, setProduct] = useState()

    useEffect(() => {
        if (data) {
            setProduct(data.product)
        }
    }, [data])

    if (!product) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Header />
            <div className="sections-flex">
                <ImageCarousel gallery={product.gallery}/>
                <ProductFeatures product={product}/>
            </div>
            </>
    )
        
}