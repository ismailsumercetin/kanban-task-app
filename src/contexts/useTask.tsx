import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { ITaskContext, Type_TaskStatus } from '../types';
import { DUMMY_TASKS } from '../constants';

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [tasks,] = useState(DUMMY_TASKS);

  const getTasksByStatus = (status: Type_TaskStatus) => tasks.filter(task => task.status === status);

  const values = {
    tasks,
    getTasksByStatus
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
