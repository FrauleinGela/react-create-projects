import { IProjectTask } from '../../../../models/models';

export const Tasks = ({
  projectTasks,
  handleDeleteTask,
}: {
  projectTasks: IProjectTask[];
  handleDeleteTask: (taskId: string) => void;
}) => {
  return (
    <ul>
      {projectTasks.map((task) => (
        <li className='my-2' key={task.id}>
          <div className='flex justify-between py-2 px-4 bg-gray-300 rounded items-center'>
            <span>{task.description}</span>
            <button
              className='h-10 border-gray-400 text-sky-700 font-bold py-2 px-4 rounded border bg-white hover:bg-gray-100'
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
