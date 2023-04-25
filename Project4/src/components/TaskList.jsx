import TaskShow from "./TaskShow";

function TaskList({tasks}) {
    return ( 
    <div className="task-list">
        {tasks.map((task , index) => {
            return (
                <TaskShow task = {task}
                key= {index}/>
            )
        })
        }
    </div> 
    );
}
//! kaç tane taskım varsa tasks içersinde tutularak props olarak geldi.
export default TaskList;