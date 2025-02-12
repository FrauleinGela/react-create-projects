import { ProjectsProvider } from './contexts/projectsContext';
import { Projects } from './components/Projects/Projects';

export const ProjectManager = () => {
  return (
    <ProjectsProvider>
      <Projects />
    </ProjectsProvider>
  );
};
