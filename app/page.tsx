import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-10 flex flex-col items-center gap-5 text-center">
      <h1 className="text-2xl font-bold">
        Welcome to the "Who Are Our Users?" Page!
      </h1>
      <p className="text-lg text-muted-foreground">
        Let us dive into these quick insights
      </p>
      <Link href="/users">
        <Button className="mt-5 font-bold px-10">Get Started</Button>
      </Link>
    </section>
  );
}
