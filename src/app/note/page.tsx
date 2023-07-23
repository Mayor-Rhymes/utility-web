import NoteCanvas from "@/components/notecanvas";
import useState from 'react';

interface INote {
  _id: string;
  title: string;
  content: string;
  // authorId: string;
}

export default async function Note() {

    
  



  return (
    <div className="flex flex-col space-y-6">
      <p className="text-center text-2xl">This is the note section</p>

      <NoteCanvas />
    </div>
  );
}
