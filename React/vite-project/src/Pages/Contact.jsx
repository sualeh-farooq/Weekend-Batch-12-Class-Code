import { useState } from "react"
import { Link } from "react-router"
import App from "../App"

export default function Contact(){

    // const [show , setShow ] = useState(true)
    return (
        <>
        <h1>Contact Page</h1>
        <Link  to="/products" >Products</Link> <br />
        <Link  to="/" >Home Us</Link> <br />

        {/* <br />
        <br />
        <h4>App Component Below</h4>
        <button onClick={()=>setShow(!show)} >Toggle App Component</button>

        {show ? <App /> : 'Component Destroyed'} */}
        </>
    )
}