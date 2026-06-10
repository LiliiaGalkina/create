import React from "react";
import style from "./blogposts.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {

  const handleClick = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={style.pagination}>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className={style.button}
      >
        &larr; Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handleClick(index + 1)}
          disabled={currentPage === index + 1}
          className={style.buttonNumber}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={style.button}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default Pagination;
