import Link from "next/link";
import Container from "../Layout/Container";

export default function Showcase() {
  return (
    <div className="bg-white relative">
      <div className="relative py-20">
        <img
          src="/assets/fill.svg"
          className="absolute right-0 top-0 z-10 transform -translate-y-20 lg:-translate-y-44 traingle-height"
          alt="Shape"
        />

        <Container>
          <div className="lg:flex items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-2xl lg:text-4xl black-color font-bold leading-tight mb-8 2xl:w-2/3">
                Manage & automate purchase requisitions
              </h2>
              <div className="flex mb-4">
                <img
                  src="assets/triengle.svg"
                  className="mr-2 self-start mt-1"
                  alt="triengle"
                />
                <span className="text-colorTwo text-base md:text-xl">
                  Define requirements jointly and in a guided way in one central
                  place
                </span>
              </div>

              <Link href="/">
                <a className="btn-bg text-white inline-block px-8 md:px-16 py-2 lg:mb-0 mb-6 md:py-4 rounded-md mt-12 font-bold">
                  Learn more
                </a>
              </Link>
            </div>
            <div className="lg:w-1/2 ml-auto">
              <div className="flex relative">
                <div className="bg-green-300 bg-opacity-60 w-60 h-60 left-0 right-0 mx-auto top-6 rounded-full absolute z-20"></div>
                <img
                  src="/assets/form.svg"
                  className="block mx-auto lg:ml-auto relative z-30 mt-16 w-full max-w-md"
                  alt="Form"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative pb-20">
        <img
          src="/assets/fill2.svg"
          className="absolute left-0 lg:-top-44 z-10 traingle-height"
          alt="Shape"
        />
        <Container>
          <div className="flex flex-wrap items-center z-20 relative">
            <div className="relative lg:w-1/2 lg:order-1 order-2">
              <div>
                <img
                  src="/assets/identify.svg"
                  className="w-full"
                  alt="Shape"
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:order-2 order-1">
              <h2 className="text-2xl lg:text-2xl lg:text-4xl black-color leading-tight font-bold mb-8">
                Identify and assess all relevant suppliers
              </h2>
              <ul>
                <li className="flex mb-4">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2 self-start mt-1"
                    alt="triengle"
                  />
                  <span className="text-colorTwo text-base md:text-xl">
                    Identify the right existing and new suppliers
                  </span>
                </li>
                <li className="flex mb-4">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2 self-start mt-1"
                    alt="triengle"
                  />
                  <span className="text-colorTwo text-base md:text-xl">
                    Analyze supplier capability, performance, and compliance to
                    drive partnerships
                  </span>
                </li>
              </ul>
              <Link href="/">
                <a className="btn-bg text-white inline-block px-8 md:px-16 py-2 lg:mb-0 mb-6 md:py-4 rounded-md mt-12 font-bold">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative pb-32">
        <Container>
          <div className="lg:flex items-center relative z-20">
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-2xl lg:text-4xl black-color font-bold leading-tight mb-8 2xl:w-3/4">
                Bring all available data into your processes
              </h2>
              <ul>
                <li className="flex mb-4">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2 self-start mt-1"
                    alt="triengle"
                  />
                  <span className="text-colorTwo text-base md:text-xl">
                    Integrate existing information from your ERP & eProcurement
                    systems
                  </span>
                </li>
                <li className="flex mb-4">
                  <img
                    src="assets/triengle.svg"
                    className="mr-2 self-start mt-1"
                    alt="triengle"
                  />
                  <span className="text-colorTwo text-base md:text-xl">
                    Insights and recommendations are implemented into processes
                  </span>
                </li>
              </ul>
              <Link href="/">
                <a className="btn-bg text-white inline-block px-8 md:px-16 py-2 lg:mb-0 mb-6 md:py-4 rounded-md mt-12 font-bold">
                  Learn more
                </a>
              </Link>
            </div>
            <div className="lg:w-1/2 ml-auto">
              <div className="flex relative">
                <img
                  src="/assets/bring-all.svg"
                  className="block relative z-30 lg:mx-0 mx-auto"
                  alt="Form"
                />
              </div>
            </div>
          </div>
        </Container>
        <img
          src="/assets/fill.svg"
          className="absolute right-0 bottom-0 z-10 transform translate-y-20 traingle-height"
          alt="Shape"
        />
      </div>
    </div>
  );
}
