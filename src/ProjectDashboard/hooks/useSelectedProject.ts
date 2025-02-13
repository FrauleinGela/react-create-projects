import { useState } from 'react';
import { IProject, NewProject } from '../models/models';
import { useProjectsContext } from './useProjectsContext';

export const useSelectedProject = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const { projects } = useProjectsContext();
  const foundProject = projects.find((p) => p.id === selectedProjectId);
  const selectedProject: IProject | NewProject = foundProject ?? {
    name: '',
    description: '',
  };

  return { selectedProject, setSelectedProjectId };
};
