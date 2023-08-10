"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";
import { handleMoneyPresentation } from "@/app/libs/stringManipulation/moneyManipulator";

const URL = process.env.NEXT_PUBLIC_URL;

const encodedCredentials = btoa(
  `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
);

const fetcher = async (url: string) => {
  const request = await fetch(`${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${encodedCredentials}`,
    },
  });

  const data = await request.json();
  return data;
};

export default function Converter() {
  const handleConversion = async () => {
    if (amount && from && to) {
      try {
        const result = await fetcher(
          `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY}&currencies=${to}&base_currency=${from}`
        );

        if (result) {
          
          const value = result.data[to];
          setResult(value * amount)
          
        } else {
          toast.error("The api is malfunctioning", {
            theme: "light",
            closeOnClick: true,
          });
        }
      } catch (err) {
        toast.error("The api is malfunctioning", {
          theme: "light",
          closeOnClick: true,
        });
      }
    } else {
      toast.error("Please add all credentials", {
        theme: "light",
        closeOnClick: true,
      });
    }
  };

  const {
    data: currencies,
    isLoading,
    error,
  } = useSWR(
    `https://api.freecurrencyapi.com/v1/currencies?apikey=${process.env.NEXT_PUBLIC_CURRENCY_CONVERTER_API_KEY}`,
    fetcher
  );

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState<any>("USD");
  const [to, setTo] = useState<any>("GBP");
  const [result, setResult] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [currencyList, setCurrencyList] = useState(
    currencies ? Object.keys(currencies?.data) : []
  );

  useEffect(() => {

      if(currencies){
         setCurrencyList(Object.keys(currencies?.data))
      }
  }, [currencies])

  

  if (!currencies) {
    return (
      <h3 className="text-center text-xl">
        The api is currently unavailable. The currency converter I used is not
        free and I have no money.{" "}
      </h3>
    );
  }

  return (
    <div className="max-w-[70%] py-5 lg:h-[400px] px-5 rounded-xl flex flex-col mt-4 space-y-4 justify-center shadow-2xl mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 place-content-center">
        <div className="flex flex-col space-y-3">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={async (event) => {
              if (isClicked) {
                if (isNaN(amount)) {
                  setAmount(1);
                  await handleConversion();
                } else {
                  setAmount(Number(event.target.value));
                  await handleConversion();
                }
              }

              if (isNaN(amount)) {
                setAmount(1);
              } else {
                setAmount(Number(event.target.value));
              }
            }}
            type="text"
            name="amount"
            min={1}
            className="h-[50px] outline-none border-slate-300 rounded-md border-2 p-3"
          />
          {amount < 1 && (
            <p className="text-sm text-red-500">
              Please enter a value greater than 0
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="from">From</label>
          <select
            name="from"
            value={from}
            className="p-3 h-[50px] outline-none border-slate-300 rounded-md border-2"
            onChange={async (event) => {
              if (isClicked) {
                setFrom(event.target.value);
                await handleConversion();
              }
              setFrom(event.target.value);
            }}
          >
            {currencyList.map((datum: any) => (
              <option key={datum} value={datum}>
                {datum}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="to">To</label>
          <select
            name="to"
            value={to}
            className="p-3 h-[50px] outline-none border-slate-300 rounded-md border-2"
            onChange={async (event) => {
              if (isClicked) {
                setTo(event.target.value);
                await handleConversion();
              }

              setTo(event.target.value);
            }}
          >
            {currencyList.map((datum: any) => (
              <option key={datum} value={datum}>
                {datum}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={async () => {
          if (!isClicked) {
            setIsClicked(true);
            await handleConversion();
          } else {
            await handleConversion();
          }
        }}
        className="bg-blue-700 text-white self-end px-3 py-3 rounded-lg active:shadow-md"
      >
        Convert
      </button>

      {result > 0 && (
        <h3>
          {from} <span className="text-2xl font-semibold">{amount}</span> is
          equal to {to}{" "}
          <span className="text-2xl font-semibold">
            {handleMoneyPresentation(result.toFixed(3))}
          </span>
        </h3>
      )}
    </div>
  );
}

