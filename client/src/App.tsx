import GoalFolder from "./components/GoalFolder";
import GoalsContextProvider from "./context/GoalsContext";

function App() {

  return (
    <div>
      <GoalsContextProvider>
        <GoalFolder />
      </GoalsContextProvider>
    </div>
  )
}

export default App