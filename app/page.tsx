import UsersServer from "./users/page";
export default function Home() {
  return (
    <section className="py-10 flex flex-col items-center gap-5 text-center">
      <h1 className="text-2xl font-bold">Hello and Welcome to Next.js</h1>
      <p className="text-lg text-muted-foreground">
        Here comes a list of JSON-placeholder users
      </p>
      <div className="flex gap-5 py-6"></div>
      <UsersServer />
    </section>
  );
}
