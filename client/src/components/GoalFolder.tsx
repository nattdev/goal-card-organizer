import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer, handleOnChangeName } = useGoals();
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

    return (
        <div className="flex flex-col">
            <div className="order-0 p-6 z-30 w-fit m-auto" onClick={handleAddGoalFolder}>
                <p className="w-fit border-2 p-3 rounded-2xl border-dashed border-slate-300 font-semibold">+ Añadir Folder</p>
            </div>
            {goalOrganizer.map((folder, index) => (
                <div className={`flex flex-col relative border-white pt-9 ${index % 2 === 1 ? 'bg-[#e7df7b]' : 'bg-yellow-300'}`} key={`${folder.id}-${index}`}>
                    <header className="flex items-center order-2 px-2 opacity-10">
                        <input placeholder="Folder" className="bg-transparent text-7xl left-0 bottom-0 w-full uppercase placeholder-gray-950 placeholder-opacity-50" type="text" defaultValue={folder.name} onBlur={(e) => handleOnChangeName(e, folder.id)}></input>
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