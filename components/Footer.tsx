interface FooterProps {
    className?: string;
}
export const Footer : React.FC<FooterProps> = ({className}) => {
    return (
        <footer className= {className}>
            <p>© 2025 Rina&Co</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </footer>
    );
}
