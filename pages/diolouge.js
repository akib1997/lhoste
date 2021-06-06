import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/Layout/Container";

import { FiSearch } from "react-icons/fi";
import PostBox from "../components/PostBox";

export default function diolouge() {
  const tags = [
    "Best Practises",
    "success stories",
    "automation",
    "technology",
  ];

  const posts = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1622568203869-13bc7486becc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: `https://images.unsplash.com/photo-1622570230313-3332b620271c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Jan Berssenbrügge",
      authorImage:
        "https://images.unsplash.com/photo-1622559924472-2c2f69abb854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];

  const allPosts = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1622570230313-3332b620271c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      img: ``,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Jan Berssenbrügge",
      authorImage:
        "https://images.unsplash.com/photo-1622559924472-2c2f69abb854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 3,
      img: ``,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      img: `https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      img: `https://images.unsplash.com/photo-1622570230313-3332b620271c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Jan Berssenbrügge",
      authorImage:
        "https://images.unsplash.com/photo-1622559924472-2c2f69abb854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 6,
      img: `https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: 7,
      img: ``,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1622559924472-2c2f69abb854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      id: 8,
      img: `https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
      title: "No dedicated indirect procurement unit / systems in use.",
      text: "Lhotse is the first and only Procurement solution you will need. We make sure your Loremipsum dolor sit amet...",
      tags: ["Best Practises", "automation", "technology"],
      author: "Henning Hatje",
      authorImage:
        "https://images.unsplash.com/photo-1600188769099-d25b4ec79659?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0aG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <Head>
        <title>Dillouge | Lhots</title>
      </Head>
      <section className="pt-12 lg:pt-32 relative">
        <Container>
          <div className="text-center relative z-20">
            <h1 className="font-bold text-3xl md:text-4xl lg:w-2/3 mx-auto black-color">
              Our source for topics relating to procurement, tactical spend and
              our view on the modern business world
            </h1>
          </div>
        </Container>
        <img
          src="/assets/frame-168.png"
          className="w-full z-10 lg:-mt-32"
          alt="Book Demo"
        />
      </section>
      <section className="pb-12 main-bg">
        <div className="bg-white py-3">
          <Container>
            <div className="lg:flex items-center justify-between">
              <ul className="flex flex-wrap justify-center">
                {tags.map((tag, i) => (
                  <li key={i}>
                    <Link href="#">
                      <a className="inline-block lg:px-5 px-3 lg:py-2 py-1 rounded-full tag-bg capitalize lg:mr-4 mr-2 font-bold text-indigo-900 text-sm lg:mb-0 mb-3">
                        {tag}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="w-full sm:w-60 flex bg-gray-200 rounded-lg mx-auto lg:mx-0">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full bg-transparent focus:outline-none p-3 placeholder-indigo-900"
                  placeholder="Search..."
                />
                <button className="focus:outline-none">
                  <FiSearch className="text-2xl text-indigo-900 mr-4"></FiSearch>
                </button>
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div className="py-20">
            <h2 className="text-4xl font-bold black-color mb-12">
              Latest posts
            </h2>
            <PostBox posts={posts} />
          </div>
        </Container>
      </section>
      <section className="py-20" style={{ backgroundColor: "#78DAB1" }}>
        <Container>
          <div className="flex md:flex-nowrap flex-wrap items-center">
            <h2 className="font-bold text-3xl lg:text-5xl leading-normal md:mb-0 mb-8 color-blue">
              You want all the insights and expertise directly to your inbox?
              Sign up here for our newsletter
            </h2>
            <form className="md:max-w-md w-full md:ml-12">
              <input
                type="email1"
                name="email1"
                id="email1"
                placeholder="Add your Mail here..."
                className="w-full p-4 bg-white focus:outline-none rounded block mb-4"
              />
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="A3-yes"
                    name="A3-confirmation"
                    value="yes"
                    className="opacity-0 absolute h-8 w-8 cursor-pointer"
                  />
                  <div className="bg-transparent border-2 rounded-md border-white w-8 h-8 flex flex-shrink-0 justify-center items-center mr-3 focus-within:border-white">
                    <svg
                      className="fill-current hidden w-3 h-3 text-green-400 pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#fff"
                          fillRule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label htmlFor="A3-yes" className="select-none">
                    <span className="text-xs text-indigo-900">
                      Legal Text You want all the insights and expertise
                      directly to your inbox? Sign up here for our newsletter
                    </span>
                  </label>
                </div>
              </div>
              <button
                className="bg-blue-900 text-white font-bold px-10 py-2 rounded mt-4 block w-full focus:outline-none"
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>

      <section className="py-20 main-bg">
        <Container>
          <h2 className="text-4xl font-bold mb-12 black-color">All posts</h2>
          <PostBox posts={allPosts} />
        </Container>
      </section>
    </>
  );
}
