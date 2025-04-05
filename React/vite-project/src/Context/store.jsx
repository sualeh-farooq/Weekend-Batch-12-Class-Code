import { createContext , useState} from "react";

export const AppContext = createContext()


export default function AppStore({children}){
    const [products , setProducts] = useState([])



    const store = {
        products , 
        updateProducts: (payload)=>setProducts(payload)
    }

    return (
        <AppContext.Provider value={store}>
                {children}
        </AppContext.Provider>
    )
}