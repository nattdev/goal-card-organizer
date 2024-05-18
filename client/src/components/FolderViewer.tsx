import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";

function FolderViewer() {
    const { goalOrganizer, handleOnChangeName } = useGoals();

    return (
        <div className="h-full w-full text-center">
            <ul className="min-h-96 flex justify-start scrollbar-custom pt-48 overflow-x-scroll overflow-y-hidden pl-28">
                {goalOrganizer.map((folder, index) => (
                    <li key={`${folder.id}-${index}`} className={`transform-custom -m-14`}>
                        <div className="">
                            <input placeholder="Folder" className="relative z-50 text-slate-600 uppercase text-sm bg-gray-200 bg-opacity-20" type="text" value={folder.name} onChange={(e) => handleOnChangeName(e, folder.id)}></input>
                        </div>
                        <div className="">
                            <img className={`${index % 2 === 1 ? 'hue-rotate-15' : ''} absolute object-cover translate-y-[-43px] translate-x-[-10px]`} src={FolderView}></img>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;