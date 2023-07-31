"use client";

import { useState } from "react";
import useSWR from "swr";
import { ToastContainer, toast } from "react-toastify";

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
          `${URL}/v1/convert_from/?from=${from}&to=${to}&amount=${amount}`
        );

        if (result) {
          setResult(result.to[0].mid);
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
    }
  };

  const { data, isLoading, error } = useSWR(
    `${URL}/v1/currencies?obsolete=false`,
    fetcher
  );

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("NGN");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="max-w-[70%] py-5 lg:h-[400px] px-5 rounded-xl flex flex-col mt-4 space-y-4 justify-center shadow-2xl mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 place-content-center">
        <div className="flex flex-col space-y-3">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={async (event) => {
              if (isClicked) {
                if (amount <= 0) {
                  setAmount(1);
                  await handleConversion();
                } else {
                  setAmount(Number(event.target.value));
                  await handleConversion();
                }
              }

              setAmount(Number(event.target.value));
            }}
            type="number"
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
            {data?.currencies.map((datum: any) => (
              <option key={datum.iso} value={datum.iso}>
                {datum.iso}
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
            {data?.currencies.map((datum: any) => (
              <option key={datum.iso} value={datum.iso}>
                {datum.iso}
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
          <span className="text-2xl font-semibold">{result.toFixed(3)}</span>
        </h3>
      )}
    </div>
  );
}
