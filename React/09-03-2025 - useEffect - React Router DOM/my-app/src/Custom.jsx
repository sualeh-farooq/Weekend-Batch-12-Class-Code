import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function CustomComponent() {


  const [count , setCount] = useState(0)


  const [cities , setCities] = useState([])
  const [city , setCity] = useState('')
  const [products , setProducts] = useState([])




  // This will run on every trigger in the component , every re-rendering of the component  -- Updation
  useEffect(()=>{
    console.log('I will run on every render')
  })


  async function getData() {
    const response = await fetch('https://fakestoreapi.com/products')
    const responseJson = await response.json()
    setProducts(responseJson)
  }
  // This will run only once on first render of the component - Mount
  useEffect(async ()=>{
      console.log('I will run only once on first render')


     getData()
      // Clean function of useEffect
      return () => {
        console.log('I will run on unmount')
      }



  } , [])


  // this will run when it's dependent state changes
  useEffect(()=>{
    console.log('A New City is Added in the List - Depended UseEffect')
  } , [cities])


  function addCity(){
    setCities([...cities , city])
  }

  return (
    <>
    {products.map((val , ind) =>{
        return (
            <>
            <li> {val.title} </li>
            </>
        )
    })}


{
  cities.map((val , index) =>{
    return (
      <>
  <li key={index} >{val}</li>
      </>
    )
  })
}

<br />
<br />
<br />
<br />

    <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} />
    <br />
    <br />
    <br />

    <button onClick={addCity} >Add City   </button>


    The Count is {count}
    <br /><br />
      <button onClick={()=>setCount( count + 2)} > Increment the Count  </button>
    
    </>
  );
}

export default CustomComponent;
