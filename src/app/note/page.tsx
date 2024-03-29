

import NoteCanvas from "@/components/notecanvas";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/libs/auth/authOptions";

interface INote {
  _id: string;
  title: string;
  content: string;
  // authorId: string;
}

export default async function Note() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <div className="grid gap-5 place-content-center place-items-center">
        <h3 className="text-center text-2xl">
          You have to be signed in to use notes
        </h3>
        
        <a className="bg-black dark:bg-white dark:text-black p-3 cursor-pointer rounded-sm text-white" href="/api/auth/signin">Please Signup or Signin</a>

      </div>
    );
  }
  return (
    <div className="flex flex-col space-y-6">
      <h3 className="text-center text-xl">This is the note section</h3>

      <NoteCanvas />
    </div>
  );
}
