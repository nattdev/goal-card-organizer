import { GoalCards } from "../context/GoalsContext";

type Props = {
    card: GoalCards;
}

function GoalCard({ card }: Props) {
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
                            <p>{task.content}</p>
                            <span>{task.isComplete ? "✅" : "No Complete"}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default GoalCard;