import { useState } from "react";
import { TaskTabs } from "./components/TaskTabs/TaskTabs";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskItem } from "./components/TaskItem/TaskItem";
import type { Task } from "./types/task";
import type { TaskTab } from "./types/tabs";

function App() {
  // state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<TaskTab>("all");

  const handleAddTask = (title: string, description: string) => {
    if (title.trim() === "") return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      description: description,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} activeTab={activeTab} />
      <TaskItem />
    </>
  );
}

export default App;
