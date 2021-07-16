import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./Container";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GrClose } from 'react-icons/gr'


export default function Header() {
  const router = useRouter();

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    if (window.onload) {
      menu(false)
    }
  };

  return (
    <header className="bg-white sticky top-0 left-0 w-full z-50">
      <nav className="shadow py-3 sm:py-5">
        <Container>
          <div className="relative lg:flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex">
                <a
                  href="https://lhotse.jobs.personio.de/"
                  target="_blank"
                  className="block"
                >
                  <img
                    src={`/assets/logo.svg`}
                    alt="logo"
                    className="h-8 sm:w-32 w-24 self-end"
                  />
                </a>
                <span
                  className="self-start sm:px-2 px-1 ml-2 sm:py-1 font-bold text-colorThree rounded-md rounded-bl-none -mt-2"
                  style={{
                    backgroundColor: "rgba(36, 13, 133, 0.15)",
                    fontSize: "10px",
                  }}
                >
                  We're hiring
                </span>
              </div>
              <div className="ml-auto flex items-center lg:hidden">
                <button
                  type="button"
                  className="focus:outline-none inline-flex items-center justify-center rounded-md text-colorTwo w-8 h-8"
                  onClick={handleMenu}
                >
                  {menu ? <span className="text-colorOne block"><GrClose className="w-5 h-5" /></span> : <span className="w-full h-full text-colorOne block"><HiOutlineMenuAlt3 className="w-full h-full" /></span>}



                </button>
              </div>
            </div>

            <div
              className={`${menu
                ? "left-0 opacity-100 translate-x-0"
                : "-left-full bg-opacity-100 -translate-x-4 lg:-translate-x-0"
                } ml-auto lg:static absolute top-12 z-50 lg:w-auto w-full bg-white lg:bg-transparent p-4 lg:p-0 opacity-0 lg:opacity-100 transform`}
            >
              <ul className="lg:flex items-center lg:text-left text-center lg:pt-0 pt-8">
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a
                      className={`
                        ${router.pathname == "/"
                          ? "font-bold text-colorSeven"
                          : "font-normal"
                        } px-2 xl:px-3 py-1 xl:py-2 md:ml-2 xl:ml-4 text-colorSeven transition-all block`}
                    >
                      Home
                    </a>
                  </Link>
                </li>

                <li className="lg:pb-0 pb-3">
                  <Link href="/product">
                    <a
                      className={`
                        ${router.pathname === "/product"
                          ? "font-bold text-colorSeven"
                          : "font-normal"
                        } px-2 xl:px-3 py-1 xl:py-2 md:ml-2 xl:ml-4 text-colorSix transition-all block`}
                    >
                      Product
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/diolouge">
                    <a
                      className={`
                        ${router.pathname == "/diolouge"
                          ? "font-bold text-colorSeven"
                          : "font-normal"
                        } px-2 xl:px-3 py-1 xl:py-2 md:ml-2 xl:ml-4 text-colorSix transition-all block`}
                    >
                      Diolouge
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/about">
                    <a
                      className={`
                        ${router.pathname == "/about"
                          ? "font-bold text-colorSeven"
                          : "font-normal"
                        } px-2 xl:px-3 py-1 xl:py-2 md:ml-2 xl:ml-4 text-colorSix transition-all block`}
                    >
                      About
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a className="px-2 xl:px-3 xl:rounded-md py-2 md:ml-2 xl:ml-4 font-normal transition-all inline-block md:block bg-colorFive">
                      <img src="./assets/us.png" alt="us" className="mx-auto" />
                    </a>
                  </Link>
                </li>
                <li className="lg:pb-0 pb-3">
                  <Link href="/">
                    <a
                      className="px-2 xl:px-3 py-1 xl:py-2 md:ml-4 font-bold text-colorThree transition-all rounded capitalize text-sm"
                      style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                    >
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
