import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Footer() {
  const links1 = ["Home", "Product", "Diolouge", "About"];
  const links2 = ["Carrer", "Data Privacy", "terms of Use", "Imprint"];

  return (
    <footer className="text-white mt-72" style={{ backgroundColor: "#00064A" }}>
      <Container>
        <div className="text-center relative -top-52">
          <h2 className="text-4xl font-bold text-black mb-12">
            You’re in good company
          </h2>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl overflow-hidden sm:flex shadow-md items-center text-indigo-900">
              <img
                src="/assets/oster.svg"
                alt="oster"
                className="w-full sm:w-1/3"
              />
              <div className="p-3 text-left">
                <p>
                  This is a great Customer Quote. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod.Lorem
                  ipsum dolor sit amet, consetetur.
                </p>
                <h6 className="text-xl font-bold text-indigo-900 mt-6">
                  Christopher Oster
                </h6>
                <span className="text-sm">CEO of a great Company</span>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden sm:flex shadow-md items-center text-indigo-900">
              <img
                src="/assets/image-7.svg"
                alt="oster"
                className="w-full sm:w-1/3"
              />
              <div className="p-3 text-left">
                <p>
                  This is a great Customer Quote. Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam nonumy eirmod.Lorem
                  ipsum dolor sit amet, consetetur.
                </p>
                <h6 className="text-xl font-bold text-indigo-900 mt-6">
                  Philip Liebenow
                </h6>
                <span className="text-sm">CEO of a great Company</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 border-b border-gray-400 border-opacity-50">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">Experience Lhotse. </span>
            <span className="text-gray-400">Book a demo.</span>
          </h2>
          <p className="text-xl lg:w-2/3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.Lorem ipsum dolor sit amet, consetetur.
          </p>
          <div className="flex my-6">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Add your mail here..."
              className="focus:outline-none bg-white rounded-sm px-3 py-1 mr-8 max-w-xs w-full text-gray-700"
            />
            <button
              type="submit"
              className="bg-green-400 text-white  focus:outline-none rounded-sm px-3 py-1 font-semibold"
            >
              Book Demo
            </button>
          </div>
        </div>
        <div className="py-12">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4">
            <div className="logo">
              <img
                src={`/assets/logo-white.svg`}
                alt="logo"
                className="h-12 w-32"
              />
            </div>
            <div className="col-span-2 my-6 sm:my-0">
              <div className="flex">
                <ul className="lg:mr-20 md:mr-12 mr-8">
                  {links1 &&
                    links1.map((link, i) => (
                      <li key={i}>
                        <Link href="/">
                          <a className="uppercase inline-block font-normal text-gray-400 text-base mb-3 hover:font-bold hover:text-white">
                            {" "}
                            {link}{" "}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
                <ul>
                  {links2 &&
                    links2.map((link, i) => (
                      <li key={i}>
                        <Link href="/">
                          <a className="uppercase inline-block font-normal text-gray-400 text-base mb-3 hover:font-bold hover:text-white">
                            {" "}
                            {link}{" "}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="sm:text-right">
              <ul>
                <li>
                  <Link href="#">
                    <a
                      target="_blank"
                      className="font-bold inline-block text-2xl"
                    >
                      in
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
