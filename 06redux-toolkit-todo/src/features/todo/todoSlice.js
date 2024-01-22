import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[
        {id:1,text:"hello world"}
    ]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

//we need to import to use in component
export const {addTodo,removeTodo} = todoSlice.actions

//for we need to use import in store
export default todoSlice.reducer