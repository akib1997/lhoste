import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container from "../components/Layout/Container";
import Footer from "../components/Layout/Footer";

import { FiSearch } from "react-icons/fi";

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
      img: ``,
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
      img: ``,
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
      <section className="pt-12 relative">
        <Container>
          <div className="text-center relative z-20">
            <h1 className="font-bold text-4xl lg:w-2/3 mx-auto text-color">
              Our source for topics relating to procurement, tactical spend and
              our view on the modern business world
            </h1>
          </div>
        </Container>
        <img
          src="/assets/mountain-background.svg"
          className="w-full -mt-32 z-10"
          alt="Book Demo"
        />
      </section>
      <section className="pb-12" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="bg-white py-3">
          <Container>
            <div className="lg:flex items-center">
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
              <div className="w-full sm:w-60 flex bg-gray-200 rounded-lg lg:mr-auto mx-auto">
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
            <h2 className="text-4xl font-bold text-indigo-900 mb-12">
              Latest posts
            </h2>
            <div className="md:grid-cols-2 grid gap-3 grid-cols-1">
              {posts &&
                posts.map((post) => (
                  <div className="w-full" key={post.id}>
                    <div className="post-box shadow-xl overflow-hidden rounded-2xl bg-white">
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="p-4 md:p-6 relative">
                        <div className="absolute w-1/3 h-1 bg-green-400 top-4 md:top-6 left-4 md:left-6"></div>
                        <h3 className="text-2xl font-bold py-2">
                          {post.title}
                        </h3>
                        <p className="pb-6">{post.text}</p>
                        <ul className="flex pb-6 flex-wrap">
                          {post.tags &&
                            post.tags.map((tag, i) => (
                              <li key={i}>
                                <Link href="#">
                                  <a className="inline-block px-5 py-2 rounded-full tag-bg capitalize mr-4 font-bold text-indigo-900 text-sm mb-3">
                                    {tag}
                                  </a>
                                </Link>
                              </li>
                            ))}
                        </ul>
                        <div className="flex items-center">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-12 h-12 object-cover mr-5 rounded-full"
                          />
                          <h6 className="font-normal">{post.author}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
        <div className="py-20" style={{ backgroundColor: "#78DAB1" }}>
          <Container>
            <div className="flex md:flex-nowrap flex-wrap items-center">
              <h2 className="font-bold text-3xl lg:text-5xl leading-normal md:mb-0 mb-8">
                You want all the insights and expertise directly to your inbox?
                Sign up here for our newsletter
              </h2>
              <form className="md:max-w-md w-full md:ml-12">
                <input
                  type="email"
                  name="email"
                  id="email"
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
        </div>
        <div className="py-20">
          <Container>
            <h2 className="text-4xl font-bold mb-12 text-indigo-900">
              All posts
            </h2>
            <div className="hello">
              {allPosts &&
                allPosts.map((post) => (
                  <div className="box" key={post.id}>
                    <div className="post-box shadow-xl overflow-hidden rounded-2xl bg-white">
                      {post.img === "" ? null : (
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-72 object-cover"
                        />
                      )}

                      <div className="p-4 md:p-6 relative">
                        <div className="absolute w-1/3 h-1 bg-green-400 top-4 md:top-6 left-4 md:left-6"></div>
                        <h3 className="text-2xl font-bold py-2">
                          {post.title}
                        </h3>
                        <p className="pb-6">{post.text}</p>
                        <ul className="flex pb-6 flex-wrap">
                          {post.tags &&
                            post.tags.map((tag, i) => (
                              <li key={i}>
                                <Link href="#">
                                  <a className="inline-block px-5 py-2 rounded-full tag-bg capitalize mr-4 font-bold text-indigo-900 text-sm mb-3">
                                    {tag}
                                  </a>
                                </Link>
                              </li>
                            ))}
                        </ul>
                        <div className="flex items-center">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-12 h-12 object-cover mr-5 rounded-full"
                          />
                          <h6 className="font-normal">{post.author}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
