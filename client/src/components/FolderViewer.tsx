import { useGoals } from "../context/GoalsContext";
import FolderView from "../assets/icons/FolderView.svg";
import BoldCloseIcon from "../assets/icons/BoldCloseIcon.svg";
import CheckCompleteIcon from "../assets/icons/CheckCompleteIcon.svg"
import ViewEyeIcon from "../assets/icons/ViewEyeIcon.svg"
import ViewEyeSlashIcon from "../assets/icons/ViewEyeSlashIcon.svg"

function FolderViewer() {
    const { goalOrganizer, handleOnChangeName, handleDeleteGoalFolder, handleOnClickIsVisible } = useGoals();

    return (
        <div className="relative min-h-96 text-center overflow-x-scroll overflow-y-hidden scrollbar-custom pb-56">
            <ul className="flex h-full justify-start pt-40 pl-28">
                {goalOrganizer.map((folder, index) => (
                    <li key={`${folder.id}-${index}`} className={`min-w-64 sm:w-[300px] sm:h-[240px] sm:min-w-[300px] w-[250px] h-[223px] transform-custom perspective-custom -m-[90px] ${folder.isVisible ? "" : "grayscale opacity-90"}`}>
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
                            <div className="absolute w-1/4 text-gray-700 text-left top-[40px] -left-4">
                                <div>
                                    <div className="flex items-center sm:text-sm text-xs">
                                        <img className="opacity-50 pr-1" src={CheckCompleteIcon}></img><span className="pr-1 font-medium">{folder.goalSet.filter(goal => goal.isComplete).length}</span>
                                        de {folder.goalSet.length}</div>
                                </div>
                            </div>
                            <div onClick={() => handleOnClickIsVisible(folder.id)} className="absolute sm:top-[180px] top-[158px] opacity-65 -left-4 cursor-pointer">
                                <img className="sm:w-auto w-5" src={folder.isVisible ? ViewEyeIcon : ViewEyeSlashIcon}></img>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FolderViewer;