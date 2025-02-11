import { useState } from 'react';
import { NavLayout } from '../common/NavLayout';
import { ProjectMenu } from './components/ProjectMenu/ProjectMenu';
import { IProject } from './models/IProject';

export const Projects = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  return (
    <>
      <NavLayout
        navContent={<ProjectMenu projects={projects} />}
        content={<div>all projects</div>}
      ></NavLayout>
    </>
  );
};
