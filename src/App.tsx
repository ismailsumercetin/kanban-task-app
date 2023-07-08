import "react-datepicker/dist/react-datepicker.css";
import { Header, KanbanContainer } from "./components";
import { FunctionComponent } from "react";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Header />
      <KanbanContainer />
    </div>
  );
}

export default App;
