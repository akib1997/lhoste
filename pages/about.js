import Head from "next/head";
import Link from "next/link";
import Container from "../components/Layout/Container";
import OpenPositions from "../components/OpenPositions";
import TeamMember from "../components/TeamMember";

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
          <div className="z-20 relative">
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
      <section className="py-52">
        <Container>
          <div className="md:flex">
            <div className="w-full md:w-1/2">
              <div className="ht">
                <img src="/assets/mission.svg" className="w-40" alt="Mission" />
                <div className="flex items-center my-6">
                  <div className="w-12 h-0.5 mr-2 bg-green-400"></div>
                  <p className="text-green-400 uppercase font-bold tracking-widest">
                    Mission
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-indigo-900 leading-10">
                  Our mission is is to optimize the tactical spend in companies.
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="ht">
                <img src="/assets/vision.svg" className="w-40" alt="Vision" />
                <div className="flex items-center my-6">
                  <div className="w-12 h-0.5 mr-2 bg-green-400"></div>
                  <p className="text-green-400 uppercase font-bold tracking-widest">
                    Vision
                  </p>
                </div>
                <h2 className="text-4xl font-bold text-indigo-900 leading-10">
                  Our vision is is to optimize the tactical spend in companies.
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white pb-52">
        <Container>
          <div
            style={{
              backgroundImage: "url(/assets/multiple-frame.svg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="py-24 md:w-2/3 mx-auto">
              <h4 className="font-bold text-black text-3xl text-center leading-normal">
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
