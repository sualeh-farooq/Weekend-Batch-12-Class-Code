import { Link } from "react-router";

export default function ContactPage(){
    return (
        <>
        <h1>Contact Page here</h1>

        <Link to="/about" >Go to About</Link>
        <Link to="/" >Go to Home</Link>
        </>
    )
}