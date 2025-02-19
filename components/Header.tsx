import {Navigation} from "./Navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 cursor-pointer flex gap-4">
            <Navigation/>
            <Button>Learn More</Button>
        </header>
    );
}
export { Header };