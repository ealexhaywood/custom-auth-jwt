import { NextRequest, NextResponse } from "next/server";

const user = {
  firstName: "Joe",
  lastName: "Flacco",
  email: "joe@dundalk.org",
  roles: ["ELITE_QUARTERBACK", "AWESOME_DAD", "JERSEY_BOYS"],
};

const jwt = Buffer.from(JSON.stringify(user)).toString("base64");

export function middleware(request: NextRequest) {
  request.cookies.set("jwt", jwt);

  const response = NextResponse.next();
  response.cookies.set("jwt", jwt);

  return response;
}
