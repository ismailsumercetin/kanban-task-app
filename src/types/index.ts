import { Dispatch, SetStateAction } from "react";
export type Type_TaskType = 'bug' | 'feature' | 'refactor';
export type Type_TaskStatus = 'backlog' | 'inProgress' | 'done';

export interface ITask {
  id: string
  userId: string
  task_type: Type_TaskType
  content: string
  createdAt: Date
  status: Type_TaskStatus
  [key: string]: any
}

export interface IUser {
  id: string
  name: string
  bio: string
  image: string
}

export interface IUserContext {
  user?: IUser
  getUserById: (id: string) => IUser
}
export interface ITaskContext {
  tasks: ITask[]
  getTasksByStatus: (status: Type_TaskStatus) => ITask[]
  changeTaskStatusOnDrop: (taskId: string, newStatus: Type_TaskStatus, ) => void
  getTasksByUserId: (userId: string) => ITask[]
  searchVal: string
  setSearchVal: Dispatch<SetStateAction<string>>
  filterBySearchVal: (tasks: ITask[]) => ITask[]
  selectedDate: Date
  setSelectedDate: Dispatch<SetStateAction<Date>>
  getTasksBySelectedDate: () => ITask[]
  modalData: ITask[]
  setModalData: Dispatch<SetStateAction<ITask[]>>
  handleSubmitTask: (data: ITask[]) => void
  updateModalData: (type: string, id: string, data: string) => void
}