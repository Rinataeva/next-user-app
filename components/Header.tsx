import {Navigation} from "./Navigation";
import { Button } from "@/components/ui/button";

interface HeaderProps {
    className?: string;
}
export const Header: React.FC<HeaderProps> = ({className}) => {
    return (
        <header className={className}>
            <Navigation className="bg-slate-200 py-1 px-1 font-bold"/>
            <Button className="font-bold">Message us</Button>
        </header>
    );
}
