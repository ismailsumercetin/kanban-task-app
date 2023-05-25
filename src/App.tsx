import useUser from "./contexts/useUser";

const App = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="App">
      user
    </div>
  );
}

export default App;
