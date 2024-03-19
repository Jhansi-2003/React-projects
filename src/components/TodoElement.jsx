export default function TodoElement({ task, deleteFunction, taskId}) {
    return (
        <div className="todo">
            <p>{task}</p>
            <div className="delete_button" onClick={() => deleteFunction(taskId)}>Del</div>
        </div>
    )
}