import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPosts,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {

  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center sticky bottom-0 pagination">
      {pages.map((page, index) => {
        return (
          <button
            className={currentPage === page ? "active" : ""}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
