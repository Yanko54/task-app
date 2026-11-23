import { useState } from 'react';
import { TaskTabs } from './components/TaskTabs/TaskTabs';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import type { Task } from './types/task';
import type { TaskTab } from './types/tabs';

function App() {
  // state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<TaskTab>('all');

  // タスク追加
  const handleAddTask = (title: string, desc: string) => {
    if (title.trim() === '') return;
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title,
      desc: desc,
      completed: false,
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <>
      <TaskTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} activeTab={activeTab} />
    </>
  );
}

export default App;
