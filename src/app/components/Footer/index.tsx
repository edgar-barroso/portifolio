export function Footer() {
    return (
        <footer className=" h-24 bg-[--background-dark] flex flex-col items-center justify-center text-gray-600 text-sm">
            <div className="flex space-x-4 mb-2">
                <a 
                    href="https://github.com/seu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-400"
                >
                    GitHub
                </a>
                <a 
                    href="https://linkedin.com/in/seu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-gray-400"
                >
                    LinkedIn
                </a>
                <a 
                    href="mailto:seu-email@example.com" 
                    className="hover:text-gray-400"
                >
                    Contato
                </a>
            </div>
            <p className="text-gray-500 text-center">
                © {new Date().getFullYear()} José Edgar Barroso Neto. Todos os direitos reservados.
            </p>
        </footer>
    );
}