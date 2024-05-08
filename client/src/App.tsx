import GoalOrganizer from "./components/GoalOrganizer";
import GoalsContextProvider from "./context/GoalsContext";

function App() {

  return (
    <div>
      <GoalsContextProvider>
        <GoalOrganizer />
      </GoalsContextProvider>
    </div>
  )
}

export default App