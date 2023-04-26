import TaskShow from "./TaskShow";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow task={task} key={index} onDelete={onDelete} onUpdate={onUpdate} />;
      })}
    </div>
  );
}
//! kaç tane taskım varsa tasks içersinde tutularak props olarak geldi.
export default TaskList;
