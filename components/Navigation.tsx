import Link from "next/link";
import { ModeToggle } from "./ui/toggle-mode";
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
        <li>
           <ModeToggle/> 
        </li>
      </ul>
    </nav>
  );
}
