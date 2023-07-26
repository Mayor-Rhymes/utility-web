"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Converter from "../../components/converter";

export default function Home() {
  return (
    <div>
      <h3 className="text-center text-xl">
        This is the currency converter section
      </h3>

      <Converter />

      <ToastContainer />
    </div>
  );
}
