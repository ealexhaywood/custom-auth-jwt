import { getCurrentUser } from "@/app/auth";

export function ServerComponent() {
  const user = getCurrentUser();

  return (
    <div>
      Hello {user.firstName} {user.lastName} from server component!
    </div>
  );
}
