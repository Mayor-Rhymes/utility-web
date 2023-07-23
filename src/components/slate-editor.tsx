"use client";

import {useState} from 'react';

export default function Editor() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  
  return (
    <div className="grow-[7] flex flex-col space-y-4 px-4">
      <input
        type="text"
        placeholder="Untitled"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="text-3xl font-bold placeholder:text-gray-200 placeholder:font-extrabold placeholder:text-3xl pb-4 bg-transparent outline-none border-b-2 border-b-black "
      />
      

      
    </div>
  );
}
