import Link from "next/link";
import { ModeToggle } from "./ui/toggle-mode";

interface NavigationProps {
  className?: string;
}
export const Navigation: React.FC<NavigationProps> = ({className}) => {
  return (
    <nav className={className}>
      <ul className="flex gap-10">
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
