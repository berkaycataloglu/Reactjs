import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  //! deleteTaskById içersinde silmemiz gereken taskı child->parennt props aktarımıyla id'sini aldıktan sonra
  //! id leri karşılaştırıp , elimizdeki id ye eşit olmayanları setTask ile tekrar yazdırmaktır amaç.

  const editTasksById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          title: updatedTitle,
          taskDesc: updatedTaskDesc,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTasksById} />
    </div>
  );
}

export default App;
