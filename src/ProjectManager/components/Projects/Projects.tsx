import { ReactNode, useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjects';
import { IProject, NewProject } from '../../models/models';
import { Project } from '../Project/Project';
import { ProjectMenu } from '../ProjectMenu/ProjectMenu';
import { NavLayout } from '../../../common/NavLayout';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<
    IProject | NewProject
  >();
  const { projects, setViewMode, viewMode } = useProjectsContext();

  const handleSelectProject = (project: IProject) => {
    setSelectedProject(project);
    setViewMode('view');
  };

  const handleAddNewProject = () => {
    const newProject: NewProject = {
      name: '',
      description: '',
    };

    setSelectedProject(newProject);
    setViewMode('create');
  };

  const content: ReactNode =
    viewMode === null || !selectedProject ? (
      <div> Select a project </div>
    ) : (
      <Project
        selectedProject={selectedProject}
        onBackToProjects={() => setViewMode(null)}
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
