import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req:any) {
  // Token exists if logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (req.nextUrl.pathname.startsWith("/api/auth") || token) {
    return NextResponse.next();
  }

  if (!token && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};