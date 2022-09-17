import React,{useState,useRef,useEffect} from 'react'
import { Todo } from '../Model'
import {AiFillEdit,AiFillDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"
import './styles.css'
// to understand both type and interface 
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo,todos,setTodos}:Props) => {
    const [edit,setEdit] = useState<boolean>(false)
    const [edittodo,setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id:number) =>{
        setTodos(
            todos.map((todo)=>(todo.id === id ? {...todo,isDone:!todo.isDone} : todo))
            )
    }
    const handleDelete = (id:number) =>{
        setTodos(
            todos.filter((todo)=>todo.id!==id)
        )
    }
    const handleSubmit = (e:React.FormEvent,id:number) =>{
        e.preventDefault()
        setTodos(todos.map((todo)=>(
            todo.id === id ? {...todo,todo:edittodo} : todo
        )))
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[edit])
  return (
    <form className="todos__single" onSubmit={(e)=>handleSubmit(e,todo.id)}>

        {edit?(
            <input ref={inputRef} value={edittodo} onChange={(e)=>setEditTodo(e.target.value)} 
            className="todos__single--text"
            />
        ):(
            todo.isDone ? (
                <s className='todos__single--text'>
                    {todo.todo}
                </s>
            ):
                <span className='todos__single--text'>
                    {todo.todo}
                </span>
        )}
       
        
        <div>
            <span className="icon" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit)
                }
            }
            }>
                <AiFillEdit />
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo