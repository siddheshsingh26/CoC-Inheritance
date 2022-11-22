import Center from "../Components/Center";
import Sidebar from "../Components/Sidebar";
import { getSession, GetSessionParams } from 'next-auth/react';
import Player from "../Components/Player";


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar/>
        <Center/>
      </main>
      <div  className="sticky bottom-0">
        <Player/>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
