import { IProject } from '../../../../models/models';

export const ProjectDetails = ({
  project,
  onEdit,
}: {
  project: IProject;
  onEdit: (project: IProject) => void;
}) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2>{project.name}</h2>
        <button
          className='h-10 border-gray-400 text-sky-700 font-bold py-2 px-4 rounded border bg-white hover:bg-gray-100'
          onClick={() => onEdit(project)}
        >
          Edit
        </button>
      </div>
      <p>{project.description}</p>
    </div>
  );
};
