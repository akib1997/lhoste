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
      img: "expenditures.svg",
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
      text:
        "Lhotse integrates in workflows and is proactive like James at the Ritz",
    },
  ];
  return (
    <>
      <div className="lg:pb-32 pb-16 relative bg-colorFive z-10 pt-80 xl:pt-96 -mt-32">
        <Container>
          <h2 className="text-2xl lg:text-4xl font-bold text-center black-color mb-8">
            Value Proposition
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 my-8 lg:my-20">
            {items &&
              items.map((item) => (
                <div className="text-center" key={item.id}>
                  <div
                    className="w-40 h-40 mx-auto flex items-center justify-center rounded-full extra-shadow"
                    style={{ backgroundColor: "rgba(36, 13, 133, 0.15)" }}
                  >
                    <img
                      src={`/assets/${item.img}`}
                      className="w-20 h-20"
                      alt={item.head}
                    />
                  </div>
                  <div className="p-6">
                    <h6 className="text-2xl font-bold black-color mb-2 mt-4">
                      {item.head}{" "}
                    </h6>
                    <p className="text-colorTwoy-400"> {item.text} </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center">
            <Link href="/">
              <a className="btn-bg text-white inline-block px-8 md:px-16 py-2 md:py-4 rounded-md mt-6 font-bold">
                Learn more about the product
              </a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
