import React from "react";
import Center from "../Components/Center";
import Sidebar from "../Components/Sidebar";
import { getSession, GetSessionParams } from "next-auth/react";
import Player from "../Components/Player";
import Background from "../Components/Background";

const ADDMYNFT = () => {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Background />
        </main>
        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default ADDMYNFT;
