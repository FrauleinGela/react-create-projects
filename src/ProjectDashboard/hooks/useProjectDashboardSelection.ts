import { IProject, NewProject, ProjectsViewMode } from '../models/models';
import { useProjectsContext } from './useProjectsContext';
import { useSelectedProject } from './useSelectedProject';
import { useState } from 'react';

export const useProjectDashboardSelection = () => {
  const { selectedProject, setSelectedProjectId } = useSelectedProject();
  const [viewMode, setViewMode] = useState<ProjectsViewMode>('none');
  const { saveProject, deleteProject } = useProjectsContext();
  
  const handleSelectProject = (project: IProject) => {
    setSelectedProjectId(project.id);
    setViewMode('view');
  };

  const handleAddNewProject = () => {
    setViewMode('create');
    setSelectedProjectId(null);
  };

  const handleOnCancel = () => {
    setSelectedProjectId(null);
    setViewMode('none');
  };

  const handleProjectAction = (
      project: IProject | NewProject,
      mode: ProjectsViewMode
    ) => {
      if (mode === 'delete') {
        deleteProject(project as IProject);
      } else {
        saveProject(project, mode);
      }
      setViewMode('none');
    };
  

  return {
    selectedProject,
    viewMode,
    setViewMode,
    handleSelectProject,
    handleAddNewProject,
    handleOnCancel,
    handleProjectAction,
  };
};
