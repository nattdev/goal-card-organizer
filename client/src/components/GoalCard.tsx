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

    function handleOnBlurTask(e: React.FocusEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    function handleIsComplete(taskId: number) {
        const updatedGoalCards = goalCards.map((goalCard) => {
            if (goalCard.id === card.id) {
                const updatedTaskList = goalCard.taskList.map((task) => {
                    if (task.id === taskId) {
                        return {
                            ...task,
                            isComplete: !task.isComplete
                        };
                    }
                    return task;
                });
                return {
                    ...goalCard,
                    taskList: updatedTaskList
                };
            }
            return goalCard;
        });
        setGoalCards(updatedGoalCards);
    }

    function handleGoalIsComplete(goalId: number) {
        const updatedGoalCards = goalCards.map((goalCard) => {
            if (goalCard.id === goalId) {
                return {
                    ...goalCard,
                    isComplete: !goalCard.isComplete
                };
            }
            return goalCard;
        });
        setGoalCards(updatedGoalCards);
    }

    function handleDeleteTask(taskId: number) {
        console.log(taskId, "TASKID");
        const updatedGoalCards = goalCards.map((goalCard) => {
            if (goalCard.id === card.id) {
                const updatedTaskList = goalCard.taskList.filter((task) => task.id !== taskId);
                return {
                    ...goalCard,
                    taskList: updatedTaskList
                };
            }
            return goalCard;
        });
        setGoalCards(updatedGoalCards);
    }

    return (
        <div>
            <div onClick={() => handleGoalIsComplete(card.id)}>{card.isComplete ? "Complete" : "No Complete"}</div>
            <header>
                <input type="text" defaultValue={card.content} onBlur={(e) => handleOnBlurTask(e)}></input>
            </header>
            <div>
                <ul>
                    {card.taskList.map((task, index) => (
                        <li key={index}>
                            <span onClick={() => handleDeleteTask(task.id)}>🗑️</span>
                            <input type="text" defaultValue={task.content} onBlur={(e) => handleOnBlurTask(e)}></input>
                            <span onClick={() => handleIsComplete(task.id)}>{task.isComplete ? "✅" : "No Complete"}</span>
                        </li>
                    ))}
                    <p onClick={handleAddTask}>+ Añadir Tarea</p>
                </ul>
            </div>
        </div>
    );
}

export default GoalCard;