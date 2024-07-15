import { PropsWithChildren } from "react";

export default function DashboardTemplate({ children }: PropsWithChildren) {
  return (
    <div>
      <p>just for dashboard and its child</p>
      {children}
    </div>
  );
}
