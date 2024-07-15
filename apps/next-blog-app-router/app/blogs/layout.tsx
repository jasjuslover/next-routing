import { ReactNode } from "react";

export default async function BlogLayout({
  children,
  blogs,
}: {
  children: ReactNode;
  blogs: ReactNode;
}) {
  return (
    <>
      {blogs}
      {children}
    </>
  );
}
