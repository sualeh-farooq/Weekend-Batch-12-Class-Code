import { PrimaryButton } from "./components/button"
import DashboardCard from "./components/dashboard"
import MyList from "./components/list"
import { useState } from "react"

export default function App() {

  // const cities = ['Khi' , 'Ism' , 'Quetta' , 'Peshawar']
  // const countries = ['Pak' , 'India' , 'UAE' , 'UK']



  const [title , setTitle] = useState('HELLO WORLD')
  // const [count , setCount] = useState(0)

  // Vanilla JS Reference
  // const count = 0
  // function countHandler(){
  //   count + 5
  // }

 
  // const [cities , setCities] = useState(['KHI'  , 'ISM'])
  // const [inpState , setInpState] = useState('')
  // const addCity = () =>{ 
  //   setCities([...cities , inpState])
  //   setInpState('')
  // }

  const [count , setCount] = useState(0)
  const [todos , setTodos] = useState([{todo: 'First' , id: count }])
  const [text , setText] = useState('')

  function addTodo() {

    setCount(count + 1)
    setTodos([...todos , {todo: text , id: count}])
  }

  function deleteTodo(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <>
    <ul>
      {todos.map((val , index)=>{
        return (
          <>
          <li key={val.id}> {val.todo} <button onClick={(e)=>deleteTodo(val.id)}>delete</button></li>
          </>
        )
      })}
    </ul>


<input value={text} onChange={(e)=>setText(e.target.value)} type="text" />

<button onClick={addTodo} >Add Todo</button>
    <br />



      
    
   
    {/* <PrimaryButton title='First' />
    <PrimaryButton title='Second' />
    <PrimaryButton title='Third' />
    <PrimaryButton title='Fourth' />
    <MyList data={cities} />
    <MyList data={countries} />
    <DashboardCard name={'John'} email={'John@mail.com'} /> */}

    {/* <h2>The Title is {title}</h2>
    <h5>The count is {count}</h5>
    <button onClick={()=>setCount(count + 5)} > Increment the count of 5 </button> */}




    </>
  )
}