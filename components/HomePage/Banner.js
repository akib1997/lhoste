import Link from "next/link";
import Image from "next/image";
import AllTab from "./Tabs";
import Container from "../Layout/Container";

export default function Banner() {
  return (
    <>
      <section className="mt-32 relative">
        <Container>
          <div className="text-center sm:w-3/4 mx-auto relative z-10">
            <h1 className="text-3xl md:text-5xl black-color font-bold mb-4">
              The smarter way to manage tactical spend{" "}
            </h1>
            <p className="text-gray-500 text-xl">
              Lhotse helps you optimize the costs you're not looking at. By
              taking the hassle out of indirect spend - bein intuitive to use
              and simple to integrate with your existing systems.
            </p>
            <Link href="/">
              <a className="btn-bg text-white inline-block px-8 md:px-16 py-4 rounded-md mt-12 font-bold">
                Book Demo
              </a>
            </Link>
          </div>
          <img
            src="/assets/mountain-background.svg"
            className="w-full h-full absolute z-0 left-0 bottom-0"
            alt="Book Demo"
          />
          <AllTab />
        </Container>
      </section>
    </>
  );
}
