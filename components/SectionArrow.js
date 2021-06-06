import React from "react";
import Container from "./Layout/Container";
import Link from "next/link";

export default function SectionArrow() {
  return (
    <div className="bla bla">
      <div className="relative">
        <img
          src="/assets/fill.svg"
          className="absolute right-0 top-0 z-10 transform -translate-y-20 lg:-translate-y-44 traingle-height"
          alt="Shape"
        />
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center pt-12">
            <div className="p-1">
              <h2 className="text-3xl text-blue-900 font-bold mb-4">
                We believe in empowering teams to bring the best of themselves
                to the table.
              </h2>
              <p>
                This guides our behavior and all our efforts - both in the way
                our software is developed: to empower organizations and
                procurement teams. As well as in how our organization operates
                internally.
              </p>
              <Link href="/">
                <a className="bg-blue-900 text-white inline-block font-bold px-10 py-2 rounded mt-12">
                  Check open positions
                </a>
              </Link>
            </div>
            <div className="mt">
              <img
                src="https://images.unsplash.com/photo-1622778857530-bf970941351f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                className="block mx-auto max-h-96 object-cover rounded-xl shadow-2xl lg:ml-auto relative z-30 w-full"
                alt="Form"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
