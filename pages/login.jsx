import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... min-h-screen w-full justify-center">
      {/* <img
        className="w-52 mb-5 opacity-70"
        src="https://links.papareact.com/9xl"
        alt=""
      /> */}
      <header className="mb-16 group text-center">
        <h1 className="mb-1 font-mono text-4xl text-gray-800 md:text-6xl">
          Welcome to <br className="block md:hidden" />
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            Songs 👋
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-gray-800 opacity-90 text-white p-5 rounded-full"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
