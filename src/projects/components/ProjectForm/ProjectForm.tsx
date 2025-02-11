import { IProject } from '../../models/IProject';
import { Input } from '../../../common/Input';

const generateNewId = () => {
  return `${Math.random()}-${Date.now()}`;
};

export const ProjectForm = ({
  onSaveProject,
  onCancel,
}: {
  onSaveProject: (project: IProject) => void;
  onCancel: () => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const nameValue = formData.get('name') as string;
    const descriptionValue = formData.get('description') as string;

    if (nameValue && descriptionValue) {
      const newProject: IProject = {
        id: generateNewId(),
        name: nameValue,
        description: descriptionValue,
      };
      onSaveProject(newProject);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <form className='py-2 px-4' onSubmit={handleSubmit}>
        <Input label='Name' id='name' />
        <Input label='Description' id='description' />
        <div className='flex justify-end gap-4 py-4'>
          <button
            onClick={onCancel}
            type='button'
            className='h-10 border-gray-400 text-sky-700 font-bold py-2 px-4 rounded border bg-white hover:bg-gray-100 '
          >
            Cancel
          </button>
          <button
            type='submit'
            className='h-10 bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 border border-sky-700'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
