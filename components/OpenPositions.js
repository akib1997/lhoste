import React from "react";

export default function OpenPositions({ positions }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 mb-20">
      {positions &&
        positions.map((position) => (
          <div
            className="py-8 px-6 shadow-xl rounded-2xl bg-white"
            key={position.id}
          >
            <span className="w-28 h-0.5 bg-green-500 block my-2"></span>
            <h5 className="text-xl font-bold text-blue-900 mb-2">
              {position.title}
            </h5>
            <p className="text-xl mb-6">{position.location}</p>
          </div>
        ))}
    </div>
  );
}
