import React, { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({ perPage, totalItems, currentPage, setCurrentPage }) => {
  const [activePage, setActivePage] = useState(currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    setActivePage(number);
    setCurrentPage(number);
  };

  return (
    <div className={style.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageClick(number)}
          className={`${style.button} ${activePage === number ? style.activePage : ""}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;