"use client";

import { ReactNode, createContext, useContext } from "react";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
};

const AuthContext = createContext<User | null>(null);

export function AuthProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: User;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useCurrentUser() {
  const user = useContext(AuthContext);

  if (!user) {
    throw Error(
      "No user, you should probably redirect to error page and return 401/403"
    );
  }

  return user;
}
