import { ClientComponent } from "@/app/_components/client-component";
import { ServerComponent } from "@/app/_components/server-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ClientComponent />
      <ServerComponent />
    </main>
  );
}
