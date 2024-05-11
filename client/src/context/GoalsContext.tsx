import { createContext, useContext, useState, ReactNode } from "react";

export type GoalOrganizer = {
    id: number,
    name: string,
    goalSet: GoalCards[],
}

export type GoalCards = {
    id: number,
    content: string,
    isComplete: boolean,
    taskList: TaskList[];
}

export type TaskList = {
    id: number,
    content: string,
    isComplete: boolean,
}

interface GoalsContextType {
    goalOrganizer: GoalOrganizer[];
    setGoalOrganizer: (goalOrganizer: GoalOrganizer[]) => void;
}

const defaultState: GoalsContextType = {
    goalOrganizer: [],
    setGoalOrganizer: (goalOrganizer: GoalOrganizer[]) => {}
}

const GoalsContext = createContext(defaultState);

export const useGoals = () => {
    const context = useContext(GoalsContext);
    if (!context) {
        throw new Error("useGoals must be used within a GoalsContextProvider");
    } else {
        return context;
    }
}

type GoalsProviderProps = {
    children: ReactNode,
}

function GoalsContextProvider({children} : GoalsProviderProps) {
    const [goalOrganizer, setGoalOrganizer] = useState<GoalOrganizer[]>([]);

    return (
        <GoalsContext.Provider value={{ goalOrganizer, setGoalOrganizer }}>
            {children}
        </GoalsContext.Provider>
    )
}

export default GoalsContextProvider;