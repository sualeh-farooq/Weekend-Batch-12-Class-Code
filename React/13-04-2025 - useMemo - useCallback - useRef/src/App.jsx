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

// import { useState , useCallback } from "react"
// import ChildComponent from "./ChildComp"
// import { useNavigate } from "react-router-dom"


// export default function App() {
//   const [count, setCount] = useState(0) 
//   const pageNavigate = useNavigate()
  
//   const buttonClick = useCallback(() =>{
//     setCount((count) => count + 1)
//   }  , [])




//   return (
//     <>
//    <div className="card" >
//    <h3>  count is {count}</h3>
//       <button onClick={buttonClick}>
//         Increment the Count
//       </button>
//       <br />
//       <br />
//       <p>Below is the child component</p>
//       <ChildComponent handleChange={buttonClick} title="Click Me"  />
//    </div>
//     </>
//   )
// }

// ********************************************************* USE REF HOOK WORK ****************************************************



import { useState , useCallback, useRef } from "react"
import ChildComponent from "./ChildComp"
import { useNavigate } from "react-router-dom"


export default function App() {
  const [count, setCount] = useState(0) 


  // let myNum = useRef(0)
  // function buttonClick() {
  //   myNum.current = myNum.current + 1
  //   console.log(myNum)
  // } 



  let buttonRef = useRef()

  function buttonClick() {
    buttonRef.current.style.backgroundColor = "#000"
    buttonRef.current.style.backgroundColor = "#000"
  }


  return (
    <>
   <div className="card" >
   {/* <h3>  count is {myNum.current}</h3> */}
      <button ref={buttonRef} >
        Increment the Count
      </button>
      <br />
      <br />
      <p>Below is the child component</p>
      <ChildComponent handleChange={buttonClick} title="Change Button Color"  />
   </div>
    </>
  )
}