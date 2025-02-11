import { IProject } from '../../models/IProject';

export const ProjectMenu = ({ projects }: { projects: IProject[] }) => {
  return (
    <>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      <button className='h-10 bg-sky-500 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 border border-sky-700'>
        + Add project
      </button>
    </>
  );
};
