import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const Seventh = () => {
    let [todo, setTodo] = useState([]);
  let [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false
    }

    let copyTodo = [...todo]; // created new variable and copy element in that
    copyTodo.push(newTodo); // push the newTodo to the new varaible
    setTodo(copyTodo) // set

    // setTodo([...todo],newTodo)
    setTitle('');

  }

  const toggleTask = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((t) => t.id === id ? { ...t, isCompleted: !todo.isCompleted } : t)
    );
    console.log(todo);
  }
  console.log(todo);

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
              <li onClick={() => { toggleTask(el.id) }} id={el.id}>{el.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Seventh
