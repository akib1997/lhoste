import Head from "next/head";
import Link from "next/link";
import Container from "../components/Layout/Container";
import OpenPositions from "../components/OpenPositions";
import TeamMember from "../components/TeamMember";
import Showcase from "../components/HomePage/Showcase";
import SectionArrow from "../components/SectionArrow";

export default function about() {
  const teamData = [
    {
      id: 1,
      img: "https://avatars.githubusercontent.com/u/7131243?v=4",
      title: "Henning Hatje",
      position: "Co-Founder | Clients & Partnerships",
      text: "some facts from CV (e.g. BCG) and experience, e.g. 4+ years procurement, cost-cutting, compliance and large scale re-org experience",
    },
    {
      id: 2,
      img: "https://avatars.githubusercontent.com/u/7131243?v=4",
      title: "Jan Berssenbrügge",
      position: "Co-Founder | Supplier & Operations",
      text: "some facts from CV (e.g. Clark) and experience, e.g. High-paced business development and partner integration know-how",
    },
    {
      id: 3,
      img: "https://avatars.githubusercontent.com/u/7131243?v=4",
      title: "JCan Akin",
      position: "Co-Founder | Product & Tech",
      text: "some facts from CV (e.g. Cargonexx) and experience, e.g. Product and tech expert with know-how in scaling teams and architectures",
    },
  ];

  const positions = [
    {
      id: 1,
      title: "Business Development Intern (f/m/d)",
      location: "Praktikum / Studentenjob / Vollzeit / Berlin",
    },
    {
      id: 2,
      title: "Operations Intern (f/m/d)",
      location: "Praktikum / Studentenjob / Vollzeit / Berlin",
    },
    {
      id: 3,
      title: "Founders’ Associate Intern (f/m/d)",
      location: "Praktikum / Studentenjob / Vollzeit / Berlin",
    },
    {
      id: 4,
      title: "Product Designer (f/m/d)",
      location: "Praktikum / Studentenjob / Vollzeit / Berlin",
    },
  ];

  return (
    <>
      <Head>
        <title>About | Lhots</title>
      </Head>

      <section className="pt-32 relative bg-white">
        <Container>
          <div className="z-20 relative lg:w-2/3">
            <h1 className="text-4xl font-bold mb-6">
              With 8,516 meters, Lhotse is one of the highest mountains on
              earth.{" "}
            </h1>
            <p className="mb-12 leading-relaxed text-gray-500">
              The reason why you probably do not know it: It stands right next
              to Mount Everest. Attention is focused on the highest mountain on
              earth - only its smaller neighbor Lhotse remains unnoticed. It's a
              similar story with Tactical Spend. In companies across all sizes,
              the optimization focus is on the strategic 80% of costs. The
              remaining 20% 'Tactical Spend' remains invisible - and accordingly
              not optimized.{" "}
            </p>
            <span className="font-bold text-green-400">
              We are changing that.
            </span>
          </div>
        </Container>
        <img
          src="/assets/mountain-background.svg"
          className="w-full -mt-32 z-10"
          alt="Book Demo"
        />
      </section>
      <section
        className="py-20 md:py-52"
        style={{ backgroundColor: "#f4f4ff" }}
      >
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="ht">
              <img src="/assets/mission.svg" className="w-40" alt="Mission" />
              <div className="flex items-center my-6">
                <div className="w-12 h-0.5 mr-2 bg-green-400"></div>
                <p className="text-green-400 uppercase font-bold tracking-widest">
                  Mission
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 leading-10">
                Our mission is is to optimize the tactical spend in companies.
              </h2>
            </div>

            <div className="ht">
              <img src="/assets/vision.svg" className="w-40" alt="Vision" />
              <div className="flex items-center my-6">
                <div className="w-12 h-0.5 mr-2 bg-green-400"></div>
                <p className="text-green-400 uppercase font-bold tracking-widest">
                  Vision
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 leading-10">
                Our vision is is to optimize the tactical spend in companies.
              </h2>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white pb-52">
        {/* <SectionArrow /> */}

        <div className="relative py-20">
          <img
            src="/assets/fill.svg"
            className="absolute right-0 top-0 z-10 transform -translate-y-20 lg:-translate-y-44 traingle-height"
            alt="Shape"
          />

          <Container>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/5">
                <h2 className="text-3xl text-blue-900 font-bold mb-4">
                  We believe in empowering teams to bring the best of themselves
                  to the table.
                </h2>
                <p>
                  This guides our behavior and all our efforts - both in the way
                  our software is developed: to empower organizations and
                  procurement teams. As well as in how our organization operates
                  internally.
                </p>
                <Link href="/">
                  <a className="bg-blue-900 text-white inline-block font-bold px-10 py-2 rounded mt-12">
                    Check open positions
                  </a>
                </Link>
              </div>
              <div className="lg:w-2/5 ml-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl mt-16">
                  <img
                    src="https://images.unsplash.com/photo-1622778857530-bf970941351f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="block w-full relative z-20 object-cover"
                    style={{ maxHeight: "35rem" }}
                    alt="Form"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="relative py-20">
          <img
            src="/assets/fill2.svg"
            className="absolute left-0 lg:-top-44 z-10 traingle-height"
            alt="Shape"
          />
          <Container>
            <div className="flex flex-wrap justify-between items-center z-20 relative">
              <div className="lg:w-2/5 lg:order-1 order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1622781639147-220614aa147f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                    className="block w-full relative z-20 object-cover"
                    style={{ maxHeight: "35rem" }}
                    alt="Shape"
                  />
                </div>
              </div>
              <div className="lg:w-2/5 lg:order-2 order-1">
                <h2 className="text-3xl text-blue-900 font-bold mb-6">
                  At Lhotse, 1+1 is much larger than 2
                </h2>
                <p>
                  Successes and achievements are celebrated as team efforts,
                  recognizing every individual contribution.{" "}
                </p>
                <Link href="/">
                  <a className="bg-blue-900 text-white inline-block font-bold px-10 py-2 rounded mt-12 lg:mb-0 mb-12">
                    Check open positions
                  </a>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <div className="relative py-20">
          <img
            src="/assets/fill.svg"
            className="absolute right-0 top-0 z-10 transform -translate-y-20 lg:-translate-y-44 traingle-height"
            alt="Shape"
          />

          <Container>
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-2/5">
                <h2 className="text-3xl text-blue-900 font-bold mb-4">
                  We believe in setting the bar high for ourselves
                </h2>
                <p>
                  To trust in our teams and treat each other with honesty and
                  generosity - because we only have one asset - Our team. and
                  what brings us together.
                </p>
                <Link href="/">
                  <a className="bg-blue-900 text-white inline-block font-bold px-10 py-2 rounded mt-12">
                    Check open positions
                  </a>
                </Link>
              </div>
              <div className="lg:w-2/5 ml-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl mt-16">
                  <img
                    src="https://images.unsplash.com/photo-1622822380298-817c4b4dd936?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    className="block w-full relative z-20 object-cover"
                    style={{ maxHeight: "35rem" }}
                    alt="Form"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div
            style={{
              // backgroundImage: "url(/assets/multiple-arrows.svg)",
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
              backgroundColor: "#F4F4FF",
              minHeight: "500px",
            }}
            className="relative y-20 shadow-2xl rounded-3xl flex justify-center items-center mt-20"
          >
            <img
              src="assets/multiple-arrows.svg"
              alt="bgh"
              className="absolute w-full h-full left-0 top-0 z-10 right-0 bottom-0"
            />
            <div className="md:w-2/3 mx-auto relative z-20">
              <h4 className="font-bold text-black text-2xl text-center leading-normal py-20">
                At Lhotse, we are disrupting a previously dormant software
                segment - we are challengers, we won’t accept the status quo,
                and we believe that any change always needs to starts with what
                we can influence.{" "}
              </h4>
            </div>
          </div>
        </Container>
      </section>
      <section
        className="text-center pb-52"
        style={{ backgroundColor: "#f4f4ff" }}
      >
        <Container>
          <h3 className="text-3xl text-indigo-900 font-bold mb-16 relative -top-32">
            Meet the Team
          </h3>
          <div className="text-center flex items-center justify-center">
            <span className="w-12 h-0.5 bg-blue-900 inline-block"></span>
            <p className="uppercase tracking-widest font-bold text-blue-900 mx-4">
              leadership
            </p>
            <span className="w-12 h-0.5 bg-blue-900 inline-block"></span>
          </div>

          <TeamMember teamData={teamData} />
        </Container>
      </section>
      <section className="pb-20 -mt-40">
        <Container>
          <div className="text-center flex items-center justify-center mb-12">
            <span className="w-12 h-0.5 bg-blue-900 inline-block"></span>
            <p className="uppercase tracking-widest font-bold text-blue-900 mx-4">
              OPEN Positions
            </p>
            <span className="w-12 h-0.5 bg-blue-900 inline-block"></span>
          </div>
          <OpenPositions positions={positions} />
          <div className="text-center ">
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block font-bold px-10 py-2 rounded">
                Show all positions
              </a>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
