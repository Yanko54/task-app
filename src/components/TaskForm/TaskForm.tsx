import { useState } from 'react';

type TaskFormProps = { onAddTask: (title: string, desc: string) => void };

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleSubmit = () => {
    onAddTask(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <>
      <input
        name='title'
        type='text'
        placeholder='タイトル'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        name='desc'
        placeholder='説明'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>追加</button>
    </>
  );
};
