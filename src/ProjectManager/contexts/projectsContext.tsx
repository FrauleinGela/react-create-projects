import React, { createContext, useState } from 'react';
import { IProject } from '../models/IProject';

interface IProjectsContext {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  addProject: (project: IProject) => void;
  deleteProject: (project: IProject) => void;
}

export const ProjectsContext = createContext<IProjectsContext | undefined>(undefined);

export const ProjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const saveProject = (project: IProject) => {
    setProjects((prev) => [...prev, project]);
  };

  const deleteProject = (project: IProject) => {
    setProjects((prev) => prev.filter((p) => p.id !== project.id));
  };

  const contextValue = {
    projects,
    setProjects,
    deleteProject,
    addProject: saveProject,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};
