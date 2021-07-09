import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Footer() {
  const links1 = ["Home", "Product", "Diolouge", "About"];
  const links2 = ["Carrer", "Data Privacy", "terms of Use", "Imprint"];

  const profileData = [
    {
      id: 1,
      title: "Christopher Oster",
      text: "This is a great Customer Quote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.Lorem ipsum dolor sit amet, consetetur.",
      img: `https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      position: "CEO of a great Company",
      icon: "homotogo.svg",
    },
    {
      id: 2,
      title: "Philip Liebenow",
      text: "This is a great Customer Quote. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.Lorem ipsum dolor sit amet, consetetur.",
      img: `https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      position: "CEO of a great Company",
      icon: "clark.svg",
    },
  ];

  return (
    <footer className="text-white mt-72" style={{ backgroundColor: "#00064A" }}>
      <Container>
        <div className="text-center relative -top-40 lg:-top-52">
          <h2 className="text-4xl font-bold text-black mb-12">
            You’re in good company
          </h2>
          <div className="grid lg:grid-cols-2 gap-4">
            {profileData &&
              profileData.map((data) => (
                <div
                  className="bg-white rounded-2xl overflow-hidden sm:flex shadow-md items-center text-indigo-900"
                  key={data.id}
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-full sm:w-48 sm:h-64 object-cover"
                  />
                  <div className="py-3 md:px-6 px-3 text-left">
                    <p>{data.text}</p>
                    <div className="flex justify-between items-center mt-6">
                      <div>
                        <h6 className="text-xl font-bold black-color">
                          {data.title}
                        </h6>
                        <span className="text-sm"> {data.position} </span>
                      </div>
                      <img
                        src={`./assets/${data.icon}`}
                        alt={data.title}
                        className="block max-w-[8rem]"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="pb-20 pt-8 border-b border-gray-400 border-opacity-50">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Experience Lhotse. </span>
            <span className="text-colorTwoy-400">Book a demo.</span>
          </h2>
          <p className="text-xl lg:w-2/3 text-colorTwoy-400">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.Lorem ipsum dolor sit amet, consetetur.
          </p>
          <form className="flex my-6">
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Add your mail here..."
              className="focus:outline-none bg-white rounded px-4 py-3 mr-8 max-w-xs w-full text-colorTwoy-700"
            />
            <button
              type="submit"
              className="bg-green-300 text-white  focus:outline-none rounded px-6 py-1 font-semibold"
              onClick={(e) => e.preventDefault()}
            >
              Book Demo
            </button>
          </form>
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
                          <a className="uppercase inline-block font-normal text-colorTwoy-400 text-base mb-3 hover:font-bold hover:text-white">
                            {link}
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
                          <a className="uppercase inline-block font-normal text-colorTwoy-400 text-base mb-3 hover:font-bold hover:text-white">
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
