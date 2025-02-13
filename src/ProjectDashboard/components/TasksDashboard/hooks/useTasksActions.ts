import { IProjectTask } from '../../../models/models';
import { useTasksContext } from '../../../hooks/useTasksContext';

interface IUseTasksActions {
  addTask: (task: IProjectTask) => void;
  deleteTask: (taskId: string) => void;
  projectTasks: IProjectTask[];
}
export const useTasksActions = (projectId: string): IUseTasksActions => {
  const { tasks, addTask, deleteTask } = useTasksContext();  
  const projectTasks = tasks.filter((task) => task.projectId === projectId);
  
  return { addTask, deleteTask, projectTasks };
};
