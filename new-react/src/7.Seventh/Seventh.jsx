import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify';
const Seventh = () => {
  let [todo, setTodo] = useState([]); // where al, the todo are stored
  let [title, setTitle] = useState(""); // stores the value of input

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(), // random id generate
      title,
      isCompleted: false
    }

    let copyTodo = [...todo]; // created new variable and copy element in that
    copyTodo.push(newTodo); // push the newTodo to the new varaible
    setTodo(copyTodo) // set

    // setTodo([...todo],newTodo)
    setTitle('');
    toast.success("Todo Created")

  }

  const toggleTask = (id) => {
  setTodo((prevTodo) =>
    prevTodo.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    )
  );
  
};
  console.log(todo);

const deleteTodo=(id)=>{
  let filteredTodo=todo.filter((t)=> t.id!==id); // filter function helps us to filterout the match
  setTodo(filteredTodo);
  toast.error("Todo Deleted")
}

  return (
    <div>
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit} action="">
        <input type="text"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }} />
        <input type="submit" />
      </form>
      <ul>
        {
          todo.map((el) => {
            return (
              <>
              <li className={(el.isCompleted)?"line":""} onClick={() => { toggleTask(el.id) }} id={el.id}>{el.title}
              </li>
              <button onClick={()=>{deleteTodo(el.id)}}>Delete Task</button>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Seventh
