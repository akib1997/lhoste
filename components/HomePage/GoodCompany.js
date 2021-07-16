import React from "react";
import Container from "../Layout/Container";

export default function GoodCompany() {
  return (
    <div className="pt-20 pb-60 md:pb-80 relative main-bg -mb-72">
      <img
        src={`/assets/fill-12.svg`}
        className="block absolute mx-auto -top-36 left-0 right-0"
        alt="Fill"
      />
      <img
        src={`/assets/fill-13.svg`}
        className="block absolute pl-32 mx-auto -top-32 left-0 right-0"
        alt="Fill"
      />
      <Container>
        <div className="md:w-3/4 mx-auto md:mt-20 text-center">
          <h2 className=" lg:text-4xl font-bold black-color mb-12">
            Lhotse, at 8,516 meters, is the fourth highest mountain on planet
            Earth.
          </h2>
          <p className="mb-8 text-lg text-colorTwo">
            It sits right next to Mt. Everest – the reason that you have likely
            never heard of it. Attention is focussed on the highest mountain on
            Earth – neglecting its smaller sibling, Lhotse. The same holds true
            for tactical spend. Across firms of all sizes, focus lies on the 80
            % of spend considered to be strategic. The final 20 % ‘tactical
            spend’ are overlooked – remaining largely unoptimised.
          </p>
          <p className="text-lg text-colorTwo">
            At Lhotse, we want to change that.
          </p>
        </div>
      </Container>
    </div>
  );
}
