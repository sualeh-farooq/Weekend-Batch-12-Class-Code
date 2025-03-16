import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function ViewProduct(){

    const {id} = useParams()

    const [product  , setProduct] = useState({})


    const getData =  async ()=>{
            const productData = await fetch(`https://fakestoreapi.com/products/${id}`)
            const productJson = await productData.json()
            setProduct(productJson)
    }

    useEffect(()=>{
            getData()
    },[])
    return (
        <>

        <h1>{product.title}</h1>
       <img width={350} height={500} src={product.image} alt={product.title} />



        
        
        </>
    )
}