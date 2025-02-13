export interface IProjectTask {
  id: string;
  description: string;
  projectId: string;
}
export interface IProject {
  id: string;
  name: string;
  description: string;
  tasks: IProjectTask[];
}

export type NewProject = Omit<IProject, 'id'>;

export type ProjectsViewMode = 'create' | 'edit' | 'view' | 'delete' | 'none';
