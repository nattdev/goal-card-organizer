import { useState } from "react";
import { GoalOrganizer, useGoals } from "../context/GoalsContext";
import GoalSet from "./GoalSet";

function GoalFolder() {

    const { goalOrganizer, setGoalOrganizer } = useGoals();
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
            isMinimize: false,
            isVisible: true,
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
                    <GoalSet goalset={folder} folderId={folder.id} folderName={folder.name} />
                    <div>{folder.isMinimize}</div>
                </div>
            ))}
        </div>
    )
}

export default GoalFolder;