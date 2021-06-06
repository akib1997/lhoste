import Head from "next/head";
import Link from "next/link";
import React from "react";
import Container from "../../components/Layout/Container";

export default function Details() {
  const tags = [
    "Best Practises",
    "success stories",
    "automation",
    "technology",
  ];

  return (
    <div>
      <Head>
        <title>Details | Lhots</title>
      </Head>
      <section className="bg-white pb-20">
        <Container>
          <div className="flex flex-wrap my-20">
            <div className="lg:w-1/2 w-full flex-wrap flex">
              <ul className="flex flex-wrap ">
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
              <div className="mt-auto ">
                <div className="flex items-center mt-8">
                  <img
                    src={`https://images.unsplash.com/photo-1597524734346-1e97c3b946c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
                    alt={`Author`}
                    className="w-12 h-12 object-cover mr-5 rounded-full"
                  />
                  <h6 className="font-normal text-gray-500">{`Hello World`}</h6>
                </div>
                <div className="w-36 h-0.5 bg-green-400 my-8"></div>
                <h3 className="text-4xl font-bold py-2 text-indigo-900">
                  No dedicated indirect procurement unit / systems in use
                </h3>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <img
                src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="title"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            Lhotse is the first and only Procurement solution you will need. We
            make sure your Loremipsum dolor sit amet... Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate outsourcing.Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate outsourcing.Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate{" "}
          </p>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way.{" "}
          </p>
          <h4 className="font-bold text-3xl text-indigo-900 my-3">
            We help you optimize your shared services centers and eliminate{" "}
          </h4>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate outsourcing.
          </p>
          <div className="flex flex-wrap items-center mb-5 lg:mb-8">
            <div className="lg:w-1/2 w-full">
              <img
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                alt="title"
                className="w-full rounded-2xl object-cover my-4"
                style={{ maxHeight: "25rem" }}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-12">
              <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
                Lhotse is the first and only Procurement solution you will need.
                We make sure your Loremipsum dolor sit amet... Lhotse enables
                your internal capabilities and makes sure you are in control of
                procurement processes all the way. We help you optimize your
                shared services centers and eliminate outsourcing.Lhotse enables
                your internal capabilities and makes sure you are in control of
                procurement processes all the way. We help you optimize your
                shared services centers and eliminate outsourcing.Lhotse enables
                your internal capabilities and makes sure you are in control of
                procurement processes all the way. We help you optimize your
                shared services centers and eliminate
              </p>
            </div>
          </div>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            Lhotse is the first and only Procurement solution you will need. We
            make sure your Loremipsum dolor sit amet... Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate outsourcing.Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate outsourcing.Lhotse enables your
            internal capabilities and makes sure you are in control of
            procurement processes all the way. We help you optimize your shared
            services centers and eliminate
          </p>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way.
          </p>
          <h4 className="font-bold text-3xl text-indigo-900 my-3">
            We help you optimize your shared services centers and eliminate{" "}
          </h4>
          <p className="text-gray-500 mb-5 lg:mb-8 leading-relaxed text-base">
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate
            outsourcing.Lhotse enables your internal capabilities and makes sure
            you are in control of procurement processes all the way. We help you
            optimize your shared services centers and eliminate outsourcing.
          </p>
        </Container>
      </section>
    </div>
  );
}
