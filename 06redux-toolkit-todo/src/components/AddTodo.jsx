import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input,setInput]=useState("")

    const dispatch=useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <div>
        <h2>AddTodo</h2>
        <form className='bg-dark text-white px-3 py-3 rounded'>
            <input type="text" className='form-control' placeholder='Enter Todo' value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type='submit' onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </form>
        
    </div>
  )
}

export default AddTodo