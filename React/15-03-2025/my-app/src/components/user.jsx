import { useContext } from "react"
import { Context } from "../Context/context"

export default function User(){


    const {count , updateCount} = useContext(Context)
    
    return (
        <>
        The count is {count}
        <button onClick={updateCount}>Update count</button>
        </>
    )
}