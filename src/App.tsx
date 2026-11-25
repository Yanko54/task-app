import { useState } from 'react';
import { TaskTabs } from './components/TaskTabs/TaskTabs';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskList } from './components/TaskList/TaskList';
import type { Task } from './types/task';
import type { TaskTab } from './types/tabs';

function App() {
  // state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTab, setActiveTab] = useState<TaskTab>('incomplete');

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

  // タスク完了/未完了トグル
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // タスク未完了／完了／すべてのタスク絞り込み
  const getActiveTabTasks = (): Task[] => {
    if (activeTab === 'incomplete')
      return tasks.filter((task) => !task.completed);
    if (activeTab === 'completed')
      return tasks.filter((task) => task.completed);
    return tasks;
  };

  const activeTabTasks = getActiveTabTasks();
  const incompleteCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const allCount = tasks.length;

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskTabs
        incompleteCount={incompleteCount}
        completedCount={completedCount}
        allCount={allCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TaskList tasks={activeTabTasks} toggleTask={toggleTask} />
    </>
  );
}

export default App;
