import logo from './logo.svg';
import './App.css';

import CustomComponent from './components/myCustom';
import {useState} from 'react'

import Dashboard from './components/dashboard copy';
import User from './components/user';
import Profile from './components/profile';


function App() {


  const [count , setCount] = useState(100)


  const [cities , setCities] = useState([])
  const [inpText , setInpText] = useState('')

  const [showComp , setShowComp] = useState(true)

  



  return (
    <>
      {/* {cities.map((val , index)=>{
        return (
          <>
          <li> {val} </li>
          </>
        )
      })}

    The Current Count is {count}
<br />
<br />
<br /> 


      <input  type='text' value={inpText} onChange={(e)=>setInpText(e.target.value)}  />
    <button onClick={()=>setCities([ ...cities , inpText])} > Add City</button> */}
    

    {/* {showComp ? <CustomComponent /> : 'No Component'}

    <button onClick={()=>setShowComp(!showComp)} >Toggle Component</button> */}


    {/* <Dashboard /> */}


    <button onClick={()=>setShowComp(!showComp)} > Toggle Between Component </button>
<br />
<br />
<br />
<br />

    {showComp ? <User /> : <Profile />}
    




    </>
  );
}

export default App;
