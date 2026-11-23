import type { Task } from '../../types/task';
import { Checkbox } from '@mantine/core';

type TaskItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
};

export const TaskItem = ({ task, toggleTask }: TaskItemProps) => {
  return (
    <li>
      <Checkbox
        label={task.title}
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <br />
      <p>{task.desc}</p>
    </li>
  );
};
