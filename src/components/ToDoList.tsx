import React from 'react'

import { Todo } from '../Model'
import SingleTodo from './SingleTodo';
import './styles.css'
interface Prop{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedToDos:Todo[];
    setCompletedToDos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ToDoList:React.FC<Prop> = ({todos,setTodos,completedToDos,setCompletedToDos}:Prop) => {
  return (
    <div className='todos'>
        <span>Tasks</span>
        {todos.map(todo=>(
            <SingleTodo 
            todo={todo} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
             />
        ))}
    </div>
    
  )
}

export default ToDoList