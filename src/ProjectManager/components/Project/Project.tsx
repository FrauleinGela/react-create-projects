import { IProject } from '../../models/IProject';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { ProjectForm } from './components/ProjectForm/ProjectForm';

export const Project = ({
  selectedProject,
  onSaveProject,
  onCancel,
  onDeleteProject,
}: {
  selectedProject: IProject | null;
  onSaveProject: (project: IProject) => void;
  onCancel: () => void;
  onDeleteProject: (project: IProject) => void;
}) => {
  if (!selectedProject) {
    return <div> Select a project </div>;
  }

  if (!selectedProject.id) {
    return <ProjectForm onSaveProject={onSaveProject} onCancel={onCancel} />;
  }

  return (
    <ProjectDetails project={selectedProject} onDelete={onDeleteProject} />
  );
};
