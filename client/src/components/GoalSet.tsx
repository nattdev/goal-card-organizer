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
          content: "First Goal Card",
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
    <>
      <div onClick={handleAddGoalCard}>
        + Añadir Goal Card
      </div>
      <ul>
        {goalset.goalSet.map((goalCard) => (
          <div key={goalCard.id}>
            <GoalCard card={goalCard} goalSetId={goalSetId} />
          </div>
        ))}
      </ul>
    </>
  )
}

export default GoalSet;