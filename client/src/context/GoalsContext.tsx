import { createContext, useContext, useState, ReactNode } from "react";

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
    goalCards: GoalCards[];
    setGoalCards: (goalCards: GoalCards[]) => void;
}

const defaultState: GoalsContextType = {
    goalCards: [],
    setGoalCards: (goalCards: GoalCards[]) => {}
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
    const [goalCards, setGoalCards] = useState<GoalCards[]>([]);

    return (
        <GoalsContext.Provider value={{ goalCards, setGoalCards }}>
            {children}
        </GoalsContext.Provider>
    )
}

export default GoalsContextProvider;