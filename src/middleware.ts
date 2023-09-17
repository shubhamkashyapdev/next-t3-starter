import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextApiResponse } from "next";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/"],
  beforeAuth: (req) => {
    console.log(req.nextUrl.hostname);
  },
  afterAuth: (auth, req, evt) => {
    console.log("auth", auth.isPublicRoute);
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
