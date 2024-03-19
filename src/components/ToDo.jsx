
import { useEffect,useState } from 'react';
import './ToDo.css';
import TodoElement from './TodoElement';

export default function Todo() {
    const [taskList, setTaskList] = useState([]);
    const [task,setTask] = useState('');

    function addTask(){
        setTaskList([...taskList,task]);
        setTask('');
    }
    function deleteTask(taskIndex){
        setTaskList(taskList.filter((item) => item != taskList[taskIndex]));
    }

    return (
        <div id="todo_container">

            <div id="input_container">
                <input type="text" placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} value={task}/>
                <div id="add_button" onClick ={() => addTask()}>Add</div>
            </div>

            <div id="todos">
                
            {
                taskList.map((item,index) => {
                    return <TodoElement task={item} key={index} taskId={index} deleteFunction={deleteTask} />
                })
            }
                
            </div>

        </div>
    )
}