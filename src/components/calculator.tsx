import {BsFillBackspaceFill} from 'react-icons/bs'
import {MdClear} from 'react-icons/md'

export default function Calculator() {


    return (
        <div className="flex flex-col space-y-2">
            <div className="h-[100px] mt-5 max-w-[300px] bg-white shadow-md rounded-md">
                
            </div>

            <div className="grid grid-cols-4 gap-3">
                <div className="text-center bg-red-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center col-span-2 shadow-md"><MdClear /></div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">Pi</div>
                <div className="text-center flex items-center active:shadow-sm active:text-sm px-3 py-3 justify-center bg-slate-100 rounded-md shadow-md"><BsFillBackspaceFill /></div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">7</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">8</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">9</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">x</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">4</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">5</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">6</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">-</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">1</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">2</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">3</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">/</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">+/-</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">0</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">.</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">+</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">%</div>
                <div className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">^</div>
                <div className="text-center bg-green-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md col-span-2">=</div>
                
                
                
            </div>
        </div>
    )
}