import Link from "next/link";
import AllTab from "./Tabs";
import Container from "../Layout/Container";

export default function Banner() {
  return (
    <>
      <section className="mt-32 relative bg-white">
        <Container>
          <div className="text-center md:max-w-[970px] mx-auto relative z-10">
            <h1 className="text-3xl md:text-4xl text-colorOne font-bold mb-5">
              The smarter way to manage tactical spend{" "}
            </h1>
            <p className="text-colorTwo text-xl">
              Lhotse helps you optimize the costs you're not looking at. By
              taking the hassle out of indirect spend - bein intuitive to use
              and simple to integrate with your existing systems.
            </p>
            <Link href="/">
              <a className="btn-bg text-white inline-block px-8 md:px-16 py-4 rounded-md mt-12 font-bold tracking-wider">
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
