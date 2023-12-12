import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

// Server function for getting the current user
export function getCurrentUser() {
  const jwt = cookies().get("jwt")?.value ?? "";
  return JSON.parse(Buffer.from(jwt, "base64").toString("utf8"));
}
