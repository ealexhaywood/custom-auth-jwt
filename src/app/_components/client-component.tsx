"use client";

import { useCurrentUser } from "@/app/auth-provider";

export function ClientComponent() {
  const user = useCurrentUser();

  return (
    <div>
      Hello {user.firstName} {user.lastName} from client component!
    </div>
  );
}
