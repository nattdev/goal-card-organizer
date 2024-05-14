import { useState } from "react";
import { GoalCards, TaskList, useGoals } from "../context/GoalsContext";
import GoalCompleteIcon from "../assets/icons/GoalCompleteIcon.svg";
import TaskCompleteIcon from "../assets/icons/TaskCompleteIcon.svg";
import MinusCloseIcon from "../assets/icons/MinusCloseIcon.svg";

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
        if (e.target.className.includes("card-content")) {
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

    function handleDeleteGoalCard(cardId: number) {
        const updatedGoalOrganizer = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === goalSetId) {
                const updatedGoalCard = goalFolder.goalSet.filter((goalSet) => goalSet.id !== cardId);
                return {
                    ...goalFolder,
                    goalSet: updatedGoalCard
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalOrganizer);
    }

    return (
        <div className={`flex flex-col border-b-4 min-w-3/12 max-w-fit m-3 px-3 pb-3 border-gray-400 pt-2 ${card.isComplete ? "bg-green-200" : "bg-white"}`}>
            <div className="flex justify-between items-center">
                <span className="text-sm opacity-50" onClick={() => handleDeleteGoalCard(card.id)}><img className="cursor-pointer" src={MinusCloseIcon}></img></span>
                <div className="pr-4" onClick={() => handleGoalIsComplete(card.id)}><img className={`min-w-8 cursor-pointer ${card.isComplete ? "" : "grayscale"}`} src={GoalCompleteIcon}></img></div>
            </div>
            <header className="mb-3">
                <input className="w-full card-content text-2xl font-semibold text-center bg-transparent" type="text" placeholder="Ingresar Título" defaultValue={card.content} onChange={(e) => handleOnChangeContent(e, card.id)}></input>
            </header>
            <div>
                <ul>
                    {card.taskList.map((task) => (
                        <li key={task.id} className="flex justify-between py-1 items-center">
                            <span className="px-1">●</span>
                            <input className={`bg-transparent task-content font-normal flex-grow w-full ${task.isComplete ? "line-through" : ""}`} type="text" onChange={(e) => handleOnChangeContent(e, task.id)} value={task.content}></input>
                            <span className="ml-2 min-w-6" onClick={() => handleIsComplete(task.id)}>
                                <img className={`w-full cursor-pointer ${task.isComplete ? "" : "grayscale"}`} src={TaskCompleteIcon}></img>
                            </span>
                            <span className="text-xs opacity-85 pl-1 cursor-pointer" onClick={() => handleDeleteTask(task.id)}>🗑️</span>
                        </li>
                    ))}
                    <p onClick={handleAddTask}>+ Añadir Tarea</p>
                </ul>
            </div>
        </div>
    );
}

export default GoalCard;