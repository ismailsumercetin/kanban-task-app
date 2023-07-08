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
