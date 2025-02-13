import { Input } from '../../../common/Input';
import {
  IProject,
  NewProject,
  ProjectsViewMode,
} from '../../models/models';

export const ProjectForm = ({
  onProjectAction,
  onCancel,
  mode,
  project,
}: {
  onProjectAction: (
    project: IProject | NewProject,
    mode: ProjectsViewMode
  ) => void;
  onCancel: () => void;
  mode: ProjectsViewMode;
  project: IProject | NewProject;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const nameValue = formData.get('name') as string;
    const descriptionValue = formData.get('description') as string;
    if (nameValue && descriptionValue) {
      const updatedProject: IProject | NewProject = {
        ...project,
        name: nameValue,
        description: descriptionValue,
      };
      return onProjectAction(updatedProject, mode);
    }
  };

  return (
    <div className='flex justify-center'>
      <form className='py-2 px-4 w-2xl' onSubmit={handleSubmit}>
        <Input label='Name' id='name' defaultValue={project?.name} />
        <Input
          label='Description'
          id='description'
          defaultValue={project?.description}
        />
        <div className='flex py-4  justify-between'>
          {mode === 'edit' && (
            <button
              type='button'
              className='h-10 border-gray-400 text-sky-700 font-bold py-2 px-4 rounded border bg-white hover:bg-gray-100'
              onClick={() => onProjectAction(project as IProject, 'delete')}
            >
              Delete
            </button>
          )}
          <div className='flex gap-4'>
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
        </div>
      </form>
    </div>
  );
};
