import React,{useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDoList from './components/ToDoList';
import { Todo } from './Model';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todo[]>([])
  const [completedToDos,setCompletedToDos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  }
  return (
  
    <div className="App">
      <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {/* {todos.map((t)=>{
          <li>{t.todo}</li>
        })} */}
        <ToDoList 
        todos={todos}
         setTodos={setTodos}
         completedToDos={completedToDos}
         setCompletedToDos={setCompletedToDos}
          />
    </div>
  
  );
}

export default App;
