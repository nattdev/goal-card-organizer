import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer } = useGoals();
    const [idGoalFolder, setIdGoalFolder] = useState(1);

    function handleAddGoalFolder() {
        const newGoalFolder: GoalOrganizer = {
            id: idGoalFolder,
            name: "First Set 1",
            goalSet: []
        };

        setGoalOrganizer([...goalOrganizer, newGoalFolder]);
        setIdGoalFolder(idGoalFolder + 1);
    }

    function handleDeleteGoalFolder(folderId: number) {
        const updatedGoalOrganizer = goalOrganizer.filter((goalFolder) => goalFolder.id !== folderId);
        setGoalOrganizer(updatedGoalOrganizer);
    }

    return (
        <div>
            <div onClick={handleAddGoalFolder}>
                + Añadir Folder
            </div>
            {goalOrganizer.map(folder => (
                <div key={folder.id}>
                    <div>
                        <span onClick={() => handleDeleteGoalFolder(folder.id)}>🗑️</span>
                        <p>Nombre de Folder</p>
                    </div>
                    <GoalSet goalset={folder} />
                </div>
            ))}
        </div>
    )
}

export default GoalFolder;