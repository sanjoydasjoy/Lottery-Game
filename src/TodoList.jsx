import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {

    // let [todos, setTodos] = useState(["sample Task"]); so instead of array we will use array of object
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        // setTodos([...todos,{task:newTodo,id:uuidv4()}])
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }]
        })
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }
    let deleteTodo = (id) => {
        // let copy = todos.filter((todo) => todo.id != id); // this creates a new array without the deleted item
        setTodos((prevTodos)=>todos.filter((prevTodos) => prevTodos.id != id)) 
    }

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}></input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button> 

                        </li>))
                }
            </ul>
        </div>
    )
}
//  <button onClick={()=>deleteTodo(todo.id)}>delete</button>    creating an arrow function so that function doesnt get executed