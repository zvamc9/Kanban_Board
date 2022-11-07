import React from 'react'
import './taskDetail.css'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function TaskDetail(props) {
    const params = useParams()
    const tasksList = JSON.parse(localStorage.getItem("todo"))
    const task = tasksList.find((task) => task.id === params.taskId)

    const [description, setDescription] = useState(task && task.description.length > 0 ? task.description : 'This task has no description')
    const handleFocus = () => {
        if (description === 'This task has no description') {
            setDescription('')
        }
    }
    const handleExitClick = () => {
        const newTasksList = tasksList.map(t => {
            if (t.id === task.id) {
                t.description = description === 'This task has no description' ? '' : description
            }
            return t
        })
        window.localStorage.setItem('todo', JSON.stringify(newTasksList))
    }
    return ( 
        <div className="taskdetail">
            <div className="taskdetail-content">
                <div className="taskdetail-title">{task.title}</div>
                <textarea value = {description} onChange={(e) => setDescription(e.target.value)} className="taskdetail-description" onFocus={handleFocus}/>
            </div>
            <Link to='/' onClick={handleExitClick}><div className="taskdetail-exit"></div></Link>
        </div>
     );
}

export default TaskDetail;