import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";

function FolderViewer() {
    const { goalOrganizer, handleOnChangeName } = useGoals();

    return (
        <div className="h-full w-full text-center">
            <ul className="flex min-h-96 pb-20 justify-start relative pr-64 overflow-x-scroll scrollbar-custom gap-x-4 overflow-y-hidden pt-3" key={"1"}>
                {goalOrganizer.map((folder, index) => (
                    <li key={`${folder.id}-${index}`} className={`min-w-[300px] w-[300px] h-[270px] inline-flex relative -mr-[15.0em]`}>
                        <div className="top-0 perspective-custom input-perspective z-30">
                            <input placeholder="Folder" className="text-vertical-custom font-semibold text-slate-500 uppercase max-h-[9.50rem] mt-12 text-sm overflow-hidden transform-custom ml-7 bg-gray-200 bg-opacity-60 relative z-50" type="text" value={folder.name} onChange={(e) => handleOnChangeName(e, folder.id)}></input>
                        </div>
                        <div className="h-full absolute z-10 perspective-custom">
                            <img className={`transform-custom h-full ${index % 2 === 1 ? 'hue-rotate-15' : ''}`} src={FolderView}></img>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;