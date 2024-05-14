import { useState } from "react";
import GoalCard from "./GoalCard";
import { GoalCards, GoalOrganizer, useGoals } from "../context/GoalsContext";

type Props = {
  goalset: GoalOrganizer;
}

function GoalSet({ goalset }: Props) {

  const { goalOrganizer, setGoalOrganizer } = useGoals();
  const [idGoalCard, setIdGoalCard] = useState(1);

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

  const goalSetId = goalset.id;

  return (
    <div className="flex flex-col items-center">
      <ul className="grid sm:grid-cols-3 grid-cols-2">
        {goalset.goalSet.map((goalCard) => (
          <div className="flex min-w-[30%] justify-center sm:w-fit sm:text-base text-xs" key={goalCard.id}>
            <GoalCard card={goalCard} goalSetId={goalSetId} />
          </div>
        ))}
      </ul>
      <div className="cursor-pointer py-6 font-semibold" onClick={handleAddGoalCard}>
        + Añadir Goal Card
      </div>
    </div>
  )
}

export default GoalSet;