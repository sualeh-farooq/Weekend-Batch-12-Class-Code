import { Link } from 'react-router'
import './App.css'
import { useState , useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function App() {
  const [city , setCity] = useState([])
  const [inpText , setInpText] = useState('')
  const [value, setValue] = useState('');

  // useEffect(()=>{
  //   console.log('I will run on every render')
  // })


  // useEffect(()=>{
  //   // console.log('I will run on only once , when mount')
  //   return ()=> {
  //     console.log('I will run on Unmount')
  //   }
  // } , [] )
  
  // useEffect(()=>{
  //   console.log('I will run when city changed')
  // } , [city] )


  

  return (
    <>
    <ul>
      {city.map((val , index)=>{
        return (
          <>
          <li key={index} >{val}</li>
          </>
        )
      })}
    </ul>


<input type='text' value={inpText} onChange={(e)=>setInpText(e.target.value)} />

     <button onClick={()=>setCity ([...city , inpText])} >Add City</button>


     <h1>Home Page</h1>

     <Link  to="/products" >Products</Link> <br />
     <Link  to="/contact" >Contact Us</Link> <br />


    <ReactQuill theme="snow" value={value} onChange={setValue} />

    </>
  )
}

export default App
