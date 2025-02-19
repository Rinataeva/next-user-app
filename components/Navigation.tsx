import Link from "next/link";
export function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
}
