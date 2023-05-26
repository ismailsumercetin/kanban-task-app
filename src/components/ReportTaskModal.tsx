import { FunctionComponent } from "react";
import { TASK_TYPES } from "../constants";
import { Type_TaskType } from "../types";
import useUser from "../contexts/useUser";
import useTask from "../contexts/useTask";

interface IProps {
  onClose: () => void
}

type InputRowProps = { selectedType?: Type_TaskType, content?: string }

const InputRow = ({ selectedType, content }: InputRowProps) => {
  return  (
    <div>
      <select name="tasks">
        <option value="">Type</option>
        {
          Object.keys(TASK_TYPES).map(type => (
            <option
              value={type}
              selected={selectedType === type}
            >
              {TASK_TYPES[type]}
            </option>
          ))
        }
      </select>
      <textarea>
        { content }
      </textarea>
    </div>
  );
};

const ReportTaskModal:FunctionComponent<IProps> = ({ onClose }) => {
  const { user } = useUser();
  const { getTasksByUserId } = useTask();
  const userTasks = getTasksByUserId(user!.id);
  const remaining = 3 - userTasks.length;

  return (
    <>
      <div className="modal__reporttask__cover" />
      <div className="modal__reporttask">
        <div className="modal__closebtn" onClick={onClose}/>
        <div>
          {
            userTasks.map(task => (
              <InputRow selectedType={task.task_type} content={task.content} />
            ))
          }
          {
            Array(remaining).fill(remaining).map(_ => (
              <InputRow />
            ))
          }
        </div>
        <button
          type="button"
          className="btn modal__reporttask__submit"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReportTaskModal;
