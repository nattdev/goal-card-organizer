import { useState } from "react";
import { GoalCards, TaskList, useGoals } from "../context/GoalsContext";

type Props = {
    card: GoalCards,
    goalSetId: number
}

function GoalCard({ card, goalSetId }: Props) {

    const { goalOrganizer, setGoalOrganizer } = useGoals();
    const [idTask, setIdTask] = useState(1);

    function handleAddTask() {
        const updatedGoalOrganizer = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === goalSetId) {
                return {
                    ...goalFolder,
                    goalSet: goalFolder.goalSet.map((goalCard) => {
                        if (goalCard.id === card.id) {
                            const newTask: TaskList = {
                                id: idTask,
                                content: "Nueva tarea",
                                isComplete: false
                            };
                            return {
                                ...goalCard,
                                taskList: [...goalCard.taskList, newTask]
                            };
                        }
                        return goalCard;
                    })
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalOrganizer);
        setIdTask(idTask + 1);
    }

    function handleOnChangeContent(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        if (e.target.className == "card-content") {
            const updatedGoalCards = goalOrganizer.map((goalFolder) => {
                if (goalFolder.id === goalSetId) {
                    return {
                        ...goalFolder,
                        goalSet: goalFolder.goalSet.map((goalCard) => {
                            if (goalCard.id === id) {
                                return {
                                    ...goalCard,
                                    content: e.target.value,
                                };
                            }
                            return goalCard;
                        })
                    };
                }
                return goalFolder;
            });
            setGoalOrganizer(updatedGoalCards);
        } else {
            const updatedGoalTask = goalOrganizer.map((goalFolder) => {
                if (goalFolder.id === goalSetId) {
                    return {
                        ...goalFolder,
                        goalSet: goalFolder.goalSet.map((goalCard) => {
                            if (goalCard.id === card.id) {
                                return {
                                    ...goalCard,
                                    taskList: goalCard.taskList.map((task) => {
                                        if (task.id === id) {
                                            return {
                                                ...task,
                                                content: e.target.value
                                            };
                                        }
                                        return task;
                                    })
                                };
                            }
                            return goalCard;
                        })
                    };
                }
                return goalFolder;
            });
            setGoalOrganizer(updatedGoalTask);
        }
    }

    function handleIsComplete(taskId: number) {
        const updatedGoalOrganizer = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === goalSetId) {
                return {
                    ...goalFolder,
                    goalSet: goalFolder.goalSet.map((goalCard) => {
                        if (goalCard.id === card.id) {
                            return {
                                ...goalCard,
                                taskList: goalCard.taskList.map((task) => {
                                    if (task.id === taskId) {
                                        return {
                                            ...task,
                                            isComplete: !task.isComplete
                                        };
                                    }
                                    return task;
                                })
                            };
                        }
                        return goalCard;
                    })
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalOrganizer);
    }

    function handleGoalIsComplete(goalId: number) {
        const updatedGoalOrganizer = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === goalSetId) {
                return {
                    ...goalFolder,
                    goalSet: goalFolder.goalSet.map((goalCard) => {
                        if (goalCard.id === goalId) {
                            return {
                                ...goalCard,
                                isComplete: !goalCard.isComplete
                            };
                        }
                        return goalCard;
                    })
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalOrganizer);
    }

    function handleDeleteTask(taskId: number) {
        const updatedGoalOrganizer = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === goalSetId) {
                return {
                    ...goalFolder,
                    goalSet: goalFolder.goalSet.map((goalCard) => {
                        if (goalCard.id === card.id) {
                            const updatedTaskList = goalCard.taskList.filter((task) => task.id !== taskId);
                            return {
                                ...goalCard,
                                taskList: updatedTaskList
                            };
                        }
                        return goalCard;
                    })
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalOrganizer);
    }

    return (
        <div>
            <div onClick={() => handleGoalIsComplete(card.id)}>{card.isComplete ? "Complete" : "No Complete"}</div>
            <header>
                <input className="card-content" type="text" defaultValue={card.content} onBlur={(e) => handleOnChangeContent(e, card.id)}></input>
            </header>
            <div>
                <ul>
                    {card.taskList.map((task) => (
                        <li key={task.id}>
                            <span onClick={() => handleDeleteTask(task.id)}>🗑️</span>
                            <input className="task-content" type="text" onChange={(e) => handleOnChangeContent(e, task.id)} value={task.content}></input>
                            <span onClick={() => handleIsComplete(task.id)}>{task.isComplete ? "✅" : "No Complete"}</span>
                            <p>Mi tarea {task.id}</p>
                        </li>
                    ))}
                    <p onClick={handleAddTask}>+ Añadir Tarea</p>
                </ul>
            </div>
        </div>
    );
}

export default GoalCard;