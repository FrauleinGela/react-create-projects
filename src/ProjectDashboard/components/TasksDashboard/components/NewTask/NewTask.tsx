import { useState } from 'react';
import { generateId } from '../../../../../common/functions/generateId';
import { IProjectTask } from '../../../../models/models';

export const NewTask = ({
  projectId,
  onAddTask,
}: {
  projectId: string;
  onAddTask: (task: IProjectTask) => void;
}) => {
  const [inputTask, setInputTask] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  const handleAddTask = () => {
    const value = inputTask.trim();
    if (!value) return;
    setInputTask('');
    return onAddTask({ id: generateId(), description: value, projectId });
  };

  return (
    <div className='flex gap-4 my-2'>
      <input
        type='text'
        name=''
        className='w-64 px-2 py-1 rounded border'
        onChange={handleInputChange}
        value={inputTask}
      ></input>
      <button
        className='h-10 border-gray-400 text-sky-700 font-bold py-2 px-4 rounded border bg-white hover:bg-gray-100'
        type='submit'
        onClick={handleAddTask}
      >
        Add task!
      </button>
    </div>
  );
};
