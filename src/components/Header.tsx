import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import useTask from '../contexts/useTask';
import useUser from '../contexts/useUser';
import ReportTaskButton from "./ReportTaskButton";
import SearchBar from "./SearchBar";

const Header = () => {
  const { selectedDate, setSelectedDate, getTasksByUserId, setModalData } = useTask();
  const { user } = useUser();

  useEffect(() => {
    const userTasks = getTasksByUserId(user!.id);
    const remaining = 3 - userTasks.length;
    setModalData([
      ...userTasks,
      ...Array(remaining).fill(remaining).reduce((prev, ) => {
        return [
          ...prev,
          { id: uuidv4() }
        ];
      }, [])
    ]);
  }, [selectedDate])

  return (
    <header className="header shadow">
      <div className="header__left">
        <ReportTaskButton/>
        <DatePicker
          selected={selectedDate}
          onChange={date => {
            if (date) {
              setSelectedDate(date);
            }
          }}
          dateFormat="d MMMM yyyy"
        />
      </div>
      <div className="header__right">
        <SearchBar/>
      </div>
    </header>
  );
};

export default Header;
