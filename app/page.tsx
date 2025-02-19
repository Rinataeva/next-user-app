import UsersClient from "./users-client/page";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <section className="py-10 flex flex-col items-center gap-5 text-center">
      <h1 className="text-2xl font-bold">Get started</h1>
      <p className="text-lg text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex gap-5 py-6"></div>
      <UsersClient />
      <Button>Learn More</Button>
    </section>
  );
}
