import type { ReactNode } from 'react';

type HeaderProps = {
    children?: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
    return (
        <header>
            <h1>
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
                DevJobs
            </h1>
            {children}
            <div>
                <a href="">Publicar un empleo</a>
                <a href="">Iniciar sesión</a>
            </div>
        </header>
    );
};