import { Dispatch, SetStateAction } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {AiFillPlusCircle} from 'react-icons/ai'
import DropdownMenuDemo from "./dropdown";

interface INote {
  _id: string;
  title: string;
  content: string;
}

interface Props {
  notes: INote[];
  handleClick: (note: INote) => void;
  setCurrentId: Dispatch<SetStateAction<string>>;
  handleDelete: (id: string) => void;
  currentId: string;
  handleCreate: () => void;
}

export default function Sidebar({ notes, handleClick, setCurrentId, handleDelete, handleCreate }: Props) {
  return (
    <div className="flex flex-col space-y-4 grow-[2] h-full px-3 border-r-2 border-r-black">
      
      {notes.map((note) => (
        <div
          key={note._id}
          className="flex justify-between items-center p-3 hover:bg-slate-200 transition-all rounded-md cursor-pointer"
        >
          <p
            onClick={() => {
              handleClick(note);
              setCurrentId(note._id);
            }}
          >
            {note.title}
          </p>
          <div>
          {/* <CiMenuKebab /> */}
          <DropdownMenuDemo handleDelete={handleDelete} id={note._id}/>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center p-3">
         <AiFillPlusCircle className="text-lg lg:text-xl cursor-pointer" onClick={handleCreate}/>
      </div>
    </div>
  );
}
