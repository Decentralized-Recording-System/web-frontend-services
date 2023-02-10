import { NextResponse } from "next/server";

export default function middleware(req: {
  cookies: { get: (arg0: string) => any };
  url: any;
}) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  if (!verify && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
  if (!verify && url.includes("/activate")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/activate");
  }
  if (!verify && url.includes("/register")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/") {
    return NextResponse.redirect("http://localhost:3000/register");
  }
}
