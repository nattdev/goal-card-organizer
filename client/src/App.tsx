import FolderViewer from "./components/FolderViewer";
import GoalFolder from "./components/GoalFolder";
import GoalsContextProvider from "./context/GoalsContext";

function App() {

  return (
    <div>
      <header className="p-6 text-center bg-[#11353D] text-white">
        <h1 className="text-2xl font-semibold">Organizador de Objetivos</h1>
      </header>
      <GoalsContextProvider>
        <FolderViewer />
        <GoalFolder />
      </GoalsContextProvider>
    </div>
  )
}

export default App