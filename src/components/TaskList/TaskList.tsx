// import { TaskItem } from '../TaskItem/TaskItem';
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
      {/* <TaskItem /> */}
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <br />
            <p>{task.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
