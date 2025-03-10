import React from "react";

interface HeadingProps {
  children: React.ReactNode;
}
export function Heading1() {
  return <div>Heading</div>;
}

export function Heading2({ children }: HeadingProps) {
  return <h2 className="font-instrument-serif text-3xl md:text-5xl"> {children}</h2>;
}
export function Heading3({ children }: HeadingProps) {
  return <h2 className="font-instrument-serif text-2xl md:text-4xl"> {children}</h2>;
}
export function Heading4({ children }: HeadingProps) {
  return <h2 className="font-instrument-serif text-xl md:text-3xl"> {children}</h2>;
}



export function Heading5({ children }: HeadingProps) {
  return (
    <h5 className=" border-b border-dashed border-b-dark2 w-fit pb-2 font-space-grotesk font-medium text-sm uppercase">
      {children}
    </h5>
  );
}

export function Heading6({ children }: HeadingProps) {
  return (
    <h5 className="font-space-grotesk font-medium text-sm uppercase">
      {children}
    </h5>
  );
}
