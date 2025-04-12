// ********************************************************* USE MEMO HOOK WORK ****************************************************



// import { useState , useMemo } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   const [inpVal , setInpVal] = useState(0)

//   const [num , setNumbers] = useState([])

//   function someExpensiveCalculation(num){
//     for(var i=0; i < 1000000000; i++) {}
//     console.log('Doing expensive calculation')
//     return num*2
//   }
//   // let someData =  someExpensiveCalculation(4) 
//   let someData = useMemo(()=> someExpensiveCalculation(inpVal) , [inpVal])


//   function handleChange(e) {
//     setNumbers([...num , inpVal])
//   }
//   return (
//     <>

//       <div className="card">
//       <h3>  count is {count}</h3>
//         <button onClick={() => setCount((count) => count + 1)}>
//         Increment the Count
//         </button>
//         <br />

//         <input type='number' value={inpVal}  onChange={(e)=>setInpVal(e.target.value)} />
//         <br />   The Result is {someData}
//         <button  onClick={handleChange}>Set Value</button> 
//         <br />
//         {num.map((val , index)=>{
//           return (
//             <>
//             <li> {val} </li>
//             </>
//           )
//         })}
//       </div>

//     </>
//   )
// }

// export default App






// ********************************************************* USE CALLBACK HOOK WORK ****************************************************

import { useState , useCallback } from "react"
import ChildComponent from "./ChildComp"
import { useNavigate } from "react-router-dom"


export default function App() {
  const [count, setCount] = useState(0)


  const pageNavigate = useNavigate()

  const buttonClick = () =>{
    console.log('clicked')
    setTimeout(() => {
    pageNavigate('/contact')
   }, 3000);
  }
  

  return (
    <>
   <div className="card" >
   <h3>  count is {count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment the Count
      </button>
      <br />
      <br />
      <p>Below is the child component</p>
      <button onClick={buttonClick} >Navigate to Contact after 3 seconds</button>
      <ChildComponent />
   </div>
    </>
  )
}