import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";

export default function Header() {
  const router = useRouter();

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="bg-white">
      <nav className="shadow py-3 sm:py-6">
        <Container>
          <div className="relative lg:flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={`/assets/logo.svg`}
                  alt="logo"
                  className="h-12 sm:w-32 w-24"
                />
                <div
                  className="sm:px-2 px-1 sm:py-1 font-bold text-indigo-800 bg-opacity-40 rounded-md rounded-bl-none absolute top-0 left-24 sm:-top-3 sm:left-32 ml-2"
                  style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                >
                  <span className="whitespace-nowrap text-xs sm:text-sm">
                    We're hiring
                  </span>
                </div>
              </div>
              <div className="ml-auto flex items-center lg:hidden">
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
                  : "-left-full bg-opacity-100 -translate-x-4 lg:-translate-x-0"
              } ml-auto lg:static absolute top-20 z-50 lg:w-auto w-full bg-gray-300 lg:bg-transparent p-4 lg:p-0 opacity-0 lg:opacity-100 transform`}
            >
              <ul className="lg:flex items-center">
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a
                      className={`
                        ${
                          router.pathname == "/"
                            ? "font-bold text-gray-700"
                            : ""
                        } px-3 py-2 md:ml-2 xl:ml-4 font-normal hover:text-gray-700 transition-all block`}
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-2 xl:ml-4 font-normal hover:text-gray-700 transition-all block">
                      Product
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/diolouge">
                    <a
                      className={`
                        ${
                          router.pathname == "/diolouge"
                            ? "font-bold text-gray-700"
                            : ""
                        } px-3 py-2 md:ml-2 xl:ml-4 font-normal hover:text-gray-700 transition-all block`}
                    >
                      Diolouge
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/about">
                    <a
                      className={`
                        ${
                          router.pathname == "/about"
                            ? "font-bold text-gray-700"
                            : ""
                        } px-3 py-2 md:ml-2 xl:ml-4 font-normal hover:text-gray-700 transition-all block`}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a
                      className="px-3 rounded py-2 md:ml-2 xl:ml-4 font-normal transition-all inline-block md:block"
                      style={{ backgroundColor: "#F4F4FF" }}
                    >
                      <img src="./assets/us.png" alt="us" />
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-3 py-2 md:ml-4 font-bold text-indigo-800 bg-gray-500 bg-opacity-40 transition-all rounded capitalize">
                      Book demo
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
