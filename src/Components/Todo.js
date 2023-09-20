"use client"
import React,  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';


const Todo = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const {todos} = useSelector((state)=>state.todos);
    const save = (value) =>{
        dispatch(addTodo({
            id:Math.random(),
            value
        }))
        setInputValue('')
    }
  return (

    <>
        
           <div className='bg-gray-500 mx-w-screen mx-auto  items-center flex justify-center mt-3'>
           <input type="text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
            <button onClick={(e)=> save(inputValue)}> submit</button>
           </div>
        {
            todos.map((todo)=>(
                <p key={todo.id}> {todo.value}</p>
            ))
        }        
    </>
        
  )
}

export default Todo
