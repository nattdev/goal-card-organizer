import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer, handleOnChangeName, handleDeleteGoalFolder } = useGoals();
    const [idGoalFolder, setIdGoalFolder] = useState(() => {
        const storedItems = localStorage.getItem("goalOrganizerList");
        if (storedItems) {
            const parseStoredItems = JSON.parse(storedItems);
            const maxId = parseStoredItems.reduce((max: number, folder: { id: number; }) => folder.id > max ? folder.id : max, 0);
            return maxId + 1;
        } else {
            return 1;
        }
    });

    function handleAddGoalFolder() {
        const newGoalFolder: GoalOrganizer = {
            id: idGoalFolder,
            name: "",
            columns: window.innerWidth > 640 ? 3 : 2,
            goalSet: []
        };

        setGoalOrganizer([...goalOrganizer, newGoalFolder]);
        setIdGoalFolder(idGoalFolder + 1);
    }

    return (
        <div className="flex flex-col">
            <div className="order-0 p-6 z-30 w-fit m-auto" onClick={handleAddGoalFolder}>
                <p className="w-fit border-2 p-3 rounded-2xl border-dashed border-slate-300 font-semibold">+ Añadir Folder</p>
            </div>
            {goalOrganizer.map((folder, index) => (
                <div className={`flex flex-col relative border-white pt-0 ${index % 2 === 1 ? 'bg-[#e7df7b]' : 'bg-yellow-300'}`} key={`${folder.id}-${index}`}>
                    <header className="flex items-center order-2 px-2 opacity-10">
                        <input placeholder="Folder" className="bg-transparent sm:text-7xl text-5xl left-0 bottom-0 w-full uppercase placeholder-gray-950 placeholder-opacity-50 py-6" type="text" value={folder.name} onChange={(e) => handleOnChangeName(e, folder.id)}></input>
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