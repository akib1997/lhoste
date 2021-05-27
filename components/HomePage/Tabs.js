import Image from "next/image";
import Container from "./Container";

export default function Tabs() {
  const buttons = [
    { id: 1, text: "Autometed Rfx", active: true },
    { id: 2, text: "Zero Maverick Spend", active: false },
    { id: 3, text: "Supplier Base Consolidation", active: false },
    { id: 4, text: "Seamless System Integration", active: false },
  ];
  return (
    <div className="py-20" style={{ backgroundColor: "#F4F4FF" }}>
      <Container>
        <div className="shadow-xl rounded-2xl py-20 bg-white  relative z- -top-52 md:-top-80 lg:-top-96">
          <div className="lg:flex text-center lg:text-left lg:p-0 p-4">
            <img
              src="/assets/request.svg"
              className="lg:w-2/5 lg:mr-12"
              alt="Requests are handled front-to- end without manual steps"
            />
            <div className="lg:w-2/5 ">
              <h3 className="text-3xl font-semibold mb-4">
                Requests are handled front-to- end without manual steps
              </h3>
              <p>
                Execute purchasing requests front-to-end, based on the
                proprietary Lhotse multi-algorithm request assessment and
                automation engine. You are getting the best available sourcing
                options.
              </p>
            </div>
          </div>
          <div className="text-center p-4">
            <div className="inline-flex flex-wrap p-2 mt-5 lg:rounded-full shadow-md justify-center bg-gray-50">
              {buttons &&
                buttons.map((item) => (
                  <button
                    className={`${
                      item.active ? "text-indigo-800 bg-gray-500" : ""
                    } focus:outline-none rounded-full px-4 py-1 ml-4 mb- bg-opacity-50 font-semibold`}
                    key={item.id}
                  >
                    {item.text}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
