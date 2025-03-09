import { Link } from "react-router"
export default function AboutPage(){
    return (
        <>
        <h1>About Page here</h1> <Link to="/contact" >Go to Contact</Link>
        <Link to="/" >Go to Home</Link>
        </>
    )
}