import { createContext, useContext } from 'react';
import { IProjectTask } from '../models/models';

export interface ITasksContext {
  tasks: IProjectTask[];
  addTask: (task: IProjectTask) => void;
  deleteTask: (taskId: string) => void;
}

export const TasksContext = createContext<ITasksContext | undefined>(
  undefined
);

export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within a Provider');
  }
  return context;
};

