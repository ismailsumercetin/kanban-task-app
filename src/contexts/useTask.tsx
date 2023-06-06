import React, { createContext, useState, useContext, FunctionComponent, ReactNode } from 'react';
import { ITask, ITaskContext, Type_TaskStatus } from '../types';
import { DUMMY_TASKS } from '../constants';

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [searchVal, setSearchVal] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [modalData, setModalData] = useState<ITask[]>([]);

  const getTasksByStatus = (status: Type_TaskStatus) => tasks.filter(task => task.status === status);
  const getTasksBySelectedDate = () => {
    const startOfDay = selectedDate.setHours(0, 0, 0, 0);
    const endOfDay = selectedDate.setHours(23, 59, 59, 999);

    return tasks.filter(task => task.createdAt.getTime() > startOfDay && task.createdAt.getTime() < endOfDay);
  };

  const changeTaskStatusOnDrop = (taskId: string, newStatus: Type_TaskStatus) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    const task = tasks.find(task => task.id === taskId) as ITask;
    task.status = newStatus;
    setTasks([...filteredTasks, task]);
  };
  const getTasksByUserId = (userId: string) => getTasksBySelectedDate().filter(task => task.userId === userId);

  const filterBySearchVal = (tasks: ITask[]) => tasks.filter(task => task.content.toLowerCase().indexOf(searchVal) > -1);

  const values = {
    tasks,
    getTasksByStatus,
    changeTaskStatusOnDrop,
    getTasksByUserId,
    searchVal,
    setSearchVal,
    filterBySearchVal,
    selectedDate,
    setSelectedDate,
    getTasksBySelectedDate,
    modalData,
    setModalData
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
