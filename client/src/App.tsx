import FolderViewer from "./components/FolderViewer";
import GoalFolder from "./components/GoalFolder";
import Header from "./components/Header";
import GoalsContextProvider from "./context/GoalsContext";

function App() {

  return (
    <div>
      <Header/>
      <GoalsContextProvider>
        <FolderViewer />
        <GoalFolder />
      </GoalsContextProvider>
    </div>
  )
}

export default App