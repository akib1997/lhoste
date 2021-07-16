import React from "react";

export default function Container({ children }) {
  return <div className="xl:w-[1255px] w-full sm:w-11/12 md:w-4/5 mx-auto px-4">{children}</div>;
}
