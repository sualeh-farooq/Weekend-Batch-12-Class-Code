import { useEffect  , useState } from "react"


export default function CustomComponent() {
  const [count , setCount] = useState(100)

  const [cities , setCities] = useState([])



    // useEffect(()=>{
    //     console.log('I will run on every render') // updation 
    // })

    useEffect(()=>{
        console.log('I will run on just first render')

        return ()=>{
            console.log('I will run on onmount')
        }
    } , [])


    // useEffect(()=>{
    //     console.log('I will run when cities state changed/updated')
    // } , [cities])



    return (
    <>
    {cities.map((val , index)=>{
        return (
          <>
          <li> {val} </li>
          </>
        )
      })}

    The Current Count is {count} <br /> <br />
    <button onClick={()=>setCount(count + 1)} > Update Count</button> 


    <button onClick={()=>setCities([ ...cities , 'Karachi'])} > Add City</button>

    
    </>
)
}