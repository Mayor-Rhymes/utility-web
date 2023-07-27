"use client";

import { useState } from "react";
import Editor from "./mce-editor";
import Sidebar from "./sidebar";

interface INote {
  _id: string;
  title: string;
  content: string;
  // authorId: string;
}

export default function NoteCanvas() {
  const [notes, setNotes] = useState<INote[]>([
    { _id: "200", title: "Hello There", content: "This is the content" },
    {
      _id: "201",
      title: "Things are good",
      content: "Things shall be well ijn",
    },
    {
      _id: "202",
      title: "Things are cool",
      content: "Things shall be well ijn",
    },
  ]);

  const handleClick = (note: INote) => {
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(false);
  };

  const [currentId, setCurrentId] = useState(notes[0]._id);
  const [title, setTitle] = useState(notes[0].title);
  const [content, setContent] = useState(notes[0].content);
  const [isEditing, setIsEditing] = useState(false);

  const handleContentChange = (id: string, title: string, content: string) => {
    const note = notes.find((note) => note._id === id);
    const remainingNotes = notes.filter((note) => note._id !== id);

    const modifiedNote = { ...note, title: title, content: content };

    const newNotes = [...remainingNotes, modifiedNote];

    setNotes(newNotes as INote[]);
  };

  const handleDelete = (id: string) => {
    const remainingNotes = notes.filter((note) => note._id !== id);

    setNotes(remainingNotes);
  };

  const handleCreate = () => {
    const newNote = { _id: "90", title: "", content: "" };

    const filledNotes = [...notes, newNote];

    setNotes(filledNotes);

    setCurrentId(newNote._id);
    setTitle(newNote.title);
    setContent(newNote.content);
    setIsEditing(true);
  };

  return (
    <div className="flex px-4 space-x-4">
      <Sidebar
        notes={notes}
        handleClick={handleClick}
        currentId={currentId}
        setCurrentId={setCurrentId}
        handleDelete={handleDelete}
        handleCreate={handleCreate}
      />

      <Editor
        currentId={currentId}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        handleContentChange={handleContentChange}
      />
    </div>
  );
}
