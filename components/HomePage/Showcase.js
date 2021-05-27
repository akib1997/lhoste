import Link from "next/link";
import Container from "./Container";

export default function Showcase() {
  return (
    <div className="bg-white py-20 relative">
      <img
        src="/assets/fill.svg"
        className="absolute right-0 top-0 md:-top-32 z-10 w-1/2"
        alt="Shape"
      />
      <img
        src="/assets/fill2.svg"
        className="absolute left-0 top-1/2 md:top-1/4 z-10 w-1/2"
        alt="Shape"
      />

      <img
        src="/assets/fill.svg"
        className="absolute right-0 bottom-0 md:-bottom-24 z-10 w-1/2"
        alt="Shape"
      />
      <Container>
        <div className="lg:flex items-center">
          <div className="lg:w-3/5">
            <h2 className="text-3xl text-blue-900 font-bold mb-4">
              Manage & automate purchase requisitions
            </h2>
            <p>
              Define requirements jointly and in a guided way in one central
              place
            </p>
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                Learn more
              </a>
            </Link>
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
      </Container>

      <Container>
        <div className="flex flex-wrap items-center lg:py-48 z-20 relative">
          <div className="relative lg:w-1/2 lg:order-1 order-2">
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
          <div className="lg:w-1/2 lg:order-2 order-1">
            <h2 className="text-3xl text-blue-900 font-bold mb-6">
              Identify and assess all relevant suppliers
            </h2>
            <ul>
              <li className="flex mb-4">
                <img
                  src="assets/triengle.svg"
                  className="mr-2"
                  alt="triengle"
                />
                <span>Identify the right existing and new suppliers</span>
              </li>
              <li className="flex mb-4">
                <img
                  src="assets/triengle.svg"
                  className="mr-2"
                  alt="triengle"
                />
                <span>
                  Analyze supplier capability, performance, and compliance to
                  drive partnerships
                </span>
              </li>
            </ul>
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </Container>
      <Container>
        <div className="lg:flex items-center relative z-20">
          <div className="lg:w-3/5">
            <h2 className="text-3xl text-blue-900 font-bold mb-6 lg:mt-0 mt-8">
              Bring all available data into your processes
            </h2>
            <ul>
              <li className="flex mb-4">
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
              <li className="flex mb-4">
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
            <Link href="/">
              <a className="bg-blue-900 text-white inline-block px-10 py-2 rounded mt-12">
                Learn more
              </a>
            </Link>
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
      </Container>
    </div>
  );
}
