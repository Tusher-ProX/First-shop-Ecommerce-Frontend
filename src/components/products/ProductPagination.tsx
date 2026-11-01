type ProductPaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

type PageNumber = number | "...";

function getPageNumbers(
    currentPage: number,
    totalPages: number
): PageNumber[] {
    const pages = new Set<number>();

    pages.add(1);
    pages.add(totalPages);
    pages.add(currentPage - 1);
    pages.add(currentPage);
    pages.add(currentPage + 1);

    const sortedPages = [...pages]
        .filter(
            (page) => page >= 1 && page <= totalPages
        )
        .sort((a, b) => a - b);

    const result: PageNumber[] = [];

    sortedPages.forEach((page, index) => {
        if (
            index > 0 &&
            page - sortedPages[index - 1] > 1
        ) {
            result.push("...");
        }

        result.push(page);
    });

    return result;
}

export default function ProductPagination({
    currentPage,
    totalPages,
    onPageChange,
}: ProductPaginationProps) {
    if (totalPages <= 1) return null;

    const pageNumbers = getPageNumbers(
        currentPage,
        totalPages
    );

    return (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm text-foreground transition-colors hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
            >
                ← Previous
            </button>

            {pageNumbers.map((page, index) =>
                page === "..." ? (
                    <span
                        key={`ellipsis-${index}`}
                        className="flex h-10 w-8 items-center justify-center text-muted"
                    >
                        ...
                    </span>
                ) : (
                    <button
                        type="button"
                        key={page}
                        onClick={() => onPageChange(page)}
                        aria-current={
                            currentPage === page ? "page" : undefined
                        }
                        className={`flex h-10 w-10 items-center justify-center text-sm transition-colors ${
                            currentPage === page
                                ? "bg-burgundy text-white"
                                : "text-foreground hover:bg-burgundy/10"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm text-foreground transition-colors hover:text-burgundy disabled:cursor-not-allowed disabled:opacity-40"
            >
                Next →
            </button>
        </div>
    );
}