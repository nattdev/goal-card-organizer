import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer } = useGoals();
    const [idGoalFolder, setIdGoalFolder] = useState(1);

    function handleAddGoalFolder() {
        const newGoalFolder: GoalOrganizer = {
            id: idGoalFolder,
            name: "",
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
        <div className="flex flex-col-reverse">
            <div className="order-1 p-6 z-30" onClick={handleAddGoalFolder}>
                + Añadir Folder
            </div>
            {goalOrganizer.map(folder => (
                <div className={`flex flex-col relative bg-yellow-300 border-2 border-white pt-9`} key={folder.id}>
                    <header className="flex items-center order-2 px-2 opacity-10">
                        <input placeholder="Folder" className="bg-transparent text-7xl left-0 bottom-0 w-full" type="text" defaultValue={folder.name} onBlur={(e) => handleOnChangeName(e, folder.id)}></input>
                        <span className="pl-3" onClick={() => handleDeleteGoalFolder(folder.id)}>
                            <img className="min-w-6 w-6" src={BoldCloseIcon}></img>
                        </span>
                    </header>
                    <GoalSet goalset={folder} />
                </div>
            ))}
        </div>
    )
}

export default GoalFolder;