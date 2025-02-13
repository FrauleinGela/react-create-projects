import { NewTask } from './components/NewTask/NewTask';
import { Tasks } from './components/Tasks/Tasks';
import { useTasksActions } from './hooks/useTasksActions';

export const TasksDashboard = ({ projectId }: { projectId: string }) => {
  const { addTask, deleteTask, projectTasks } = useTasksActions(projectId);

  return (
    <section className='flex flex-col'>
      <strong className='text-2xl font-bold'>Tasks</strong>
      {projectTasks.length === 0 && <p>You have no tasks yet, create one! </p>}
      <NewTask onAddTask={(task) => addTask(task)} projectId={projectId} />
      <Tasks
        projectTasks={projectTasks}
        handleDeleteTask={(task) => deleteTask(task)}
      />
    </section>
  );
};
