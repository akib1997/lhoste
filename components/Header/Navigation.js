import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <nav className="bg-white shadow-sm py-3 sm:py-6">
        <div className="w-11/12 mx-auto px-2 md:0">
          <div className="relative md:flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={`/assets/logo.svg`}
                  alt="logo"
                  className="h-12 w-32"
                />
                <div className="px-2 py-1 font-bold text-indigo-800 bg-gray-500 bg-opacity-40 transition-all rounded rounded-bl-none absolute -top-2 left-36">
                  <span className="whitespace-nowrap text-sm">
                    We're hiring
                  </span>
                </div>
              </div>
              <div className="ml-auto flex items-center md:hidden">
                <button
                  type="button"
                  className="focus:outline-none inline-flex items-center justify-center rounded-md text-gray-400"
                  onClick={handleMenu}
                >
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              className={`${
                menu
                  ? "left-0 opacity-100 translate-x-0"
                  : "-left-full bg-opacity-100 -translate-x-4 md:-translate-x-0"
              } ml-auto md:static absolute top-20 z-20 md:w-auto w-full bg-gray-300 md:bg-transparent p-4 md:p-0 opacity-0 md:opacity-100 transform`}
            >
              <ul className="md:flex">
                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a
                      className={`
                        ${
                          router.pathname == "/"
                            ? "font-bold text-gray-700"
                            : "text-gray-300"
                        } px-3 py-2 md:ml-4 xl:ml-8 font-normal hover:font-bold hover:text-gray-700 transition-all`}
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 xl:ml-8 font-normal hover:font-bold hover:text-gray-700 transition-all">
                      Product
                    </a>
                  </Link>
                </li>
                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 xl:ml-8 font-normal hover:font-bold hover:text-gray-700 transition-all">
                      Diolouge
                    </a>
                  </Link>
                </li>
                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 xl:ml-8 font-normal hover:font-bold hover:text-gray-700 transition-all">
                      About
                    </a>
                  </Link>
                </li>
                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 xl:ml-8 font-normal hover:font-bold hover:text-gray-700 transition-all">
                      US
                    </a>
                  </Link>
                </li>
                <li className="md:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 xl:ml-8 font-bold text-indigo-800 bg-gray-500 bg-opacity-40 transition-all rounded capitalize">
                      Book demo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
    </header>
  );
}
