import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Layout/Container";

export default function product() {
  let maturitySpectrum = [
    {
      id: 1,
      title: "No dedicated indirect procurement unit / systems in use",
      content:
        "Lhotse is the first and only Procurement solution you will need. We make sure your processes are at optimum end-to-end.",
    },
    {
      id: 2,
      title: "PaaS or Shared Services Centers used",
      content:
        "Lhotse enables your internal capabilities and makes sure you are in control of procurement processes all the way. We help you optimize your shared services centers and eliminate outsourcing.",
    },
    {
      id: 3,
      title: "eCatalogues in place",
      content:
        "Lhotse makes sure that your optimization doesn’t stop with catalogues. Run anything else through Lhotse and be sure that your catalogues are leveraged wherever possible.",
    },
    {
      id: 4,
      title: "eProcurement systems in place",
      content:
        "Lhotse complements any modern eProcurement system. Lhotse brings that extra mile of intelligence you’ve been missing in your eProcurement years. We connect all your data points.",
    },
  ];
  const benifits = [
    {
      id: 1,
      img: "enable-stakeholders.svg",
      head: "Use time more wisely",
      text: `Lhotse automates anything that doesn't require human judgment`,
    },
    {
      id: 2,
      img: "control-expenditures.svg",
      head: "Control expenditures",
      text: `Lhotse gets the right offers from the best suppliers for optimal conditions  `,
    },
    {
      id: 3,
      img: "optimal-supplier.svg",
      head: "Optimal supplier",
      text: `Lhotse considers the entire option spectrum from supplier base to frameworks   `,
    },
    {
      id: 4,
      img: "enable-stakeholders.svg",
      head: "Enable stakeholders",
      text: "Lhotse integrates in workflows and is proactive like James at the Ritz",
    },
  ];
  return (
    <>
      <Head>
        <title>Product | Lhots</title>
      </Head>
      <section className="pt-12 lg:pt-20 relative">
        <Container>
          <div className="grid lg:grid-cols-2">
            <div className="mt-16 lg:mt-24">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                Enable your organization to source anything in the best way
              </h1>
              <p className="lg:mb-12 leading-relaxed text-gray-500">
                Lhotse knows what and who is in your supplier base and makes
                sure you foster relationships with the right suppliers
              </p>
            </div>
            <div>
              <img
                src="/assets/height-adjustable.svg"
                alt="Enable your organization to source anything in the best way"
                className="lg:max-w-sm w-full lg:ml-auto block relative -bottom-24 z-10"
              />
            </div>
          </div>
        </Container>
        <img
          src="/assets/product-banner.png"
          className="w-full max-h-[30rem] z-[-1] absolute bottom-0 right-0"
          alt="Book Demo"
        />
      </section>

      <section
        className="pb-60 lg:pb-32 pt-52 lg:pt-80 relative bg-[#78DAB1] -mt-32"
        style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <Container>
          <div className="flex">
            <div className="lg:w-1/3">
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-white block mr-2"></span>
                <p className="text-white tracking-[5px] font-bold uppercase">
                  First
                </p>
              </div>
              <h3 className="text-3xl lg:text-4xl text-main font-bold mb-8">
                Specify your needs in a guided, intuitive way
              </h3>
              <p className="text-gra">
                AI-enabled request definition and assessment at your fingertips,
                from free text to tender
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="-mb-60 pt-52 sm:pt-60 lg:pt-40 relative bg-white">
        <img
          src="./assets/specify-needs.svg"
          alt="  Specify your needs in a guided, intuitive way"
          className="absolute right-0 -top-44 lg:-top-72 z-10 max-w-[100%] sm:max-w-[70%] lg:max-w-[600px] xl:max-w-[700px]"
        />
        <Container>
          <div className="flex items-center flex-wrap md:mt-20">
            <div className="lg:w-1/2 xl:w-2/3 lg:order-1 order-2">
              <img
                src="./assets/second.png"
                alt="Get instant supplier recommendations"
                className="w-full max-w-[600px] lg:mt-0 mt-12"
              />
            </div>
            <div className="lg:w-1/2 xl:w-1/3 lg:order-2 mb-10 md:mb-0 order-1">
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
                <p className="text-[#78DAB1] tracking-[5px] font-bold uppercase">
                  second
                </p>
              </div>
              <h3 className="text-3xl lg:text-4xl text-main font-bold mb-8">
                Get instant supplier recommendations
              </h3>
              <p className="text-gra">
                Data-driven supplier recommendations without manual effort for
                your teams
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap my-8 lg:my-20">
            <div className="lg:w-1/2 xl:w-1/3 mb-10 lg:mb-0">
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
                <p className="text-[#78DAB1] tracking-[5px] font-bold uppercase">
                  thired
                </p>
              </div>
              <h3 className="text-3xl lg:text-4xl text-main font-bold mb-8">
                Interact with suppliers
              </h3>
              <p className="text-gra">
                Central communication hub for your supplier engagement - no
                matter who’s on holiday
              </p>
            </div>
            <div className="lg:w-1/2 xl:w-2/3">
              <img
                src="./assets/interect.svg"
                alt="Get instant supplier recommendations"
                className="w-full xl:w-2/3 ml-auto lg:mt-0 mt-12"
              />
            </div>
          </div>
          <div className="flex items-center flex-wrap">
            <div className="lg:w-1/2 xl:w-2/3 lg:order-1 order-2">
              <img
                src="./assets/receive.svg"
                alt="Receive and evaluate your options"
                className="w-full xl:w-1/2 relative z-10 lg:mt-0 mt-12"
              />
            </div>
            <div className="lg:w-1/2 xl:w-1/3 lg:order-2 mb-10 lg:mb-0 order-1">
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
                <p className="text-[#78DAB1] tracking-[5px] font-bold uppercase">
                  fourth
                </p>
              </div>
              <h3 className="text-3xl lg:text-4xl text-main font-bold mb-8">
                Receive and evaluate your options
              </h3>
              <p className="text-gra">
                Powerful offer assessment and scenario analyses allow you to
                make the decisions in a company-context
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="bg-[#240D85] pt-[18rem] lg:pt-[25rem] xl:pt-[32rem] pb-[45rem] xl:pb-[50rem] text-white relative"
        style={{ clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0% 100%)" }}
      >
        <Container>
          <div className="flex">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
                <p className="text-[#78DAB1] tracking-[5px] font-bold uppercase">
                  LHOTSE KNOWS
                </p>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 ">
                No one knows better what’s in your supplier base than Lhotse
              </h3>
              <p className="font-normal">
                Lhotse brings actionable analytics to make sure that you foster
                relationships with the right suppliers - building preferred
                supplier relationships and reducing the number of dormant
                one-off suppliers
              </p>
            </div>
            <img
              src="./assets/no-one.svg"
              alt="No one knows better what’s in your supplier base than Lhotse"
              className="absolute right-0 top-1/2 sm:top-1/3 lg:top-1/4 z-10 w-full max-w-[100%] sm:max-w-[70%] md:max-w-[50%] max-h-[40rem]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4ff] relative pb-6">
        <Container>
          <div className="-top-80 relative text-center">
            <div className="inline-flex items-center mb-4">
              <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
              <p className="text-[#78DAB1] tracking-[5px] font-bold uppercase">
                SEAMLESS
              </p>
              <span className="w-10 h-0.5 bg-[#78DAB1] block mr-2"></span>
            </div>
            <h2 className="text-3xl lg:text-4xl text-white font-bold mb-12">
              Lhotse integrates into your systems and meets your workflow
              requirements
            </h2>
            <div className="bg-white shadow-2xl rounded-2xl px-8">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/3 my-12 sm:border-r border-gray-100">
                  <div
                    className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-xl"
                    style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                  >
                    <img
                      src="/assets/systems-integration.svg"
                      className="block h-20 w-20 transform scale-150"
                      alt="Systems integration"
                    />
                  </div>
                  <h6 className="font-bold my-8 md:my-12 text-black">
                    Systems integration
                  </h6>
                  <img
                    src="/assets/systems-integrations.svg"
                    className="block w-36 mx-auto"
                    alt="Systems integration"
                  />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 my-12 lg:border-r border-gray-100">
                  <div
                    className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-xl"
                    style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                  >
                    <img
                      src="/assets/single-sign.svg"
                      className="block h-20 w-20 transform scale-150"
                      alt="Single sign on"
                    />
                  </div>
                  <h6 className="font-bold my-8 md:my-12 text-black">
                    Single sign on
                  </h6>
                  <img
                    src="/assets/single-sign-on.svg"
                    className="block w-36 mx-auto"
                    alt="Single sign on"
                  />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 my-12 mx-auto">
                  <div
                    className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-xl"
                    style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                  >
                    <img
                      src="/assets/workflow-integration.svg"
                      className="block h-20 w-20 transform scale-150"
                      alt="Workflow integration"
                    />
                  </div>
                  <h6 className="font-bold my-8 md:my-12 text-black">
                    Workflow integration
                  </h6>
                  <img
                    src="/assets/workflow-integrations.svg"
                    className="block w-36 mx-auto"
                    alt="Workflow integration"
                  />
                </div>
              </div>
            </div>
            <div className="mt-40">
              <h2 className="font-bold text-3xl lg:text-4xl text-main mb-16 text-center">
                Lhotse works across the procurement maturity spectrum
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {maturitySpectrum &&
                  maturitySpectrum.map((data) => (
                    <div
                      className="bg-white rounded-2xl shadow-lg p-6"
                      key={data.id}
                    >
                      <span className="w-36 h-0.5 bg-[#78DAB1] block mb-3"></span>
                      <h5 className="font-bold text-main text-2xl mb-6">
                        {data.title}
                      </h5>
                      <p className="text-gra">{data.content}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white text-center relative pt-20 pb-8">
        <Container>
          <div className=" relative -mt-72">
            <h2 className="text-main text-3xl lg:text-4xl font-bold mb-20">
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
              {benifits &&
                benifits.map((item, i) => (
                  <div className="text-center" key={i}>
                    <div
                      className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-xl"
                      style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                    >
                      <img
                        src={`/assets/${item.img}`}
                        className="w-20 h-20 scale-150"
                        alt={item.head}
                      />
                    </div>
                    <div className="p-6">
                      <h6 className="text-2xl font-bold black-color mb-2 mt-4">
                        {" "}
                        {item.head}{" "}
                      </h6>
                      <p className="text-gray-400"> {item.text} </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
