import React from "react";
import Container from "../Layout/Container";

export default function GoodCompany() {
  return (
    <div className="pt-20 pb- relative" style={{ backgroundColor: "#F4F4FF" }}>
      <img
        src={`/assets/fill-12.svg`}
        className="block absolute mx-auto -top-20 left-0 right-0"
        alt="Fill"
      />
      <img
        src={`/assets/fill-13.svg`}
        className="block absolute pl-32 mx-auto -top-16 left-0 right-0"
        alt="Fill"
      />
      <Container>
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Lhotse, at 8,516 meters, is the fourth highest mountain on planet
            Earth.
          </h2>
          <p className="mb-8">
            It sits right next to Mt. Everest – the reason that you have likely
            never heard of it. Attention is focussed on the highest mountain on
            Earth – neglecting its smaller sibling, Lhotse. The same holds true
            for tactical spend. Across firms of all sizes, focus lies on the 80
            % of spend considered to be strategic. The final 20 % ‘tactical
            spend’ are overlooked – remaining largely unoptimised.
          </p>
          <p>At Lhotse, we want to change that.</p>
        </div>
      </Container>
    </div>
  );
}
