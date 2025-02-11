import { ReactNode, useState } from 'react';
import { NavLayout } from '../common/NavLayout';
import { ProjectMenu } from './components/ProjectMenu/ProjectMenu';
import { IProject } from './models/IProject';
import { ProjectForm } from './components/ProjectForm/ProjectForm';

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
  };

  const handleOnCancel = () => {
    setSelectedProject(undefined);
  };

  const handleSelectProject = (project: IProject) => {
    setSelectedProject(project);
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
      <div>
        <h2>{selectedProject.name}</h2>
        <p>{selectedProject.description}</p>
      </div>
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
