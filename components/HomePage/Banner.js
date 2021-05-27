import Link from "next/link";
import Image from "next/image";
import Tabs from "./Tabs";
import Container from "../HomePage/Container";

export default function Banner() {
  return (
    <>
      <Container>
        <div className="my-20 text-center w-3/4 mx-auto">
          <h1 className="text-4xl text-indigo-900 font-bold mb-2">
            The smarter way to manage tactical spend{" "}
          </h1>
          <p className="text-gray-500">
            Lhotse helps you optimize the costs you're not looking at. By taking
            the hassle out of indirect spend - bein intuitive to use and simple
            to integrate with your existing systems.
          </p>
          <Link href="/">
            <a className="bg-blue-900 text-white inline-block px-12 py-2 rounded mt-12">
              Book Demo
            </a>
          </Link>
        </div>
      </Container>
      <img
        src="/assets/mountain-background.svg"
        className="w-full h-full"
        alt="Book Demo"
      />
      <Tabs />
    </>
  );
}
