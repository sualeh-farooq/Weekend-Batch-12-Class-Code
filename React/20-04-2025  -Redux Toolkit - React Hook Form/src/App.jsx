import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from './redux/features/counter/counterSlice'
import { useState } from 'react'
import { addTodo, deleteTodo } from './redux/features/todos/todosSlice'
import AppForm from './form'


function App() {

  const [inpText , setInpText] = useState('')

  const {count} = useSelector((state)=>state.counter)
  const {todos} = useSelector((state)=>state.todos)
  const dispatch = useDispatch()

  function handleInc() {
    dispatch(incrementCount())
  }


  function handleDec() {
    dispatch(decrementCount())
  }

  const randomUniqueId  = new Date().getTime()

  function handleAdd() {
    dispatch(addTodo({id: randomUniqueId , todoText: inpText}))
    setInpText('')
  }

  function handleDelete(id) {
      dispatch(deleteTodo(id))
  }

  return (
    <>
      
      <div className="card">
        {/* <button  onClick={handleDec} >
         Decrement -
        </button>
        <p>
        count is {count}
        </p>
        <button onClick={handleInc} >
         Increment +
        </button> */}


        {/* <input type='text' value={inpText} onChange={(e)=>setInpText(e.target.value)}  /> 
          <br />
          <button onClick={handleAdd}>ADD todo</button>

          <br />
          <br />

          <h6>List of Todos</h6>
            {todos?.map((val , index)=>{
              return (
                <li key={val.id} > {val.todoText} <button  onClick={()=>handleDelete(val.id)} > Delete </button>  </li>
              )
            })}


      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

<AppForm />
      </div>
    </>
  )
}

export default App
