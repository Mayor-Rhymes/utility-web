"use client";

import { BsFillBackspaceFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import {TbSquareRoot2} from 'react-icons/tb'
import { useState } from "react";
import { evaluate, pi, isPositive, abs, log, factorial, e, sqrt } from "mathjs";

export default function Calculator() {
  const [screenValue, setScreenValue] = useState("0");
  // const [operationValue, setOperationValue] = useState('');
  const screenClassname =
    "h-[100px] mt-5 max-w-[300px] flex justify-end items-center pr-2 font-bold text-lg bg-white shadow-md rounded-md";
  const screenClassnameNumIncrease =
    "h-[100px] mt-5 max-w-[300px] flex justify-end items-center pr-2 font-bold text-sm bg-white shadow-md rounded-md";

  const clearScreen = () => {
    setScreenValue("0");
  };

  const handleBackspace = () => {
    if (screenValue.length === 1 && screenValue !== "0") {
      setScreenValue("0");
    } else if (screenValue !== "0") {
      setScreenValue((prevState) => prevState.slice(0, prevState.length - 1));
    }
  };

  const handleNumber = (value: number | string) => {
    if (screenValue.length !== 28) {
      if (typeof value === "number") {
        const numberToString = value.toString();
        setScreenValue((prevState) =>
          Number(prevState) === 0 ? numberToString : prevState + numberToString
        );
      } else {
        setScreenValue((prevState) =>
          Number(prevState) === 0 ? value : prevState + value
        );
      }
    }
  };

  const handleSign = (value: string) => {
    if (screenValue.length !== 28) {
      setScreenValue(screenValue + value);
    }
  };

  const handlePi = () => {
    if (screenValue.length !== 28) {
      setScreenValue(pi.toString());
    }
  };

  const handleSignInversion = () => {
    if (screenValue.length !== 28) {
      const valueToNumber = Number(screenValue);
      if (isPositive(valueToNumber)) {
        setScreenValue("-" + screenValue);
      } else {
        setScreenValue(abs(valueToNumber));
      }
    }
  };

  const handleLog = () => {
    setScreenValue(log(screenValue, 10));
  };

  const handleLogToE = () => {
    setScreenValue(log(screenValue, e));
  };

  const handlePercent = () => {
    const valueToNumber = Number(screenValue);
    setScreenValue((valueToNumber / 100).toString());
  };

  const handleFactorial = () => {
    setScreenValue(factorial(screenValue));
  };

  const handleSqrt = () => {
      
    setScreenValue(sqrt(screenValue));
    
  }

  const handleEquals = () => {
    const result = evaluate(screenValue);
    setScreenValue(result);
  };


  return (
    <div className="flex flex-col space-y-2">
      <div
        className={
          screenValue.length >= 22
            ? screenClassnameNumIncrease
            : screenClassname
        }
      >
        {screenValue}
      </div>

      <div className="grid grid-cols-4 gap-3">
        <div
          onClick={clearScreen}
          className="text-center bg-red-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center col-span-2 shadow-md"
        >
          <MdClear />
        </div>
        <div
          onClick={handlePi}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          Pi
        </div>
        <div
          onClick={handleBackspace}
          className="text-center flex items-center active:shadow-sm active:text-sm px-3 py-3 justify-center bg-slate-100 rounded-md shadow-md"
        >
          <BsFillBackspaceFill />
        </div>
        <div
          onClick={() => handleNumber(7)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          7
        </div>
        <div
          onClick={() => handleNumber(8)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          8
        </div>
        <div
          onClick={() => handleNumber(9)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          9
        </div>
        <div
          onClick={() => handleSign("*")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          x
        </div>
        <div
          onClick={() => handleNumber(4)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          4
        </div>
        <div
          onClick={() => handleNumber(5)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          5
        </div>
        <div
          onClick={() => handleNumber(6)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          6
        </div>
        <div
          onClick={() => handleSign("-")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          -
        </div>
        <div
          onClick={() => handleNumber(1)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          1
        </div>
        <div
          onClick={() => handleNumber(2)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          2
        </div>
        <div
          onClick={() => handleNumber(3)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          3
        </div>
        <div
          onClick={() => handleSign("/")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          /
        </div>
        <div
          onClick={handleSignInversion}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          +/-
        </div>
        <div
          onClick={() => handleNumber(0)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          0
        </div>
        <div
          onClick={() => handleNumber(".")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          .
        </div>
        <div
          onClick={() => handleSign("+")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          +
        </div>
        <div onClick={handlePercent} className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md">
          %
        </div>
        <div
          onClick={() => handleSign("^")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          ^
        </div>

        <div
          onClick={handleFactorial}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          !
        </div>
        <div
          onClick={handleLog}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          log
        </div>
        <div
          onClick={handleLogToE}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          ln
        </div>
        <div
          onClick={handleSqrt}
          className="text-center bg-blue-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          <TbSquareRoot2 />
        </div>
        <div
          onClick={handleEquals}
          className="text-center bg-green-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md col-span-2"
        >
          =
        </div>
      </div>
    </div>
  );
}
