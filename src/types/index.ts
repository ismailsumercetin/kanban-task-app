export type TaskType = 'Bug' | 'Feature' | 'Refactor';
export type TaskStatus = 'Backlog' | 'InProgress' | 'Done';

export interface ITask {
  id: Number
  task_type: TaskType
  content: String
  createdAt: Date
  status: TaskStatus
}

export interface IUser {
  id: Number
  name: String,
  bio: String
}

export interface IUserContext {
  user?: IUser
}