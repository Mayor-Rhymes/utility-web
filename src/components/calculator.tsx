"use client";

import { BsFillBackspaceFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { TbSquareRoot2 } from "react-icons/tb";
import { useState } from "react";
import {
  evaluate,
  pi,
  isPositive,
  abs,
  log,
  factorial,
  e,
  sqrt,
  sin,
  cos,
  tan,
  unit,
  ceil,
  round,
  asin,
} from "mathjs";
import CalcButton from "./calculatorbutton";

const CalculatorMode = {
  Standard: "Standard",
  Scientific: "Scientific",
};

const MAX_SCREEN_WIDTH = 28;

export default function Calculator() {
  const buttons = [7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "/"];
  const trigFunctions = ["sin", "cos", "tan", "asin"];
  const [screenValue, setScreenValue] = useState("0");
  const [calculatorMode, setCalculatorMode] = useState(CalculatorMode.Standard);
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

  const handleButtons = (value: number | string) => {
    if (screenValue.length !== MAX_SCREEN_WIDTH) {
      if (typeof value === "number") {
        const numberToString = value.toString();

        setScreenValue((prevState) =>
          Number(prevState) === 0 && prevState !== "0."
            ? numberToString
            : prevState + numberToString
        );
      } else if (typeof value === "string" || value === ".") {
        setScreenValue(screenValue + value);
      }
    }
  };

  const handlePi = () => {
    if (screenValue.length !== MAX_SCREEN_WIDTH) {
      setScreenValue(pi.toString());
    }
  };

  const handleSignInversion = () => {
    if (screenValue.length !== MAX_SCREEN_WIDTH) {
      const valueToNumber = Number(screenValue);
      if (isPositive(valueToNumber)) {
        setScreenValue("-" + screenValue);
      } else {
        setScreenValue(abs(valueToNumber).toString());
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

  const calculateTrigValue = (value: string) => {
    switch (value) {
      case "sin":
        setScreenValue(sin(unit(Number(screenValue), "deg")).toString());
        break;

      case "cos":
        setScreenValue(cos(unit(Number(screenValue), "deg")).toString());
        break;

      case "tan":
        setScreenValue(tan(unit(Number(screenValue), "deg")).toString());
        break;

      case "asin":
        setScreenValue(asin(unit(Number(screenValue), "deg")).toString());
        break;
    }
  };

  const handleSqrt = () => {
    setScreenValue(sqrt(screenValue));
  };

  const handleEquals = () => {
    if (
      screenValue.includes("*") ||
      screenValue.includes("+") ||
      screenValue.includes("-") ||
      screenValue.includes("/") ||
      screenValue.includes("^")
    ) {
      const result = evaluate(screenValue);
      setScreenValue(result);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-4">
        <button
          onClick={() => setCalculatorMode(CalculatorMode.Standard)}
          className={`active:bg-blue-200 p-3 transition-all ${
            calculatorMode === CalculatorMode.Standard
              ? "bg-blue-200"
              : "bg-white"
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setCalculatorMode(CalculatorMode.Scientific)}
          className={`active:bg-blue-200 p-3 transition-all ${
            calculatorMode === CalculatorMode.Scientific
              ? "bg-blue-200"
              : "bg-white"
          }`}
        >
          Scientific
        </button>
      </div>
      <div
        className={
          screenValue.length >= 22
            ? screenClassnameNumIncrease
            : screenClassname
        }
      >
        {screenValue}
      </div>

      <div className="grid grid-cols-4 gap-2 transition-all">
        <button
          onClick={clearScreen}
          className="text-center bg-red-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center col-span-2 shadow-md"
        >
          <MdClear />
        </button>
        <button
          onClick={handlePi}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          Pi
        </button>
        <button
          onClick={handleBackspace}
          className="text-center flex items-center active:shadow-sm active:text-sm px-3 py-3 justify-center bg-slate-100 rounded-md shadow-md"
        >
          <BsFillBackspaceFill />
        </button>
        {buttons.map((button) => (
          <CalcButton key={button} onClick={handleButtons} label={button}>
            {button}
          </CalcButton>
        ))}
        <button
          onClick={handleSignInversion}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          +/-
        </button>
        <button
          onClick={() => handleButtons(0)}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          0
        </button>
        <button
          onClick={() => handleButtons(".")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          .
        </button>
        <button
          onClick={() => handleButtons("+")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          +
        </button>
        <button
          onClick={handlePercent}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          %
        </button>
        <button
          onClick={() => handleButtons("^")}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          ^
        </button>

        <button
          onClick={handleFactorial}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          !
        </button>
        <button
          onClick={handleLog}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          log
        </button>
        <button
          onClick={handleLogToE}
          className="text-center bg-slate-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          ln
        </button>
        {calculatorMode === CalculatorMode.Scientific && (
          <>
            {trigFunctions.map((trig) => (
              <CalcButton key={trig} onClick={calculateTrigValue} label={trig}>
                {trig}
              </CalcButton>
            ))}
          </>
        )}

        <button
          onClick={handleSqrt}
          className="text-center bg-blue-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md"
        >
          <TbSquareRoot2 />
        </button>
        <button
          onClick={handleEquals}
          className="text-center bg-green-100 active:shadow-sm active:text-sm px-3 py-3 rounded-md flex items-center justify-center shadow-md col-span-2"
        >
          =
        </button>
      </div>
    </div>
  );
}
