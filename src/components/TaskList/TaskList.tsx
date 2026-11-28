import { TaskItem } from '../TaskItem/TaskItem';
import type { Task } from '../../types/task';
import { Stack } from '@mantine/core';

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

export const TaskList = ({ tasks, toggleTask }: TaskListProps) => {
  return (
    <Stack component='ul' gap='sm' m={0} p={0} style={{ listStyle: 'none' }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </Stack>
  );
};
