import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer } = useGoals();
    const [idGoalFolder, setIdGoalFolder] = useState(1);

    function handleAddGoalSet() {
        const newGoalFolder: GoalOrganizer = {
            id: idGoalFolder,
            name: "First Set 1",
            goalSet: []
        };

        setGoalOrganizer([...goalOrganizer, newGoalFolder]);
        setIdGoalFolder(idGoalFolder + 1);
    }

    return (
        <div>
            <div onClick={handleAddGoalSet}>
                + Añadir Folder
            </div>
            {goalOrganizer.map(folder => (
                <div key={folder.id}>
                    <p>Nombre de Folder</p>
                    <GoalSet goalset={folder} />
                </div>
            ))}
        </div>
    )
}

export default GoalFolder;