import React,{useState} from "react";
export const TodoForm = ({addTodo}) => {
    const [value,Setvalue] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTodo(value)
        Setvalue(" ")
    }
    return(
        <form className="TodoForm" onSubmit={handleSubmit}> 
         <input type="text" className="todo-input"value={value} placeholder="What is the task today?" onChange={(e) => Setvalue(e.target.value)}></input>
            <button type="submit" className="todo-btn">Add Task</button>
            </form>
            
        
    )
}