import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-col-[auto,1fr,auto]">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </footer>
  );
}

function LeftSection() {
  return <section></section>;
}
function MiddleSection() {
  return <section className="border-x border-x-dark2">
    <h2 className=" capitalize">nwachukwu ujubuonu</h2>
    <div>
        
    </div>
    <h4 className=" uppercase">software engineer</h4>

  </section>;
}
function RightSection() {
  return <section></section>;
}
