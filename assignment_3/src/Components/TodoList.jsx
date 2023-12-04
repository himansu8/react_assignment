import { useState } from "react"

function TodoList() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    function addTasks() {
        //console.log('task to be add')
        if (task.trim() !=='') {
            const list = [...tasks, task];
            setTasks(list)
            setTask('')
        }
    }
    function onChangeHandler(e) {
        setTask(e.target.value);
    }
    function deleteTasks(index) {
        const newList = [...tasks];
        newList.splice(index, 1)
        setTasks(newList)
    }
    return (
        <>
            <div>TodoList</div>
            <input type="text" placeholder="Enter Something" onChange={onChangeHandler} value={task} />
            <br />
            <button onClick={addTasks}>ADD TASK</button>

            {tasks.map((ele, index) => {
                return (
                    <ul key={index}>
                        <li >{ele}</li>
                    </ul>
                )
            })}
            <button onClick={deleteTasks}>DELETE TASK</button>

        </>
    )
}

export default TodoList