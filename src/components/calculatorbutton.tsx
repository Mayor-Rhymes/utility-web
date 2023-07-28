import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (value: number | string) => void;
  label: number | string
//   className: string;
}

export default function CalcButton({children, onClick, label}: Props) {
  return (
    <button
      onClick={() => onClick(label)}
      className="text-center bg-slate-100 active:shadow-sm dark:text-black active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
    >
      {children}
    </button>
  );
}
