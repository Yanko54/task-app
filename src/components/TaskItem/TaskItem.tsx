import type { Task } from '../../types/task';

type TaskItemProps = {
  task: Task;
};

export const TaskItem = (props: TaskItemProps) => {
  return (
    <li>
      <span>{props.task.title}</span>
      <br />
      <p>{props.task.desc}</p>
    </li>
  );
};
