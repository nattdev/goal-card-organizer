import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";

function FolderViewer() {
    const { goalOrganizer } = useGoals();

    return (
        <div className="h-[370px] w-full text-center">
            <ul className="flex h-full pb-20 justify-start relative pr-64 overflow-x-scroll scrollbar-custom">
                {goalOrganizer.map((folder, index) => (
                    <li key={folder.id} className="min-w-[300px] w-[300px] h-[270px] inline-flex relative -mr-[15.5em] perspective-custom">
                        <p className="absolute top-0 z-30 text-vertical-custom -tracking-[0.25em] font-semibold text-slate-700 uppercase max-h-[9.50rem] mt-20 overflow-hidden transform-custom ml-10">{folder.name}</p>
                        <img className={`transform-custom h-full absolute ${index % 2 === 1 ? 'hue-rotate-15' : ''}`} src={FolderView}></img>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;