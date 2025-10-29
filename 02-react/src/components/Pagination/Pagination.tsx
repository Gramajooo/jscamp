import type { MouseEvent } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage = 1, totalPages, onPageChange }: PaginationProps) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const stylePrevButton = isFirstPage ? { pointerEvents: 'none' as const, opacity: 0.5 } : {};
    const styleNextButton = isLastPage ? { pointerEvents: 'none' as const, opacity: 0.5 } : {};

    const handlePrevPage = (event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        if (!isFirstPage) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = (event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        if (!isLastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const handleChangePage = (event: MouseEvent<HTMLAnchorElement>): void => {
        event.preventDefault();
        const page = Number(event.currentTarget.dataset.page);

        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    if (!totalPages) {
        return (
            <div className={styles.empty}>
                <h1>No se encontraron empleos</h1>
            </div>
        );
    }

    return (
        <nav className={styles.pagination}>
            <a
                href=""
                style={stylePrevButton}
                onClick={handlePrevPage}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                </svg>
            </a>

            {pages.map((page) => (
                <a
                    href=""
                    key={page}
                    data-page={page}
                    onClick={handleChangePage}
                    className={currentPage === page ? styles.isActive : ''}
                >
                    {page}
                </a>
            ))}

            <a
                href=""
                style={styleNextButton}
                onClick={handleNextPage}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                </svg>
            </a>
        </nav>
    );
};
