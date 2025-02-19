import Link from "next/link";
import { Button } from "@/components/ui/button";
const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 cursor-pointer flex gap-4">
            <Button>Get Started</Button>
            <Link href={"/"}>Home</Link>
            <Link href={"/user"}>User</Link>
        </header>
    );
}
export { Header };