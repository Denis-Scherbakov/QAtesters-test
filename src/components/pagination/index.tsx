import React from "react";
import "./pagination.scss";
import {
  ChevronLeftIcon,
  DoubleArrowLeftIcon,
  ChevronRightIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { PaginationProps } from "../../types";

export const Pagination = ({
  pageNumbers,
  paginateForward,
  paginateFullForward,
  paginateBack,
  paginateFullBack,
  currentPage,
  indexOfFirstPost,
  indexOfLastPost,
  handlePostsPerPage,
}: PaginationProps) => {
  const lastPage = pageNumbers[pageNumbers.length - 1];

  return (
    <section className="pagination__wrapper">
      <p className="pagination__info">
        записи {indexOfFirstPost + 1}-{indexOfLastPost}
      </p>
      <div className="pagination__nav">
        <button
          type="button"
          className="nav__button"
          onClick={paginateFullBack}
          disabled={currentPage === 1}
        >
          <DoubleArrowLeftIcon />
        </button>
        <button
          type="button"
          className="nav__button"
          onClick={paginateBack}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon />
        </button>
        <div className="pagination__nav--current-page">{currentPage}</div>
        <button
          type="button"
          className="nav__button"
          disabled={currentPage === lastPage}
          onClick={paginateForward}
        >
          <ChevronRightIcon />
        </button>
        <button
          type="button"
          className="nav__button"
          disabled={currentPage === lastPage}
          onClick={(pageNumbers) => paginateFullForward(pageNumbers)}
        >
          <DoubleArrowRightIcon />
        </button>
      </div>
      <span>по</span>
      <select
        className="nav__select"
        onChange={(e) => handlePostsPerPage(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <span>записей</span>
    </section>
  );
};
