'use client';

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from 'react';
import SwitchDemo from './switch';

export default function Navbar() {

  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex flex-col space-y-4 lg:flex-row justify-around lg:h-[70px] py-4 lg:items-center px-4">
      <h3 className="grow hidden lg:block">Not Sure</h3>
      <div className="lg:hidden flex justify-between w-full grow items-center">
        <h3 className="grow">Not Sure</h3>
        <RxHamburgerMenu onClick={() => setVisible(!visible)} className="lg:hidden text-blue-500 text-xl hover:text-blue-700 cursor-pointer" />
      </div>

      <ul className="list-none hidden lg:flex grow-[3] justify-evenly">
        <li>
          <Link
            href="/"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="note"
            className="hover:bg-slate-300  dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Note
          </Link>
        </li>
        <li>
          <Link
            href="calculator"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/currency-converter"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Currency-Converter
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Signup/Login
          </Link>
        </li>
        <li>
            <SwitchDemo />
        </li>
      </ul>

      {visible && <ul className="absolute top-12 left-0 w-full bg-white dark:bg-[#121212] flex flex-col space-y-4 lg:hidden">
        <li>
          <Link
            href="/"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="note"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Note
          </Link>
        </li>
        <li>
          <Link
            href="calculator"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/currency-converter"
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Currency-Converter
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="hover:bg-slate-300 dark:hover:text-black p-2 hover:rounded-sm transition-all"
          >
            Signup/Login
          </Link>
        </li>
        <li>
            <SwitchDemo />
        </li>
      </ul>}
    </nav>
  );
}
