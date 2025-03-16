import { useEffect, useState } from "react"
import { Link } from "react-router"


export default function Products() {

    const [products , setProducts] = useState([])

    async function CallTheData() {
        const response = await fetch('https://fakestoreapi.com/products')
        const responseJson = await response.json()

        console.log(responseJson)

        setProducts(responseJson)
    }

    useEffect(()=>{
        CallTheData()
    },[])
    return (
        <>
                {products.map((val , index)=>{
                    return (
                        <>
                <li key={val.id} > {val.title}  <Link to={`/product/${val.id}`} >View Products</Link>  </li>
                        </>
                    )
                })}
        </>
    )
}