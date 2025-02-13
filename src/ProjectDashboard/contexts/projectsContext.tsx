import { useState, ReactNode } from 'react';
import { IProject, NewProject, ProjectsViewMode } from '../models/models';
import { generateId } from '../../common/functions/generateId';
import { ProjectsContext } from '../hooks/useProjectsContext';

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const saveProject = (
    project: IProject | NewProject,
    mode: ProjectsViewMode
  ) => {
    setProjects((prevProjects) => {
      const currentProject: IProject = (
        mode === 'create' ? { ...project, id: generateId() } : { ...project }
      ) as IProject;
      if (mode === 'create') {
        return [...prevProjects, currentProject];
      }
      return [
        ...prevProjects.map((p) =>
          p.id === currentProject.id ? currentProject : p
        ),
      ];
    });
  };

  const deleteProject = (project: IProject) => {
    setProjects((prev) => prev.filter((p) => p.id !== project.id));
  };

  const contextValue = {
    projects,
    setProjects,
    deleteProject,
    saveProject,
  };

  return (
    <ProjectsContext.Provider value={contextValue}>
      {children}
    </ProjectsContext.Provider>
  );
};
