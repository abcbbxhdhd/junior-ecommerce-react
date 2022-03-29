import React, {useState} from "react"
import "./ProductDetail.css"

export default function ImageCarousel({gallery}) {
    const [currentImage, setCurrentImage] = useState(gallery[0])

    const imagesToRender = gallery.map(img => {
        return <img onClick={() => setCurrentImage(img)} className="image-small-carousel" src={img}></img>
    })

    console.log(currentImage)
    return (
        <div className="image-carousel">
            <div className="image-column">
                {imagesToRender}
            </div>
            <img className="image-big-current" src={currentImage}></img>
        </div>
    )
}   