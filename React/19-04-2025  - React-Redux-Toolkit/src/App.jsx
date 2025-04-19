import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { decrementCount, incrementCount , updateByNumber } from './redux/features/counter/counterSlice'
import { useState } from 'react'


function App() {


  const [inpNumber , setInpNumber] = useState(0)

  const {count , name} = useSelector((state)=>state.counter)

  const dispatch = useDispatch()

  function handleInc() {
      dispatch(incrementCount())
  }

  function handleDec() {
    dispatch(decrementCount())
}

function updateCountWithNum() {
dispatch(updateByNumber(inpNumber))
}
 
  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
      <button onClick={handleDec}>
          Decrement
        </button>
        <p>The Count is {count}</p>
        <button onClick={handleInc}>
          Increment
        </button>
        <input type='number'  value={inpNumber} onChange={(e)=>setInpNumber(e.target.value)} placeholder='Any nUmber'  />
      </div>

      <button onClick={updateCountWithNum} >Update Input in Count</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
