import { useState } from "react";
import CustomComponent from "./Custom";
import { Link } from "react-router";

export default function App(){
  const [showComponent , setShowComponent] = useState(true)



  return (
    <>
    
    {showComponent ? <CustomComponent /> : 'No Component here'}


<br />
<br />
<br />
<br />
    <button  onClick={()=>setShowComponent(!showComponent)} >Toggle My Component</button>


    <Link to="/contact" >Go to Contact</Link>
        <Link to="/about" >Go to About</Link>
    </>
  )
}