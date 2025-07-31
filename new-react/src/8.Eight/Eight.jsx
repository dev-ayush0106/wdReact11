import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Eight = () => {
    let [todo,setTodo]=useState([]);
    const{
        handleSubmit,
        register,
        reset,
        formState:{errors}
    }
    =useForm()

    function getTodo(data){
        data.id=nanoid();
        data.isCompleted=false;
        console.log(data)
        setTodo([...todo,data]);
        reset()
    }
    console.log(todo);
  return (
    <div>
        <h1>Create Todo</h1>
      <form action="" onSubmit={handleSubmit(getTodo)}>
        <input type="text" {...register("title")} />
        <input type="submit" />
      </form>
      <ul>
        {
            todo.map((el)=>{
                return(
                    <div>
                        <li>{el.title}</li>
                    </div>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Eight
