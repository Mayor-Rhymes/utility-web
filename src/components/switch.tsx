import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useState, useEffect } from "react";
import {useTheme} from 'next-themes';

const SwitchDemo = () => {

  const [mounted, setMounted] = useState<null | boolean>(null);
  const {theme, setTheme} = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <form>
      <div
        className="flex items-center px-2 pb-6"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label
          className="text-[15px] leading-none pr-[15px]"
          htmlFor="airplane-mode"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </label>
        <Switch.Root
          className="w-[42px] h-[25px] bg-slate-300 rounded-full relative data-[state=checked]:bg-black outline-none cursor-pointer"
          id="dark-mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
      </div>
    </form>
  );
};

export default SwitchDemo;
