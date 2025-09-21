// src/hooks/usePagination.js
import { useState, useMemo } from "react";

const usePagination = (data, itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const paginationInfo = {
    startIndex: (currentPage - 1) * itemsPerPage,
    endIndex: (currentPage - 1) * itemsPerPage + currentData.length,
    totalItems: data.length,
  };

  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    prevPage,
    resetPage,
    paginationInfo,
  };
};

export default usePagination;
