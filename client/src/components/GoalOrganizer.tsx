import { useState } from "react";
import GoalCard from "./GoalCard";
import { GoalCards, useGoals } from "../context/GoalsContext";

function GoalOrganizer() {

    const { goalCards, setGoalCards } = useGoals();
    const [idGoalCard, setIdGoalCard] = useState(1);
   
    function handleAddGoalCard() {
      console.log(idGoalCard);
      const newGoalCard: GoalCards = {
        id: idGoalCard,
        content: "First Goal 1",
        isComplete: false,
        taskList: [
          {
            id: 1,
            content: "Mi lista 1",
            isComplete: false
          },
          {
            id: 2,
            content: "Mi lista 2",
            isComplete: true
          }
        ]
      };
  
      setGoalCards([...goalCards, newGoalCard]);
      console.log(newGoalCard);
      setIdGoalCard(idGoalCard + 1);
    }
  
    return (
      <>
        <div onClick={handleAddGoalCard}>
          + Añadir Goal Card
        </div>
        <ul>
          {goalCards.map(card => (
            <GoalCard key={card.id} card={card} />
          ))}
        </ul>
      </>
    )
  }
  
  export default GoalOrganizer;