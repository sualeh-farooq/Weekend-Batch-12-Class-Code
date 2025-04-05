import { useEffect, useState , useContext } from "react"
import { Link, useParams } from "react-router"
import { AppContext } from "../Context/store"

export default function ProductView(){
    const {id} = useParams()
    const [productInfo , setProductInfo] = useState({})

       const MyContext = useContext(AppContext)
    
        const {products , updateProducts } = MyContext
    


    useEffect(()=>{
      const filteredProduct = products.filter((data)=>data.id == id)
      setProductInfo(filteredProduct[0])
    },[])
    return (
        <>
        <h3> {productInfo.title}</h3>

        <img src={productInfo.image} width={300} />

        <br />

        <p>The Price is {productInfo.price} </p>
        <br />


        <Link to="/products" >Back to products</Link>


        
        </>
    )
}