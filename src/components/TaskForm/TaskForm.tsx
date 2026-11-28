import { useState } from 'react';
import { TextInput, Textarea, ActionIcon, Group, Stack } from '@mantine/core';
import { IconTextPlus, IconPlus } from '@tabler/icons-react';

type TaskFormProps = { onAddTask: (title: string, desc: string) => void };

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('タスク名を入力してください');
      return;
    }

    onAddTask(trimmedTitle, desc);
    setTitle('');
    setDesc('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack mx='auto' gap='4'>
        <Group wrap='nowrap' align='flex-start'>
          <TextInput
            error={error}
            style={{ flex: 1, minWidth: 0 }}
            aria-label='タスクタイトル'
            placeholder='タスクを追加する'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <ActionIcon size={36} color='cyan' aria-label='AddTask' type='submit'>
            <IconPlus stroke={1.5} />
          </ActionIcon>
        </Group>
        <Group align='flex-start'>
          {<IconTextPlus stroke={1.5} style={{ marginTop: 4 }} />}
          <Textarea
            style={{ flex: 1, minWidth: 0 }}
            aria-label='タスク説明'
            placeholder='タスクの説明'
            autosize
            variant='unstyled'
            value={desc}
            onChange={(e) => setDesc(e.currentTarget.value)}
          />
        </Group>
      </Stack>
    </form>
  );
};
