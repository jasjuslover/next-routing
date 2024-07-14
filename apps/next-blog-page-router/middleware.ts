import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("token");

  if (!token && url.pathname === "/dashboard") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (token && url.pathname === "/login") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
