import { useState } from 'react';
import { useProjectsContext } from '../../hooks/useProjects';
import { IProject } from '../../models/IProject';
import { Project } from '../Project/Project';
import { ProjectMenu } from '../ProjectMenu/ProjectMenu';
import { NavLayout } from '../../../common/NavLayout';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const { projects, addProject, deleteProject } = useProjectsContext();

  const handleSelectProject = (project: IProject | null) => {
    setSelectedProject(project);
  };

  const handleSaveProject = (project: IProject) => {
    addProject(project);
    setSelectedProject(null);
  };

  const handleDeleteProject = (project: IProject) => {
    deleteProject(project);
    setSelectedProject(null);
  };

  return (
    <NavLayout
      navContent={
        <ProjectMenu
          projects={projects}
          onSelectProject={handleSelectProject}
        />
      }
      content={
        <Project
          selectedProject={selectedProject}
          onSaveProject={handleSaveProject}
          onDeleteProject={handleDeleteProject}
          onCancel={() => setSelectedProject(null)}
        />
      }
    ></NavLayout>
  );
};
