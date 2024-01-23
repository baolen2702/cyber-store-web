"use client";
import React, { useMemo } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useQueryParams } from "@/hooks/queryParams";

export default function AppPagination({
  totalPages,
  page,
}: {
  totalPages: number;
  page: number;
}) {
  const { setQueryParams } = useQueryParams();
  const displayPages = useMemo(() => {
    const visiblePages = 4; // Number of visible page numbers excluding ellipsis

    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const pagination = [];

    if (startPage > 1) {
      pagination.push(1);
    }

    if (startPage > 2) {
      pagination.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    if (endPage < totalPages - 1) {
      pagination.push("...");
    }

    if (endPage < totalPages) {
      pagination.push(totalPages);
    }

    return pagination;
  }, [totalPages, page]);

  return (
    <Pagination className="w-full overflow-hidden">
      <PaginationContent>
        <PaginationPrevious
          onClick={() => {
            setQueryParams("page", Math.max(page - 1, 1).toString());
          }}
        />
        {displayPages.map((p) =>
          p === "..." ? (
            <PaginationEllipsis key={p} />
          ) : (
            <PaginationLink
              key={p}
              onClick={() => {
                setQueryParams("page", p.toString());
              }}
              isActive={page === p}
            >
              {p}
            </PaginationLink>
          )
        )}

        {totalPages !== page && !displayPages.includes(page) && (
          <PaginationLink
            onClick={() => {
              setQueryParams("page", page.toString());
            }}
            isActive
          >
            {page}
          </PaginationLink>
        )}
        <PaginationNext
          onClick={() => {
            setQueryParams("page", Math.min(page + 1, totalPages).toString());
          }}
        />
      </PaginationContent>
    </Pagination>
  );
}
