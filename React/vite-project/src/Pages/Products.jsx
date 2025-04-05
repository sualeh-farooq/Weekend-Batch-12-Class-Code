import { useEffect, useState } from "react"
import { Link } from "react-router"
import { FaEye } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../Context/store";

export default function Products() {


    const MyContext = useContext(AppContext)

    const {products , updateProducts } = MyContext

    // const [products, setProducts] = useState([])

    const [isLoading , setIsLoading] = useState(false)

    async function getData() {
        setIsLoading(true)
        const data = await fetch('https://fakestoreapi.com/products')
        const response = await data.json()
        updateProducts(response)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <h1>Products Page</h1>


            <Link to="/contact" >Contact</Link> <br />
            <Link to="/" >Home Us</Link> <br />



            {isLoading ? 'Product List is Loading' : products.map((val , index)=>{
                return (
                    <>
                    <li> {val.title}  <Link to={`/productview/${val.id}`} ><FaEye color="#000" size={15} /></Link> </li>
                    </>
                )
            })}
        </>
    )
}