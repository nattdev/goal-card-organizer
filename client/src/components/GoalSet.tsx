import { useEffect, useState } from "react";
import GoalCard from "./GoalCard";
import { GoalCards, GoalOrganizer, useGoals } from "../context/GoalsContext";
import ColumnsIcon from "../assets/icons/ColumnsIcon.svg"
import MinusIcon from "../assets/icons/MinusIcon.svg";
import PlusIcon from "../assets/icons/PlusIcon.svg"

type Props = {
  goalset: GoalOrganizer;
  folderId: number;
  folderName: string;
}

function GoalSet({ goalset, folderId, folderName }: Props) {

  const { goalOrganizer, setGoalOrganizer, handleOnChangeName } = useGoals();
  const [idGoalCard, setIdGoalCard] = useState(1);
  const [folderColumns, setFolderColumns] = useState(goalset.columns);
  const [isMinimize, setIsMinimize] = useState(goalset.isMinimize);

  const goalSetId = goalset.id;

  useEffect(() => {
    const storedItems = localStorage.getItem("goalOrganizerList");
    if (storedItems) {
      const parseStoredItems: GoalOrganizer[] = JSON.parse(storedItems);
      const targetFolder = parseStoredItems.find(folder => folder.id === goalSetId);
      if (targetFolder) {
        let maxId = 0;
        targetFolder.goalSet.forEach((goal: GoalCards) => {
          if (goal.id > maxId) {
            maxId = goal.id;
          }
        });
        setIdGoalCard(maxId + 1);
      }
    }
  }, []);

  function handleAddGoalCard() {
    const updatedGoalSet = goalOrganizer.map((goalFolder) => {
      if (goalFolder.id === goalset.id) {
        const newGoal: GoalCards = {
          id: idGoalCard,
          content: "",
          isComplete: false,
          taskList: []
        };
        return {
          ...goalFolder,
          goalSet: [...goalFolder.goalSet, newGoal]
        };
      }
      return goalFolder;
    });
    setGoalOrganizer(updatedGoalSet);
    setIdGoalCard(idGoalCard + 1);
  }

  function updateSetColumns(updateColumn: number) {
    const updatedSetColumns = goalOrganizer.map((goalFolder) => {
      if (goalFolder.id === goalset.id) {
        return {
          ...goalFolder,
          columns: updateColumn,
        };
      }
      return goalFolder;
    });
    setGoalOrganizer(updatedSetColumns);
  }

  function updateIsMinimize(updateValue: boolean) {
    const updatedIsMinimize = goalOrganizer.map((goalFolder) => {
      if (goalFolder.id === goalset.id) {
        return {
          ...goalFolder,
          isMinimize: updateValue,
        };
      }
      return goalFolder;
    });
    setGoalOrganizer(updatedIsMinimize);
  }

  function handleOnClickSetColumns() {
    if (folderColumns <= 3 && folderColumns > 1) {
      const updateColumn = folderColumns - 1;
      setFolderColumns((updateColumn));
      updateSetColumns(updateColumn);
    } else {
      setFolderColumns(3);
      updateSetColumns(3);
    }
  }

  function handleMinimizeGoalFolder() {
    const updateValue = !isMinimize;
    setIsMinimize(updateValue);
    updateIsMinimize(updateValue);
  }

  return (
    <div className={`flex flex-col items-center none ${goalset.isVisible ? "block" : "hidden"}`}>
      <div className={`w-full ${isMinimize ? "hidden" : "block"}`}>
        <div className="pt-7 pb-6 flex justify-center px-6 w-full">
          <button onClick={handleOnClickSetColumns}>
            <img src={ColumnsIcon}></img>
          </button>
        </div>
        <ul className={`grid ${folderColumns == 1 ? "grid-cols-1" : folderColumns == 2 ? "grid-cols-2" : "grid-cols-3"} w-full text-center sm:gap-6 gap-3 sm:px-6 px-2 justify-items-center`}>
          {goalset.goalSet.map((goalCard, index) => (
            <div className="flex min-w-[30%] w-full justify-center max-w-96" key={`${goalCard.id}-${index}`}>
              <GoalCard card={goalCard} goalSetId={goalSetId} />
            </div>
          ))}
          <div className="cursor-pointer w-full max-w-96 flex" onClick={handleAddGoalCard}>
            <p className="border-2 border-gray-400 border-dashed p-2 sm:m-3 m-0 font-semibold w-full">+ Añadir Objective Card</p>
          </div>
        </ul>
      </div>
      <header className="flex items-center order-2 px-2 opacity-10 w-full">
        <input placeholder="Folder" className="bg-transparent sm:text-7xl text-5xl left-0 bottom-0 w-full uppercase placeholder-gray-950 placeholder-opacity-50 py-6" type="text" value={folderName} onChange={(e) => handleOnChangeName(e, folderId)}></input>
        <button className="pr-3 curso-pointer " onClick={handleMinimizeGoalFolder}>
          <img className="sm:min-w-5 sm:w-10 min-w-10" src={isMinimize ? PlusIcon : MinusIcon}></img>
        </button>
      </header>
    </div>
  )
}

export default GoalSet;