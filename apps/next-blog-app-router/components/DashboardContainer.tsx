import { PropsWithChildren } from "react";

function DashboardContainer({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex gap-x-3">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      {children}
    </>
  );
}

export default DashboardContainer;
