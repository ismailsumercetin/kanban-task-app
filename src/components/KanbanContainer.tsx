import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { KANBAN_BOARD_TYPES } from "../constants";
import useTask from "../contexts/useTask";
import TaskCard from "./TaskCard";
import useUser from "../contexts/useUser";
import { ITask } from "../types";

const KanbanContainer = () => {
  const { changeTaskStatusOnDrop, filterBySearchVal, getTasksBySelectedDate } = useTask();
  const { getUserById } = useUser();

  const onDragEnd = (event: any) => {
    try {
      const { draggableId, destination: { droppableId } } = event;
      changeTaskStatusOnDrop(draggableId, droppableId);
    } catch (e){
      console.log(e);
    }
  }
  const tasksByDate = getTasksBySelectedDate();
  return (
    <div className="container__kanban">
      <DragDropContext onDragEnd={onDragEnd}>
        {
          Object.keys(KANBAN_BOARD_TYPES).map((status, index) => {
            const filteredBySearchVal = filterBySearchVal(tasksByDate.filter((task: ITask) => task.status === status));
            const cn = `kanban kanban__${status} shadow`;
            return (
              <div className={cn} key={index}>
                <div className="kanban__title">{KANBAN_BOARD_TYPES[status]}</div>
                <Droppable key={index} droppableId={status}>
                  {provided => (
                    <div
                      className="kanban__tasksection"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      { filteredBySearchVal.map((task, index) => {
                        const { name, bio } = getUserById(task.userId);
                        return (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {provided => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <TaskCard
                                  task_type={task.task_type}
                                  content={task.content}
                                  name={name}
                                  bio={bio}
                                />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })
        }
      </DragDropContext>
    </div>
  );
};

export default KanbanContainer;
