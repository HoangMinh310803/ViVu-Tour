// src/components/common/PaginatedTable.js
import React, { useEffect } from "react";
import usePagination from "../hooks/usePagination";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { styles } from "../../styles";

const PaginatedTable = ({
  title,
  columns,
  data,
  buttonLabel,
  onButtonClick,
  renderRowActions,
  resetToken,
}) => {
  const {
    currentPage,
    totalPages,
    currentData,
    nextPage,
    prevPage,
    resetPage,
    paginationInfo,
  } = usePagination(data);
  useEffect(() => {
    resetPage();
  }, [resetToken]);

  return (
    <div style={styles.table}>
      <div style={styles.tableHeader}>
        <h3 style={styles.tableTitle}>{title}</h3>
        {buttonLabel && onButtonClick && (
          <button onClick={onButtonClick} style={styles.primaryButton}>
            <Plus size={16} /> {buttonLabel}
          </button>
        )}
      </div>
      <div style={styles.tableContent}>
        <table style={styles.tableEl}>
          <thead style={styles.tableHead}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ ...styles.tableHeadCell, width: col.width }}
                >
                  {col.header}
                </th>
              ))}
              {renderRowActions && (
                <th style={{ ...styles.tableHeadCell, width: "10%" }}>
                  Hành động
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    style={{ ...styles.tableCell, ...styles.tableCellEllipsis }}
                  >
                    {col.render ? col.render(item) : item[col.key]}
                  </td>
                ))}
                {renderRowActions && (
                  <td style={styles.tableCell}>
                    <div style={styles.actionButtons}>
                      {renderRowActions(item)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.paginationContainer}>
        <span>
          Hiển thị {paginationInfo.startIndex + 1}-{paginationInfo.endIndex} của{" "}
          {paginationInfo.totalItems}
        </span>
        <div style={styles.paginationControls}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            style={{
              ...styles.paginationButton,
              ...(currentPage === 1 ? styles.paginationButtonDisabled : {}),
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            style={{
              ...styles.paginationButton,
              ...(currentPage === totalPages
                ? styles.paginationButtonDisabled
                : {}),
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaginatedTable;
