// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  const token = await getToken({ req });
  if (token) {
    return NextResponse.next();
  }
  req.nextUrl.searchParams.set("from", req.nextUrl.pathname);
  req.nextUrl.pathname = "/api/auth/unauthorized";

  return NextResponse.rewrite(req.nextUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/products", "/api/sales"],
};
