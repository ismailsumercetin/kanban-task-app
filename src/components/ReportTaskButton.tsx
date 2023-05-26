import { useState } from "react";
import ReportTaskModal from "./ReportTaskModal";

const ReportTaskButton = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggle = () => setToggleModal(!toggleModal);

  return (
    <>
      <button
        type='button'
        className="btn__reporttask"
        onClick={toggle}
      >
        Report Your Daily Tasks
      </button>
      {toggleModal && <ReportTaskModal onClose={toggle} />}
    </>
  );
};

export default ReportTaskButton;
