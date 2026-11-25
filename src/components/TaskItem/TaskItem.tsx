import type { Task } from '../../types/task';
import { Checkbox } from '@mantine/core';

type TaskItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
};

export const TaskItem = ({ task, toggleTask }: TaskItemProps) => {
  return (
    <li>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          aria-label={task.title}
          checked={task.completed}
          color='cyan'
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.title}</span>
      </div>
      <p>{task.desc}</p>
    </li>
  );
};
