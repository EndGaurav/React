import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice';


const Todos = () => {
    const todos = useSelector(state => state.todos);
    
    const dispatch = useDispatch()

    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >❌</button>
                </li>
            ))}
        
        </>
    )
}

export default Todos