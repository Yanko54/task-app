import { TaskItem } from '../TaskItem/TaskItem';
import type { Task } from '../../types/task';
// import type { TaskTab } from '../../types/tabs';

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
  // activeTab: TaskTab;
};

export const TaskList = ({ tasks, toggleTask }: TaskListProps) => {
  return (
    <>
      <h1>TaskList</h1>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </>
  );
};
