import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Endpoints } from "../../app/page";

const RootHeader = () => {
  return (
    <Popover
      as="header"
      className="container mx-auto flex sm:h-24 items-center border-b-2  px-6 py-2"
    >
      {({ open }) => (
        <>
          <h1 className="font-bold">Pocketsub</h1>
          <div className="hidden grow sm:block">
            <div className="flex items-center justify-center gap-8">
              <Link href={Endpoints.HOME}>Home</Link>
              <Link href={Endpoints.BLOG}>Blog</Link>
              <Link href={Endpoints.SHOP}>Shop</Link>
              <Link href={Endpoints.ABOUT}>About</Link>
              <Link href={Endpoints.CONTACT}>Contact</Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <Link href={Endpoints.REGISTER} className="mr-2 font-bold">
              Sign up
            </Link>
            <Link href={Endpoints.LOGIN} className="font-bold">
              Login
            </Link>
          </div>
          {/*  MOBILE NAVIGATION */}
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold">Pocketsub</h1>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        href={Endpoints.HOME}
                      >
                        Home
                      </Link>
                      <Link
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        href={Endpoints.BLOG}
                      >
                        Blog
                      </Link>
                      <Link
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        href={Endpoints.SHOP}
                      >
                        Shop
                      </Link>
                      <Link
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        href={Endpoints.ABOUT}
                      >
                        About
                      </Link>
                      <Link
                        className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2"
                        href={Endpoints.CONTACT}
                      >
                        Contact
                      </Link>
                    </nav>
                  </div>
                  <div className="mt-6 flex flex-col items-center gap-2">
                    <Link
                      href={Endpoints.REGISTER}
                      className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    >
                      Sign up
                    </Link>
                    <Link
                      href={Endpoints.LOGIN}
                      className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium md:text-xl w-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default RootHeader;
