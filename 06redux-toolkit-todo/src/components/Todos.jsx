import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

  return (
    <div className='bg-light mx-auto py-3 px-3'>
        <h2> All Todos</h2>
        {
            todos.map((todo)=>(
                <li key={todo.id} className='bg-dark text-white py-2 px-2 rounded mt-2'>
                    {todo.text} {" "}
                    <button className="btn btn-danger" onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
                </li> 
            ))
        }
    </div>
  )
}

export default Todos