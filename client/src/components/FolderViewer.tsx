import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";

function FolderViewer() {
    const { goalOrganizer, handleOnChangeName } = useGoals();

    return (
        <div className="relative h-96 text-center overflow-x-scroll overflow-y-hidden scrollbar-custom">
            <ul className="flex h-full justify-start pt-40 pl-28">
                {goalOrganizer.map((folder, index) => (
                    <li key={`${folder.id}-${index}`} className={`min-w-64 w-[250px] h-[198px] transform-custom perspective-custom -m-[90px]`}>
                        <div className="transform-element-custom z-50 relative w-fit">
                            <input placeholder="Folder" className="w-full relative z-50 text-slate-600 uppercase text-sm bg-gray-200 bg-opacity-60 font-medium" type="text" value={folder.name} onChange={(e) => handleOnChangeName(e, folder.id)}></input>
                        </div>
                        <div className="w-full h-full transform-element-custom">
                            <img className={`absolute object-cover translate-y-[-38px] translate-x-[-30px] w-full h-full ${index % 2 === 1 ? 'hue-rotate-15' : ''}`} src={FolderView}></img>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;