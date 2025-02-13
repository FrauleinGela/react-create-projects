import { ReactNode, useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjects';
import { IProject, IProjectTask, NewProject } from '../../models/models';
import { Project } from '../Project/Project';
import { ProjectMenu } from '../ProjectMenu/ProjectMenu';
import { NavLayout } from '../../../common/NavLayout';

export const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const { projects, setViewMode, viewMode } = useProjectsContext();
  const foundProject = projects.find((p) => p.id === selectedProjectId);
  const selectedProject: NewProject | IProject = foundProject ?? {
    name: '',
    description: '',
    tasks: [],
  };

  const handleSelectProject = (project: IProject) => {
    setSelectedProjectId(project.id);
    setViewMode('view');
  };

  const handleAddNewProject = () => {
    setViewMode('create');
    setSelectedProjectId(null);
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setViewMode('none');
  };

  const content: ReactNode =
    viewMode === 'none' ? (
      <div> Select a project </div>
    ) : (
      <Project
        selectedProject={selectedProject}
        onBackToProjects={handleBackToProjects}
      />
    );

  return (
    <NavLayout
      navContent={
        <ProjectMenu
          projects={projects}
          onSelectProject={handleSelectProject}
          onAddProject={handleAddNewProject}
        />
      }
      content={content}
    ></NavLayout>
  );
};
