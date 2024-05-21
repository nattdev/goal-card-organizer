import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";

function FolderViewer() {
    const { goalOrganizer, handleOnChangeName, handleDeleteGoalFolder } = useGoals();

    return (
        <div className="relative min-h-96 text-center overflow-x-scroll overflow-y-hidden scrollbar-custom pb-56">
            <ul className="flex h-full justify-start pt-40 pl-28">
                {goalOrganizer.map((folder, index) => (
                    <li key={`${folder.id}-${index}`} className={`min-w-64 sm:w-[300px] sm:h-[240px] sm:min-w-[300px] w-[250px] h-[223px] transform-custom perspective-custom -m-[90px]`}>
                        <div className="transform-element-custom">
                            <div className="relative w-fit z-50">
                                <input placeholder="Folder" className="w-full relative text-slate-600 uppercase text-sm bg-gray-200 bg-opacity-60 font-medium" type="text" value={folder.name} onChange={(e) => handleOnChangeName(e, folder.id)}></input>
                            </div>
                            <div className="w-full h-full">
                                <img className={`absolute object-cover sm:translate-y-[-37px] translate-y-[-34px] translate-x-[-30px] w-full sm:h-[239px] h-[204px] ${index % 2 === 1 ? 'hue-rotate-15' : ''}`} src={FolderView}></img>
                                <div className="absolute top-[-14px] right-[39px] cursor-pointer opacity-20 p-3" onClick={() => handleDeleteGoalFolder(folder.id)}>
                                    <div className="bg-slate-300 p-[2px]">
                                        <img className="min-w-2 w-2" src={BoldCloseIcon}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;