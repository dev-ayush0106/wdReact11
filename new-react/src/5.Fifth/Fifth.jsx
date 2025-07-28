import React, { useState } from 'react'
import { useForm } from "react-hook-form"
const Fifth = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors , isSubmitting },
    } = useForm()

    //   let info=[];
    function getData(data) {
        // info.push(data);
        setTimeout(()=>{
            console.log(data)
            reset()
        },2000);
    }
    //   console.log(info)

    return (
        <div>
            <h1>Form Handling</h1>

            <form onSubmit={handleSubmit(getData)}>
                <label htmlFor="">Firstname</label>

                <input type="text"
                    {...register("fname",
                        {
                            required: true,
                            minLength: { value: 3, message: "Minimum 3 Characters" },
                            maxLength: { value: 6, message: "Maximum 6 Characters" }
                        })} />

                {errors.fname && <p style={{ color: "red" }}>{errors.fname.message}</p>}
                <br />
                <label htmlFor="">Second Name</label>
                <input type="text"
                    {...register("sname",
                        {
                            required: true,
                            minLength: { value: 3, message: "Minimum 3 Characters" },
                            maxLength: { value: 6, message: "Maximum 6 Characters" }
                        }
                    )} />
                {errors.sname && <p style={{ color: "red" }}>{errors.sname.message}</p>}
                <br />
                <input type="submit" disabled={isSubmitting}/>
            </form>

        </div>
    )
}

export default Fifth
