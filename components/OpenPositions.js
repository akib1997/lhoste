import React from "react";

export default function OpenPositions({ positions }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mb-20">
      {positions &&
        positions.map((position) => (
          <div
            className="py-8 px-6 transition-all duration-200 hover:shadow-xl shadow rounded-2xl bg-white"
            key={position.id}
          >
            <span className="w-36 h-[3px] bg-[#78DAB1] block my-2"></span>
            <h5 className="text-[24px] font-bold text-colorOne mb-2">
              {position.title}
            </h5>
            <p className="text-lg mb-6 text-colorTwo">{position.location}</p>
          </div>
        ))}
    </div>
  );
}
