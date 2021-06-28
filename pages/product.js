import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Layout/Container";
// import profilePic from "./../public/assets/height-adjustable.svg";

export default function product() {
  return (
    <>
      <Head>
        <title>Product | Lhots</title>
      </Head>
      <section className="pt-12 lg:pt-32 relative">
        <Container>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Enable your organization to source anything in the best way
              </h1>
              <p className="mb-12 leading-relaxed text-gray-500">
                Lhotse knows what and who is in your supplier base and makes
                sure you foster relationships with the right suppliers
              </p>
            </div>
            <div>
              {/* <Image
                src={profilePic}
                width={200}
                alt="Picture of the author"
                height={200}
              /> */}
              <img
                src="/assets/height-adjustable.svg"
                alt="Enable your organization to source anything in the best way"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
