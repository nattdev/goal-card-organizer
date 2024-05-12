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

    function handleOnChangeName(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        const updatedGoalFolder = goalOrganizer.map((goalFolder) => {
            if (goalFolder.id === id) {
                return {
                    ...goalFolder,
                    name: e.target.value,
                };
            }
            return goalFolder;
        });
        setGoalOrganizer(updatedGoalFolder);
    }

    return (
        <div>
            <div onClick={handleAddGoalFolder}>
                + Añadir Folder
            </div>
            {goalOrganizer.map(folder => (
                <div key={folder.id}>
                    <header>
                        <span onClick={() => handleDeleteGoalFolder(folder.id)}>🗑️</span>
                        <input type="text" defaultValue={folder.name} onBlur={(e) => handleOnChangeName(e, folder.id)}></input>
                    </header>
                    <GoalSet goalset={folder} />
                </div>
            ))}
        </div>
    )
}

export default GoalFolder;