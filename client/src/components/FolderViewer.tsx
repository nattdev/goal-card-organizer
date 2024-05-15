import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";

function FolderViewer() {
    const { goalOrganizer } = useGoals();

    return (
        <div className="h-auto w-full text-center">
            <ul className="flex h-auto justify-center relative pr-64">
                {goalOrganizer.map((folder) => (
                    <li key={folder.id} className="w-[300px] h-[319px] inline-flex relative -mr-[15em]">
                        <span className="absolute bottom-0 z-30 text-vertical-custom -tracking-[0.25em] font-semibold text-slate-700 uppercase max-h-[9.50rem] mb-14 overflow-hidden transform-custom ml-9">{folder.name}</span>
                        <img className="transform-custom h-full absolute" src={FolderView}></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;