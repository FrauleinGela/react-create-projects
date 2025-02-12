import { useProjectsContext } from '../../../hooks/useProjects';
import { IProject } from '../../../models/models';

export const useProjectActions = (
  onSelectedProject: (project: IProject | null) => void
) => {
  const { addProject, deleteProject } = useProjectsContext();

  const handleCancel = () => {
    onSelectedProject(null);
  };

  const handleSaveProject = (project: IProject) => {
    addProject(project);
    onSelectedProject(null);
  };

  const handleDeleteProject = (project: IProject) => {
    deleteProject(project);
    onSelectedProject(null);
  };

  return { handleCancel, handleSaveProject, handleDeleteProject };
};
