import { ReactNode, useState } from 'react';
import { NavLayout } from '../common/NavLayout';
import { ProjectMenu } from './components/ProjectMenu/ProjectMenu';
import { IProject } from './models/IProject';
import { ProjectForm } from './components/ProjectForm/ProjectForm';
import { Project } from './components/Project/Project';

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject | undefined>(
    undefined
  );
  const startContent: ReactNode = <div>Select a project</div>;
  let content: ReactNode = startContent;

  const handleAddProject = () => {
    setSelectedProject({ id: '', name: '', description: '' });
  };

  const handleSaveProject = (project: IProject) => {
    setProjects((prev) => [...prev, project]);
    setSelectedProject(undefined);
  };

  const handleOnCancel = () => {
    setSelectedProject(undefined);
  };

  const handleSelectProject = (project: IProject) => {
    setSelectedProject(project);
  }

  const handleDeleteProject = (project: IProject) => {
    setProjects((prev)=> prev.filter(p => p.id !== project.id));
    setSelectedProject(undefined);
  }

  if (selectedProject && !selectedProject.id) {
    content = (
      <ProjectForm
        onSaveProject={handleSaveProject}
        onCancel={handleOnCancel}
      />
    );
  }

  if(selectedProject && selectedProject.id) {
    content = (
      <Project project={selectedProject} onDelete={handleDeleteProject}/>
    )
  }
  

  return (
    <>
      <NavLayout
        navContent={
          <ProjectMenu projects={projects} onAddProject={handleAddProject} onSelectProject={handleSelectProject}/>
        }
        content={content}
      ></NavLayout>
    </>
  );
};
