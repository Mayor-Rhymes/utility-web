import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: (value: number | string) => void;
//   className: string;
}

export default function CalcButton({children, onClick}: Props) {
  return (
    <div
      onClick={() => onClick(children)}
      className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
    >
      {children}
    </div>
  );
}
