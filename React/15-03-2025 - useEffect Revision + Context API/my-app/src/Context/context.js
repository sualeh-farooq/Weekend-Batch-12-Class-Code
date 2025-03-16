
// first 
import { createContext, useState } from "react";

// second
export const Context = createContext()


export function MyProvider({children}){

    const [count , setCount]  = useState(0) // Global State 

    const [products , setProducts] = useState([])


    const store = {
        count , 
        products ,
        updateCount: ()=>setCount(count + 1),
        updateProducts: (data)=>setProducts(data)
    }


    return (
        <>
        <Context.Provider value={store} >
            {children}
        </Context.Provider>
        </>
    )
    
}