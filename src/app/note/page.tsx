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
      <h3 className="text-center text-xl">This is the note section</h3>

      <NoteCanvas />
    </div>
  );
}
