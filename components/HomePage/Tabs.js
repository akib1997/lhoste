import Image from "next/image";
import Container from "./Container";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
); // disable ssr
import { Tab, TabList, TabPanel } from "react-tabs";

export default function AllTab() {
  const buttons = [
    { id: 1, text: "Autometed Rfx", active: true },
    { id: 2, text: "Zero Maverick Spend", active: false },
    { id: 3, text: "Supplier Base Consolidation", active: false },
    { id: 4, text: "Seamless System Integration", active: false },
  ];

  const tabData = [
    {
      id: 1,
      img: "tab1.svg",
      title: "Requests are handled front-to- end without manual steps",
      text: "Execute purchasing requests front-to-end, based on the proprietary Lhotse multi-algorithm request assessment and automation engine. You are getting the best available sourcing options.",
    },
    {
      id: 2,
      img: "tab2.svg",
      title: "Loved by users in procurement and throughout your organization",
      text: "EGive your business units and requestors the most intuitive experience at hand - Lhotse is the first procurement solution that is loved by its users. No wonder, it is built with them in mind",
    },
    {
      id: 3,
      img: "tab3.svg",
      title:
        "Eliminate fragmentation and unnecessary redundancies in your supplier base",
      text: "Lhotse identifies and reduces redundancies in your B- and C-parts supplier base - for you to build preferred supplier panels and drive standardization",
    },
    {
      id: 4,
      img: "tab4.svg",
      title: "Interacts with your existing ERP & eProcurement infrastructure",
      text: "Lhotse acts as a layer of intelligence that sits on your ERP, SRM and e Procurement infrastructure - making sure that all data stays in sync at all times",
    },
  ];
  return (
    <div className="py-20" style={{ backgroundColor: "#F4F4FF" }}>
      <Container>
        <div className="shadow-xl rounded-2xl py-20 bg-white  relative z- -top-52 md:-top-80 lg:-top-96">
          <Tabs>
            {tabData.map((data) => (
              <TabPanel key={data.id}>
                <div className="lg:flex text-center lg:text-left lg:p-0 p-4">
                  <div className="lg:w-1/2">
                    <img
                      src={`/assets/${data.img}`}
                      className="h-64 mx-auto"
                      alt="Requests are handled front-to- end without manual steps"
                    />
                  </div>
                  <div className="lg:w-1/2 lg:pr-12">
                    <h3 className="text-3xl font-semibold mb-4">
                      {data.title}
                    </h3>
                    <p>{data.text}</p>
                  </div>
                </div>
              </TabPanel>
            ))}
            <TabList>
              <div className="text-center p-4">
                <div className="inline-flex flex-wrap p-2 mt-5 lg:rounded-full shadow-md justify-center bg-gray-50">
                  {buttons &&
                    buttons.map((item) => (
                      <Tab key={item.id}>
                        <button className="focus:outline-none rounded-full px-4 py-1 ml-4 mb-3 bg-opacity-50 font-semibold">
                          {item.text}
                        </button>
                      </Tab>
                    ))}
                </div>
              </div>
            </TabList>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}
