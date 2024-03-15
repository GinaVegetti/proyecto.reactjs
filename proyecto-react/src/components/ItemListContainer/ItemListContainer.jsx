import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => { 

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId )
        .then(result=>{
            setProducts(result)
        })
    },[categoryId ])

    return (
        <div>
        <h1 style={{ color: 'white',margin: 5, fontSize: 25, display:'flex', justifyContent:'center', background:'black'}}>{props.saludo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer