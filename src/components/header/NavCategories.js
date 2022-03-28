import React, { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentCategory } from "../../redux/reducers/categoryReducer"
import { GET_CATEGORIES } from "../../common/queries"
import { useQuery } from "@apollo/client"

export default function NavCategories() {
    
    const {error, loading, data} = useQuery(GET_CATEGORIES)
    const currentCategory = useSelector(state => state.currentCategory)
    const dispatch = useDispatch()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (data) {
            setCategories(data.categories)
        }
    }, [data])

    console.log(currentCategory)

    const categoriesToRender = categories.map(category => {
        return <h2 
                    className={currentCategory === category.name ? "nav-header-one_focused" : "nav-header-one"} 
                    onClick={() => dispatch(setCurrentCategory(category.name))}
                >{category.name.toUpperCase()}</h2>
    })
    
    return (
        <div className="nav-categories">
           {categoriesToRender}
        </div>
    )
}