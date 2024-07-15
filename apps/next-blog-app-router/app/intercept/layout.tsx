import { ReactNode } from "react";

export default function InterceptLayout({
  children,
}: //   modal,
{
  children: ReactNode;
  //   modal: ReactNode;
}) {
  return (
    <>
      {/* {modal} */}
      {children}
    </>
  );
}
