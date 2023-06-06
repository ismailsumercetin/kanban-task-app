import { ITask } from "../types";

export const KANBAN_BOARD_TYPES: {[key: string]: string} = {
  backlog: 'Backlog',
  inProgress: 'In Progress',
  done: 'Done'
} as const;

export const TASK_TYPES: {[key: string]: string} = {
  bug: 'Bug',
  feature: 'Feature',
  refactor: 'Refactor'
} as const;

const getYesterdayDate = () => {
  const currentDate = new Date();

  const oneDayMilliseconds = 24 * 60 * 60 * 1000;
  const yesterdayDate = new Date(currentDate.getTime() - oneDayMilliseconds);

  return yesterdayDate;
};

export const DUMMY_TASKS: ITask[] = [
  {
    id: '112341234234',
    userId: '0',
    task_type: 'bug',
    content: 'task one',
    createdAt: getYesterdayDate(),
    status: 'backlog'
  },
  {
    id: '23523525235',
    userId: '1',
    task_type: 'feature',
    content: 'task two',
    createdAt: new Date(),
    status: 'done'
  },
  {
    id: '314124123123',
    userId: '2',
    task_type: 'refactor',
    content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    createdAt: new Date(),
    status: 'inProgress'
  },
  {
    id: '3141241231231',
    userId: '0',
    task_type: 'bug',
    content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    createdAt: new Date(),
    status: 'inProgress'
  },
  {
    id: '3141241231232',
    userId: '2',
    task_type: 'refactor',
    content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    createdAt: new Date(),
    status: 'done'
  }
];