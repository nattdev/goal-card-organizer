import { useState } from "react";
import GoalCard from "./GoalCard";
import { GoalCards, GoalOrganizer, useGoals } from "../context/GoalsContext";
import ColumnsIcon from "../assets/icons/ColumnsIcon.svg"

type Props = {
  goalset: GoalOrganizer;
}

function GoalSet({ goalset }: Props) {

  const { goalOrganizer, setGoalOrganizer } = useGoals();
  const [idGoalCard, setIdGoalCard] = useState(1);
  const [folderColumns, setFolderColumns] = useState(3);

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

  function handleOnClickSetColumns() {
    if (folderColumns <= 3 && folderColumns > 1) {
      setFolderColumns((folderColumns - 1));
    } else {
      setFolderColumns(3);
    }
  }

  const goalSetId = goalset.id;

  return (
    <div className="flex flex-col items-center">
      <div className="pt-7 pb-3">
        <button onClick={handleOnClickSetColumns}>
          <img src={ColumnsIcon}></img>
        </button>
      </div>
      <ul className={`grid ${folderColumns == 1 ? "grid-cols-1" : folderColumns == 2 ? "grid-cols-2" : "grid-cols-3"} w-full text-center sm:gap-6 gap-3 sm:px-6 px-2 justify-items-center`}>
        {goalset.goalSet.map((goalCard, index) => (
          <div className="flex min-w-[30%] w-full justify-center max-w-96 sm:text-base text-xs" key={`${goalCard.id}-${index}`}>
            <GoalCard card={goalCard} goalSetId={goalSetId} />
          </div>
        ))}
        <div className="cursor-pointer w-full max-w-96 flex" onClick={handleAddGoalCard}>
          <p className="border-2 border-gray-400 border-dashed p-2 sm:m-3 m-0 font-semibold w-full">+ Añadir Goal Card</p>
        </div>
      </ul>
    </div>
  )
}

export default GoalSet;