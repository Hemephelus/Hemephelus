import React from "react";

export default function Page() {
  return (
    <section className="grid grid-cols-2">
      <div className="border-b border-b-dark1"></div>
      <div className="bg-dark1 relative">
        <img src="/me.jpg" className="" alt="" />
        <div className="bg-dark1  h-full w-full absolute top-0 left-0 opacity-70"></div>
      </div>
    </section>
  );
}
