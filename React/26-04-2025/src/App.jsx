import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavExample from './components/Nav'

import HookForm from './components/HookForm'

function App() {
  const [count, setCount] = useState(0)

  const [name , setName] = useState('')

  function receiveData(firstParam) {

    console.log(firstParam)
    setName(firstParam)
  }

  return (
    <>



{/* 
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className='border border-2 mt-2' >
        <NavExample sendData={receiveData} linkName="Home" />
      </div> */}


      <HookForm />

    </>
  )
}

export default App
