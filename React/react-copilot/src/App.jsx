import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CopilotKit } from '@copilotkit/react-core'
import { CopilotChat, CopilotSidebar } from '@copilotkit/react-ui'
import { CopilotPopup } from '@copilotkit/react-ui'
import "@copilotkit/react-ui/styles.css";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      <h1>Vite + React</h1>

     
      <CopilotKit publicApiKey='ck_pub_9b933d3edb0ac1818484cc18f54cbfa2' >   
        <CopilotSidebar labels={{
    title: "Loan Assistant",
    initial: "Hi! 👋 How can I assist you today?",
  }} />
      </CopilotKit>
      </div>
    </>
  )
}

export default App
