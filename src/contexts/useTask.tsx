import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { ITask, ITaskContext, Type_TaskStatus } from '../types';
import { DUMMY_TASKS } from '../constants';

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [searchVal, setSearchVal] = useState('');

  const getTasksByStatus = (status: Type_TaskStatus) => tasks.filter(task => task.status === status);
  const changeTaskStatusOnDrop = (taskId: string, newStatus: Type_TaskStatus) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    const task = tasks.find(task => task.id === taskId) as ITask;
    task.status = newStatus;
    setTasks([...filteredTasks, task]);
  };
  const getTasksByUserId = (userId: string) => tasks.filter(task => task.userId === userId);

  const filterBySearchVal = (tasks: ITask[]) => tasks.filter(task => task.content.toLowerCase().indexOf(searchVal) > -1);

  const values = {
    tasks,
    getTasksByStatus,
    changeTaskStatusOnDrop,
    getTasksByUserId,
    searchVal,
    setSearchVal,
    filterBySearchVal
  };

  return (
    <TaskContext.Provider value={values}>
      {children}
    </TaskContext.Provider>
  );
};

export default function useTask() {
  return useContext(TaskContext);
};
