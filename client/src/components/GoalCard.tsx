import { useState } from "react";
import { GoalCards, TaskList, useGoals } from "../context/GoalsContext";
import GoalCompleteIcon from "../assets/icons/GoalCompleteIcon.svg";
import TaskCompleteIcon from "../assets/icons/TaskCompleteIcon.svg";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";

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
                                content: "",
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
        <div className={`flex flex-col w-full border-b-4 sm:m-3 sm:px-3 px-1 pb-3 border-gray-400 pt-2 ${card.isComplete ? "bg-green-100" : "bg-white"}`}>
            <div className="flex justify-between items-center pb-1">
                <div className="pl-0" onClick={() => handleGoalIsComplete(card.id)}><img className={`min-w-8 cursor-pointer ${card.isComplete ? "" : "grayscale"}`} src={GoalCompleteIcon}></img></div>
                <span className="text-sm opacity-50" onClick={() => handleDeleteGoalCard(card.id)}><img className="cursor-pointer pr-1" src={BoldCloseIcon}></img></span>
            </div>
            <header className="mb-3 border-b-2 pb-2 border-gray-400">
                <input className={`w-full card-content font-semibold text-center bg-transparent sm:text-2xl text-base ${card.isComplete ? "line-through" : ""}`} type="text" placeholder="Ingresar Título" defaultValue={card.content} onChange={(e) => handleOnChangeContent(e, card.id)}></input>
            </header>
            <div>
                <ul className="pb-4">
                    {card.taskList.map((task) => (
                        <li key={task.id} className="flex justify-between py-1 items-center">
                            <span className="mr-2 sm:min-w-6 min-w-5" onClick={() => handleIsComplete(task.id)}>
                                <img className={`w-full cursor-pointer ${task.isComplete ? "" : "grayscale"}`} src={TaskCompleteIcon}></img>
                            </span>
                            <input className={`bg-transparent task-content font-normal flex-grow w-full ${task.isComplete ? "line-through" : ""}`} type="text" onChange={(e) => handleOnChangeContent(e, task.id)} value={task.content} placeholder="Nueva Tarea"></input>
                            <span className="text-xs opacity-85 pl-1 cursor-pointer" onClick={() => handleDeleteTask(task.id)}>🗑️</span>
                        </li>
                    ))}
                </ul>
                <p className="w-fit" onClick={handleAddTask}>+ Añadir Tarea</p>
            </div>
        </div>
    );
}

export default GoalCard;