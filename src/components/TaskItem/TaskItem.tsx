import type { Task } from '../../types/task';
import { Checkbox } from '@mantine/core';
import { Group, Stack, Text } from '@mantine/core';

type TaskItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
};

export const TaskItem = ({ task, toggleTask }: TaskItemProps) => {
  return (
    <li>
      <Group align='flex-start' wrap='nowrap'>
        <Checkbox
          aria-label={task.title}
          checked={task.completed}
          color='cyan'
          onChange={() => toggleTask(task.id)}
        />
        <Stack gap={4}>
          <Text td={task.completed ? 'line-through' : 'none'}>
            {task.title}
          </Text>
          <Text c='dark' fz='xs' style={{ whiteSpace: 'pre-wrap' }}>
            {task.desc}
          </Text>
        </Stack>
      </Group>
    </li>
  );
};
