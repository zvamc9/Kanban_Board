import React from 'react';
//import { useState } from 'react';
import './formToDoTask.css'


function FormToDoTask(props) {
    const { formSubmit, setFormOpen, value, setValue } = props


    const handleChange = e => {
        const fieldName = e.target.name
        setValue({...value, [fieldName]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (value.title) {
            formSubmit(value.title, value.description)
        }
        setFormOpen(false)
    }

    return ( 
        <form className='taskList-addtask' onSubmit={handleSubmit}>
            <input 
                value={value.title} 
                name='title'
                type='text'
                placeholder="New task" 
                onChange={handleChange} 
                className="taskList-input"/>
            <button 
                type='submit'
                className="taskList-subbtn">
                Submit
            </button>
        </form>
     );
}

export default FormToDoTask;