import { TaskItem } from '../TaskItem/TaskItem';
import type { Task } from '../../types/task';

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

export const TaskList = ({ tasks, toggleTask }: TaskListProps) => {
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </>
  );
};
