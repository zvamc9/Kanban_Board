import React from 'react';
import './main.css'
import TaskListContainer from '../TaskListContainer/taskListContainer';
import TaskDetail from '../TaskDetail/taskDetail';
import { Route, Routes } from 'react-router-dom'

function Main(props) {
    const {todo, setToDo} = props
    return ( 
        <main className='main'>
            <Routes>
                <Route exact path={'/'} element={<TaskListContainer todo={todo} setToDo={setToDo}/>} />
                <Route path={'/tasks/:taskId'} element={<TaskDetail todo={todo} setToDo={setToDo}/>} />
            </Routes>
        </main>
     );
}

export default Main;