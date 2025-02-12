import { useContext } from 'react';
import { ProjectsContext } from '../contexts/projectsContext';

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjectsContext must be used within a Provider');
  }
  return context;
};
