import User from "./user"

import { useContext, useState , useEffect } from "react"
import { Context } from "../Context/context"
export default function Profile(){
        const {count , updateCount , products} = useContext(Context)

        const [myProduct , setMyProduct] = useState({})

        const id = 5


        useEffect(()=>{

            console.log(products.filter((data)=>data.id === id))
            setMyProduct(products.filter((data)=>data.id === id))
        },[])
    
    return (
        <>
        Profile Page <br />

         The count is {count}
         <button onClick={updateCount}>Update count</button>

         <br /> <br/>

         {myProduct[0].title}
        </>
    )
}