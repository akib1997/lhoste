import Link from "next/link";

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
        className="py-60 relative z-10"
        style={{ backgroundColor: "#F4F4FF" }}
      >
        <div className="w-11/12 mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-900 mb-8">
            Value Proposition
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
            {items &&
              items.map((item) => (
                <div className="text-center" key={item.id}>
                  <div className="inline-flex items-center justify-center bg-purple-400 bg-opacity-50 rounded-full">
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
                    <p className="text-purple-400"> {item.text} </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="text-center">
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block px-12 py-2 rounded mt-12">
                Learn more about the product
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 relative">
        <div className="w-11/12 mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-3/5">
              <h2 className="text-3xl text-blue-900 font-bold">
                Manage & automate purchase requisitions
              </h2>
              <p>
                Define requirements jointly and in a guided way in one central
                place
              </p>
              <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                Learn more
              </a>
            </div>
            <div className="lg:w-2/5 ml-auto">
              <div className="flex relative">
                <div className="bg-green-300 bg-opacity-60 w-80 h-80 left-0 top-12 rounded-full absolute z-20"></div>
                <img
                  src="/assets/form.svg"
                  className="block ml-auto pl-12 relative z-30 mt-32"
                  alt="Form"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/fill.svg"
          className="absolute right-0 -top-52 z-10"
          alt="Shape"
        />
        <div className="py-20 relative">
          <img
            src="/assets/fill2.svg"
            className="absolute left-0 top-0 z-10"
            alt="Shape"
          />
          <div className="w-11/12 mx-auto relative">
            <div className="lg:flex items-center">
              <div className="relative lg:w-1/2">
                <img
                  src="/assets/identify.svg"
                  className="w-3/4 mr-auto relative z-20"
                  alt="Shape"
                />
                <img
                  src="/assets/ellipse.svg"
                  className="absolute top-0 right-0 z-10"
                  alt="Shape"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl text-blue-900 font-bold mb-4">
                  Identify and assess all relevant suppliers
                </h2>
                <ul>
                  <li className="flex mb-2">
                    <img
                      src="assets/triengle.svg"
                      className="mr-2"
                      alt="triengle"
                    />
                    <span>Identify the right existing and new suppliers</span>
                  </li>
                  <li className="flex mb-2">
                    <img
                      src="assets/triengle.svg"
                      className="mr-2"
                      alt="triengle"
                    />
                    <span>
                      Analyze supplier capability, performance, and compliance
                      to drive partnerships
                    </span>
                  </li>
                </ul>
                <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className="lg:flex items-center">
            <div className="lg:w-3/5">
              <h2 className="text-3xl text-blue-900 font-bold mb-4">
                Bring all available data into your processes
              </h2>
              <ul>
                <li className="flex mb-2">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2"
                    alt="triengle"
                  />
                  <span>
                    Integrate existing information from your ERP & eProcurement
                    systems
                  </span>
                </li>
                <li className="flex mb-2">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2"
                    alt="triengle"
                  />
                  <span>
                    Insights and recommendations are implemented into processes
                  </span>
                </li>
              </ul>
              <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                Learn more
              </a>
            </div>
            <div className="lg:w-2/5 ml-auto">
              <div className="flex relative">
                <img
                  src="/assets/bring-all.svg"
                  className="block relative z-30"
                  alt="Form"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/fill.svg"
          className="absolute right-0 -bottom-40 z-10"
          alt="Shape"
        />
      </div>
    </>
  );
}
