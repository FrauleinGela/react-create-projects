export interface IProject {
  id: string;
  name: string;
  description: string;
}

export type NewProject = Omit<IProject, 'id'>;

export type ProjectsViewMode = 'create' | 'edit' | 'view' | 'delete' | 'none';
