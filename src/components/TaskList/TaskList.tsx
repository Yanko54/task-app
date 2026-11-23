import { TaskItem } from '../TaskItem/TaskItem';
import type { Task } from '../../types/task';
import type { TaskTab } from '../../types/tabs';

type TaskListProps = {
  tasks: Task[];
  activeTab: TaskTab;
};

export const TaskList = (props: TaskListProps) => {
  return (
    <>
      <h1>TaskList</h1>
      <ul>
        {props.tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};
