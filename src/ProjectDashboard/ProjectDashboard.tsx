import { ProjectsProvider } from './contexts/projectsContext';
import { NavLayout } from '../common/NavLayout';
import { Projects } from './components/Projects/Projects';
import { ReactNode } from 'react';
import { useProjectDashboardSelection } from './hooks/useProjectDashboardSelection';
import { useProjectsContext } from './hooks/useProjectsContext';
import { ProjectDetails } from './components/ProjectDetails/ProjectDetails';
import { ProjectForm } from './components/ProjectForm/ProjectForm';
import { IProject } from './models/models';
import { TasksContextProvider } from './contexts/tasksContext';

export const ProjectProviderWrapper = () => {
  return (
    <ProjectsProvider>
      <TasksContextProvider>
        <ProjectDashboard />
      </TasksContextProvider>
    </ProjectsProvider>
  );
};

export const ProjectDashboard = () => {
  const {
    viewMode,
    selectedProject,
    handleAddNewProject,
    handleSelectProject,
    handleProjectAction,
    handleOnCancel,
    setViewMode,
  } = useProjectDashboardSelection();
  const { projects } = useProjectsContext();

  const renderProjectContent = (): ReactNode => {
    if (viewMode === 'none') {
      return <div>Select a project</div>;
    }

    if (viewMode === 'view') {
      return (
        <ProjectDetails
          project={selectedProject as IProject}
          onEdit={() => setViewMode('edit')}
        />
      );
    }

    return (
      <ProjectForm
        mode={viewMode}
        project={selectedProject}
        onProjectAction={handleProjectAction}
        onCancel={handleOnCancel}
      />
    );
  };

  return (
    <NavLayout
      navContent={
        <Projects
          projects={projects}
          onSelectProject={handleSelectProject}
          onAddProject={handleAddNewProject}
        />
      }
      content={
        <div className='flex justify-center'>
       { renderProjectContent()}

        </div>
      }
    ></NavLayout>
  );
};
