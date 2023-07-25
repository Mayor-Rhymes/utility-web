import Link from "next/link";


export default function Navbar() {

     return (
        <nav className="flex justify-around h-[70px] items-center px-4">

            <h3 className="grow">Not Sure</h3>

            <ul className="list-none flex grow-[3] justify-evenly">
                <li><Link href="/" className="hover:bg-slate-300 p-2 hover:rounded-sm transition-all">Home</Link></li>
                <li><Link href="note" className="hover:bg-slate-300 p-2 hover:rounded-sm transition-all">Note</Link></li>
                <li><Link href="calculator" className="hover:bg-slate-300 p-2 hover:rounded-sm transition-all">Calculator</Link></li>
                <li><Link href="/currency-converter" className="hover:bg-slate-300 p-2 hover:rounded-sm transition-all">Currency-Converter</Link></li>
                <li><Link href="" className="hover:bg-slate-300 p-2 hover:rounded-sm transition-all">Signup/Login</Link></li>

                
                
            </ul>
        </nav>
     )
}