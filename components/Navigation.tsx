import Link from "next/link";
import { ModeToggle } from "./ui/toggle-mode";

interface NavigationProps {
  className?: string;
}
export const Navigation: React.FC<NavigationProps> = ({className}) => {
  return (
    <nav className={className}>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
           <ModeToggle/> 
        </li>
      </ul>
    </nav>
  );
}
