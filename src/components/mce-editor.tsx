// "use client";

import * as tinymceReact from "@tinymce/tinymce-react";
import { Dispatch, SetStateAction, useState } from "react";
import parse from "html-react-parser";

interface INote {
  _id: string;
  title: string;
  content: string;
}

interface Props {
  currentId: string;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  isEditing: boolean;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  handleContentChange: (id: string, title: string, content: string) => void;
}

export default function Editor({
  currentId,
  title,
  setTitle,
  content,
  setContent,
  isEditing,
  setIsEditing,
  handleContentChange,
}: Props) {
  return (
    <div className="grow-[7] flex flex-col space-y-4 px-4">
      <input
        type="text"
        placeholder="Untitled"
        disabled={!isEditing}
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);

          handleContentChange(currentId, event.target.value, content);
        }}
        className="text-3xl font-bold placeholder:text-gray-200 placeholder:font-extrabold placeholder:text-3xl pb-4 bg-transparent outline-none border-b-2 border-b-black "
      />
      {isEditing ? (
        <tinymceReact.Editor
          init={{
            menubar: "edit insert view format table tools help",
            plugins:
              "lists codesample spellchecker emoticons image anchor inserttable advlist code media wordcount format",
          }}
          apiKey="8ywv91dv9pg1dxbfhnepnil67wo2yqyy7vxfjuzvcqivii0w"
          value={content}
          onEditorChange={(newValue, editor) => {
            setContent(newValue);
            handleContentChange(currentId, title, newValue);
          }}
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>
          {parse(content)}
        </div>
      )}

      {isEditing && (
        <button
          className="bg-black text-white text-lg py-3 rounded-md"
          onClick={() => setIsEditing(false)}
        >
          Switch To Reading Mode
        </button>
      )}
    </div>
  );
}
