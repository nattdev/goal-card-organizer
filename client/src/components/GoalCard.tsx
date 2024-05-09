import { GoalCards, TaskList, useGoals } from "../context/GoalsContext";

type Props = {
    card: GoalCards;
}

function GoalCard({ card }: Props) {

    const { goalCards, setGoalCards } = useGoals();

    function handleAddTask() {
        const updatedGoalCards = goalCards.map((goalCard) => {
            if (goalCard.id === card.id) {
                const newTask: TaskList = {
                    id: goalCard.taskList.length + 1,
                    content: "Nueva tarea",
                    isComplete: false
                };
                return {
                    ...goalCard,
                    taskList: [...goalCard.taskList, newTask]
                };
            }
            return goalCard;
        });
        setGoalCards(updatedGoalCards);
    }

    function handleOnBlur(e: React.FocusEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    return (
        <div>
            <div>{card.isComplete ? "Complete" : "No Complete"}</div>
            <header>
                <p>{card.content}</p>
            </header>
            <div>
                <ul>
                    {card.taskList.map((task, index) => (
                        <li key={index}>
                            <input type="text" defaultValue={task.content} onBlur={(e) => handleOnBlur(e)}></input>
                            <p>{task.content}</p>
                            <span>{task.isComplete ? "✅" : "No Complete"}</span>
                        </li>
                    ))}
                    <p onClick={handleAddTask}>+ Añadir Tarea</p>
                </ul>
            </div>
        </div>
    );
}

export default GoalCard;