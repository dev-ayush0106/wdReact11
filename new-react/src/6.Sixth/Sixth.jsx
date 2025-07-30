import React, { useState } from 'react'

const Sixth = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }


    // console.log(formData)

    let [errors, setErrors] = useState({});
    const validate = () => {
        let newErrors = {};
        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }
        else if (formData.name.trim().length < 3) {
            newErrors.name = "Name length is less than 3"
        }
        else if (formData.name.trim().length > 15) {
            newErrors.name = "Name length is greater than 15"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length===0;
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // to stop the form from refresh
        if (validate()) {
            console.log(formData)
            setFormData({ name: "", age: "", email: "" })
            setErrors({});
        }
    }

    return (
        <div>
            <h1>Manually Form Handling</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>

                <input type="text"
                    name='name'
                    value={formData.name}
                    placeholder='Enter Name'
                    onChange={handleChange} // event
                />

                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

                <br />
                <label >Age:</label>

                <input type="number"
                    name='age'
                    value={formData.age}
                    placeholder='Enter Age'
                    onChange={handleChange}
                />

                <br />

                <label >Email:</label>

                <input type="email"
                    name='email'
                    value={formData.email}
                    placeholder='Enter Email'
                    onChange={handleChange}
                />

                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Sixth
