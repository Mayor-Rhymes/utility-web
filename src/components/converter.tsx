"use client";

import { useState } from "react";
import useSWR from "swr";

const URL = process.env.NEXT_PUBLIC_URL;

const encodedCredentials = btoa(
  `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
);

export default function Converter() {
  const fetcher = async (url) => {
    const request = await fetch(`${url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    const data = await request.json();
    return data;
  };

  const handleConversion = async () => {
    if (amount && from && to) {
      try {
        const result = await fetcher(
          `https://xecdapi.xe.com/v1/convert_from/?from=${from}&to=${to}&amount=${amount}`
        );

        if (result) {
          setResult(result.to[0].mid);
        } else {
          console.log("Error");
        }
      } catch (err) {
        console.log("Error");
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

  return (
    <div className="max-w-[70%] py-5 lg:h-[400px] px-5 rounded-xl flex flex-col mt-4 space-y-4 justify-center shadow-2xl mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 place-content-center">
        <div className="flex flex-col space-y-3">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            type="text"
            name="amount"
            className="h-[50px] outline-none border-slate-300 rounded-md border-2 p-3"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="from">From</label>
          <select
            name="from"
            className="p-3 h-[50px] outline-none border-slate-300 rounded-md border-2"
            onChange={(event) => setFrom(event.target.value)}
            value={from}
          >
            {data?.currencies.map((datum) => (
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
            className="p-3 h-[50px] outline-none border-slate-300 rounded-md border-2"
            onChange={(event) => setTo(event.target.value)}
            value={to}
          >
            {data?.currencies.map((datum) => (
              <option key={datum.iso} value={datum.iso}>
                {datum.iso}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleConversion}
        className="bg-blue-700 text-white self-end px-3 py-3 rounded-lg active:shadow-md"
      >
        Convert
      </button>

      {result > 0 && (
        <h3>
          {from} <span className="text-2xl font-semibold">{amount}</span> is
          equal to {to}{" "}
          <span className="text-2xl font-semibold">
            {result.toFixed(3).toLocaleString()}
          </span>
        </h3>
      )}
    </div>
  );
}
