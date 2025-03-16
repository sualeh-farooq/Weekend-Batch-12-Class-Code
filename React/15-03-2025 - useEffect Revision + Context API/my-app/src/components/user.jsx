import { useContext } from "react"
import { Context } from "../Context/context"
import { useEffect } from "react"


export default function User(){
    const {count , updateCount , products , updateProducts} = useContext(Context)


    async function CallTheData() {
        const response = await fetch('https://fakestoreapi.com/products')
        const responseJson = await response.json()

        updateProducts(responseJson)


    
    }


    useEffect(()=>{
        CallTheData()
    },[])

    
    return (
        <>

        User Page <br />
        The count is {count}
        <button onClick={updateCount}>Update count</button>

        <br />
        <br />

        {products.map((val , index)=>{
                    return (
                        <>
                <li key={val.id} > {val.title}    </li>
                        </>
                    )
                })}
        </>
    )
}