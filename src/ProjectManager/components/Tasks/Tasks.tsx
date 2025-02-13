import { IProjectTask } from '../../models/models';
import { TasksContextProvider } from './context/tasksContext';
import { useTasksContext } from './hooks/useTasksContext';
import { NewTask } from './NewTask/NewTask';

export const Tasks = ({ projectId }: { projectId: string }) => {
  return (
    <TasksContextProvider>
      <TasksContent projectId={projectId} />
    </TasksContextProvider>
  );
};

const TasksContent = ({ projectId }: { projectId: string }) => {
  const { addTask, deleteTask, tasks } = useTasksContext();
  const projectTasks = tasks.filter((task) => task.projectId === projectId);

  const handleAddTask = (task: IProjectTask) => {
    addTask(task);
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  return (
    <TasksContextProvider>
      <section className='flex flex-col'>
        <strong className='text-2xl font-bold'>Tasks</strong>
        {projectTasks.length === 0 && (
          <p>You have no tasks yet, create one! </p>
        )}
        <NewTask onAddTask={handleAddTask} projectId={projectId} />
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
      </section>
    </TasksContextProvider>
  );
};
