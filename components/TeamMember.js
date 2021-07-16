import React from "react";

export default function TeamMember({ teamData }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-20 mt-40 justify-center">
      {teamData &&
        teamData.map((member) => (
          <div
            className="relative bg-white rounded-3xl shadow-2xl lg:mb-0 mb-32"
            key={member.id}
          >
            <div className="w-52 h-52 rounded-full mx-auto absolute overflow-hidden -mt-28 left-0 right-0 shadow-2xl">
              <img
                src={`${member.img}`}
                alt={member.title}
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="p-6 xl:p-12 mt-20">
              <span className="w-20 h-0.5 bg-green-500 block mx-auto my-2"></span>
              <h5 className="text-base md:text-xl font-bold text-blue-900 mb-2">
                {" "}
                {member.title}{" "}
              </h5>
              <h6 className="text-base text-blue-900 mb-6">
                {" "}
                {member.position}{" "}
              </h6>
              <p> {member.text} </p>
            </div>
          </div>
        ))}
    </div>
  );
}
