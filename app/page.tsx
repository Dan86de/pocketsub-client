"use client";

import Link from "next/link";

enum Endpoints {
  HOME = "/",
  BLOG = "/blog",
  SHOP = "/shop",
  ABOUT = "/about",
  CONTACT = "/contact",
  REGISTER = "/register",
  LOGIN = "/login",
  DEMO = "/demo",
}

const IndexPage = () => {
  return (
    <div
      className="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
      aria-hidden="true"
    >
      <header className="mx-auto h-28 container border-b-2 border-gray-100 flex items-center px-6">
        <h1 className="font-bold">Pocketsub</h1>
        <div className="grow">
          <div className="flex items-center justify-center gap-8">
            <Link href={Endpoints.HOME}>Home</Link>
            <Link href={Endpoints.BLOG}>Blog</Link>
            <Link href={Endpoints.SHOP}>Shop</Link>
            <Link href={Endpoints.ABOUT}>About</Link>
            <Link href={Endpoints.CONTACT}>Contact</Link>
          </div>
        </div>
        <Link href={Endpoints.REGISTER} className="mr-2 font-bold">
          Sign up
        </Link>
        <Link href={Endpoints.LOGIN} className="font-bold">
          Login
        </Link>
      </header>
      <main className="mx-auto mt-16 max-w-5xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              A better way to manage your subscriptions
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            See how pocketsub can help you manage your recurring payments. Have
            all of them in one place and keep more money in your pocket.
          </p>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <Link href={Endpoints.REGISTER} className="mr-2 font-bold">
              Get started
            </Link>
            <Link href={Endpoints.DEMO} className="mr-2 font-bold">
              Live demo
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
