import { useProjectsContext } from '../../hooks/useProjects';
import { IProject, NewProject, ProjectsViewMode } from '../../models/models';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { ProjectForm } from './components/ProjectForm/ProjectForm';

export const Project = ({
  selectedProject,
  onBackToProjects,
}: {
  selectedProject: IProject | NewProject;
  onBackToProjects: () => void;
}) => {
  const { saveProject, deleteProject, setViewMode, viewMode } =
    useProjectsContext();

  const handleProjectAction = (
    project: IProject | NewProject,
    mode: ProjectsViewMode
  ) => {
    if (mode === 'delete') {
      deleteProject(project as IProject);
    } else {
      saveProject(project, mode);
    }
    onBackToProjects();
  };

  const handleCancel = () => {
    onBackToProjects();
  };

  return (
    <div className='flex justify-center'>
      {viewMode === 'view' ? (
        <ProjectDetails
          project={selectedProject as IProject}
          onEdit={() => setViewMode('edit')}
        />
      ) : (
        <ProjectForm
          mode={viewMode}
          project={selectedProject}
          onProjectAction={handleProjectAction}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};
