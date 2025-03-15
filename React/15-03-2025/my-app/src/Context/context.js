
// first 
import { createContext, useState } from "react";

// second
export const Context = createContext()


export function MyProvider({children}){

    const [count , setCount]  = useState(0) // Global State 


    const store = {
        count , 

        updateCount: ()=>setCount(count + 1)
    }


    return (
        <>
        <Context.Provider value={store} >
            {children}
        </Context.Provider>
        </>
    )
    
}