import { useState } from 'react';
import { TextInput, Textarea, UnstyledButton, Group } from '@mantine/core';
import { IconTextPlus, IconPlus } from '@tabler/icons-react';

type TaskFormProps = { onAddTask: (title: string, desc: string) => void };

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTask(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Group align='flex-end'>
          <TextInput
            label='タスクを追加'
            placeholder='タイトル'
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <UnstyledButton color='cyan' size='xs' type='submit'>
            <IconPlus stroke={2} />
          </UnstyledButton>
        </Group>
        <Group align='flex-start'>
          {<IconTextPlus stroke={2} style={{ marginTop: 5 }} />}
          <Textarea
            aria-label='説明'
            placeholder='説明'
            autosize
            variant='unstyled'
            value={desc}
            onChange={(e) => setDesc(e.currentTarget.value)}
          />
        </Group>
      </form>
    </>
  );
};
