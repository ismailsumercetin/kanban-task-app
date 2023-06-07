import { FunctionComponent, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TASK_TYPES } from "../constants";
import { ITask } from "../types";
import useTask from "../contexts/useTask";
import useUser from "../contexts/useUser";

interface IProps {
  onClose: () => void
}

type InputRowProps = { task: ITask }

const InputRow = ({ task }: InputRowProps) => {
  const { task_type, content, createdAt, id } = task;
  const { updateModalData } = useTask();
  return (
    <div>
      <select name="tasks" onChange={(e) => updateModalData('task_type', task.id, e.target.value)}>
        {!createdAt && <option value="">Type</option>}
        {
          Object.keys(TASK_TYPES).map(type => (
            <option
              value={type}
              selected={task_type === type}
            >
              {TASK_TYPES[type]}
            </option>
          ))
        }
      </select>
      <textarea
        id={id}
        name={id}
        value={content}
        onChange={(e) => updateModalData('content', task.id, e.target.value)}
      />
    </div>
  );
};

const ReportTaskModal:FunctionComponent<IProps> = ({ onClose }) => {
  const { getTasksByUserId, setModalData, modalData, handleSubmitTask } = useTask();
  const { user } = useUser();

  useEffect(() => {
    const userTasks = getTasksByUserId(user!.id);
    const remaining = 3 - userTasks.length;
    setModalData([
      ...userTasks,
      ...Array(remaining).fill(remaining).reduce((prev, ) => {
        return [
          ...prev,
          { id: uuidv4(), content: '' }
        ];
      }, [])
    ]);
  }, []);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <>
      <div className="modal__reporttask__cover" />
      <div className="modal__reporttask">
        <div className="modal__closebtn" onClick={onClose}/>
        <div>
          {
            modalData.map(task => (
              <InputRow task={task}  />
            ))
          }
        </div>
        <button
          type="button"
          className="btn modal__reporttask__submit"
          onClick={() => {
            handleSubmitTask(modalData);
            onClose();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReportTaskModal;
