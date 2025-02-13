import { useState, ReactNode } from 'react';
import { IProjectTask } from '../../../models/models';
import { ITasksContext, TasksContext } from '../hooks/useTasksContext';
export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<IProjectTask[]>([]);

  const addTask = (task: IProjectTask) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((p) => p.id !== taskId));
  };

  const contextValue: ITasksContext = {
    addTask,
    deleteTask,
    tasks,
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};
