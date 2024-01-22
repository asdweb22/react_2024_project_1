import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), task: todo };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo('');
  };



  useEffect(()=>{
    window.localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  useEffect(() => {
    // Load todos from localStorage when the component mounts
    const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("Loaded todos from localStorage:", localTodos);
    setTodos(localTodos);
  }, []); 



  return (
    <>
     <h1 className="text-3xl font-bold underline">
      ToDO App
    </h1>
    
    <form className='bg-dark text-white py-5 px-5 rounded shadow'>
      <input type="text" className='form-control' placeholder='Enter todo' onChange={(e)=>setTodo(e.target.value)} value={todo} />
      <br /><button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
    </form>

<br />
    <h2>Todo List: </h2>
    <hr />
    {
      todos.length>0 ?todos.map((item)=>(
        <div key={item.id}  className='bg-primary rounded py-3 px-3 mt-2 todo-item'>
          <span>
            
          <p className='text-3xl text-white'  >{item.task}</p>
          </span>
          <span>
          <button className='btn btn-info edit-button'>Edit</button>
          <button className='btn btn-danger delete-button'>Delete</button>
          </span>
        </div>
      )):"Sorry we don't have a todo "
    }

    </>
  )
}

export default App
