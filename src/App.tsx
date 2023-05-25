import { ReportTaskButton, SearchBar, TaskCard } from "./components";
import useUser from "./contexts/useUser";

const App = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="App">
      <ReportTaskButton/>
      <SearchBar/>
      <TaskCard/>
    </div>
  );
}

export default App;
