import {Navigation} from "./Navigation";


interface HeaderProps {
    className?: string;
}
export const Header: React.FC<HeaderProps> = ({className}) => {
    return (
        <header className={className}>
            <Navigation className="pt-2 pb-2 bg-center py-1 px-1 ml-5 " />
        </header>
    );
}
