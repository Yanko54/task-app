import type { Task } from '../../types/task';
import { Checkbox, Group, Stack, Text, ActionIcon } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';

type TaskItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
};

export const TaskItem = ({ task, toggleTask, onDeleteTask }: TaskItemProps) => {
  return (
    <li>
      <Group align='flex-start' wrap='nowrap'>
        <Checkbox
          aria-label={task.title}
          checked={task.completed}
          color='cyan'
          onChange={() => toggleTask(task.id)}
        />
        <Stack gap={4} style={{ flex: 1, minWidth: 0 }}>
          <Text td={task.completed ? 'line-through' : 'none'}>
            {task.title}
          </Text>
          <Text c='dark' fz='xs' style={{ whiteSpace: 'pre-wrap' }}>
            {task.desc}
          </Text>
        </Stack>
        <ActionIcon
          mr='md'
          variant='subtle'
          color='gray'
          aria-label='DeleteTask'
          type='button'
          onClick={() => onDeleteTask(task.id)}
        >
          <IconTrash stroke={1.5} />
        </ActionIcon>
      </Group>
    </li>
  );
};
