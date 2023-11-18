import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { config as environment } from "@/utils/environment";
import { PageEnum } from "@/utils/pages.types";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|img).*)"],
};

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get(
    environment.authenticationCookieName as string
  );

  const urlIsSignIn = request.nextUrl.pathname === PageEnum.signIn;

  if (cookie?.value) {
    return urlIsSignIn
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  } else {
    return urlIsSignIn
      ? NextResponse.next()
      : NextResponse.redirect(new URL(PageEnum.signIn, request.url));
  }
}
