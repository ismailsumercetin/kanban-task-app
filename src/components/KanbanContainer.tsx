import { KANBAN_BOARD_TYPES } from "../constants";

const KanbanContainer = () => {
  return (
    <div className="container__kanban">
      {
        Object.keys(KANBAN_BOARD_TYPES).map(type => {
          const cn = `kanban kanban__${type} shadow`;
          return (
            <div className={cn}>
              <div className="kanban__title">{KANBAN_BOARD_TYPES[type]}</div>
              <div className="kanban__tasksection">
                { /* DnD container */ }
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default KanbanContainer;
