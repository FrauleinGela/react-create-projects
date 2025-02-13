import { IProject } from '../../models/models';

export const Projects = ({
  projects,
  onSelectProject,
  onAddProject,
}: {
  projects: IProject[];
  onSelectProject: (project: IProject) => void;
  onAddProject: () => void;
}) => {
  return (
    <div className='flex flex-col gap-4'>
      <strong className='w-full'>Your projects</strong>
      <ul className='flex flex-col gap-2'>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className='cursor-pointer text-sky-500 hover:text-sky-700'
              onClick={() => onSelectProject(project)}
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
      <button
        className='h-10 bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 border border-sky-700'
        onClick={onAddProject}
      >
        + Add project
      </button>
    </div>
  );
};
