import "./formSelectTask.css"

function FormSelectTask(props) {
    const {prevTaskList, type, selectChange} = props
    
    function handleSelectChange(e) {
        let task = null
        if (e.target.selectedIndex > 0) {
            task = prevTaskList[e.target.selectedIndex - 1]
            selectChange(task.id, type)
        }
    }
    return ( 
        <form className='taskList-selecttask' >
            <select defaultValue={'DEFAULT'} className="taskList-select" onChange={handleSelectChange}>
                <option value='DEFAULT' disabled className="taskList-option">Select task</option>
                {prevTaskList.map((task) => {
                    return <option className="taskList-option" key={task.id}>{task.title}</option>
                })}
            </select>
        </form>
     );
}

export default FormSelectTask;