import { createContext, useContext } from 'react';
import { IProject, NewProject, ProjectsViewMode } from '../models/models';

export interface IProjectsContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  saveProject: (project: IProject | NewProject, mode: ProjectsViewMode) => void;
  deleteProject: (project: IProject) => void;
  viewMode: ProjectsViewMode;
  setViewMode: React.Dispatch<React.SetStateAction<ProjectsViewMode>>;
}

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within a Provider');
  }
  return context;
};

export const ProjectsContext = createContext<IProjectsContext | undefined>(
  undefined
);
