import Link from "next/link";
import Container from "../Layout/Container";

export default function ValuePropositions() {
  const items = [
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
      <div
        className="lg:pb-32 pb-16 relative z-10 -mt-52 lg:-mt-72"
        style={{ backgroundColor: "#F4F4FF" }}
      >
        <Container>
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
            Value Proposition
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 my-8 lg:my-20">
            {items &&
              items.map((item) => (
                <div className="text-center" key={item.id}>
                  <div className="inline-flex items-center justify-center bg-purple-400 bg-opacity-50 rounded-full shadow-xl">
                    <img
                      src={`/assets/${item.img}`}
                      className="w-20 h-20 block m-6 mb-4"
                      alt={item.head}
                    />
                  </div>
                  <div className="p-6">
                    <h6 className="text-lg font-bold text-indigo-900 mb-2">
                      {" "}
                      {item.head}{" "}
                    </h6>
                    <p className="text-gray-400"> {item.text} </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center">
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block px-12 py-2 rounded font-bold">
                Learn more about the product
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
