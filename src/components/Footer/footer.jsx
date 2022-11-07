
import './footer.css'
import { LIST_TYPES } from '../ConstData/constData.js'
function Footer(props) {
    const {todo} = props
    const activeTasks = todo.filter(task => task.type === LIST_TYPES.BACKLOG)
    const finishedTasks = todo.filter(task => task.type === LIST_TYPES.FINISHED)
    return ( 
        <footer className="footer">
            <div className="footer-left">
                <p className="footer-text">Active tasks: {activeTasks.length}</p>
                <p className="footer-text">Finished tasks: {finishedTasks.length}</p>
            </div>
            <div className='footer-right'>
                <p className='footer-text'>Kanban Board by VladiMir, 2022</p>
            </div>
        </footer>
     );
}

export default Footer;