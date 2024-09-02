import React,{useState} from "react";
export const EditTodoForm = ({editTodo,task}) => {
    const [value,Setvalue] = useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        editTodo(value, task.id)
        Setvalue(" ")
    }
    return(
        <form className="EditTodoForm" onSubmit={handleSubmit}> 
         <input type="text" className="todo-input"value={value} placeholder="Update task" onChange={(e) => Setvalue(e.target.value)}></input>
            <button type="submit" className="todo-btn">Update Task</button>
            </form>
            
        
    )
}