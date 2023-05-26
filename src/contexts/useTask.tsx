import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { ITask, ITaskContext, Type_TaskStatus } from '../types';
import { DUMMY_TASKS } from '../constants';

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const getTasksByStatus = (status: Type_TaskStatus) => tasks.filter(task => task.status === status);
  const changeTaskStatusOnDrop = (taskId: string, newStatus: Type_TaskStatus) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    const task = tasks.find(task => task.id === taskId) as ITask;
    task.status = newStatus;
    setTasks([...filteredTasks, task]);
  };

  const values = {
    tasks,
    getTasksByStatus,
    changeTaskStatusOnDrop
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
