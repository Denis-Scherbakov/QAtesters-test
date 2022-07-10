import React, { useEffect, useState } from "react";
import data from "../src/test-data.json";
import { Order } from "./types";
import { Pagination } from "./components/pagination/index.tsx";
import { Table } from "./components/table/index.tsx";

export function App() {
  const [orders] = useState(data as Order[]);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = orders.slice(indexOfFirstPost, indexOfLastPost);

  const totalPosts = orders.length;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      setPageNumbers((prevState) => [...prevState, i]);
    }
  }, [postsPerPage, totalPosts]);

  const paginateForward = () => {
    setCurrentPage((prevNumber) => prevNumber + 1);
  };

  const paginateFullForward = () => {
    setCurrentPage(pageNumbers[pageNumbers.length - 1]);
  };

  const paginateBack = () => {
    setCurrentPage((prevNumber) => prevNumber - 1);
  };

  const paginateFullBack = () => {
    setCurrentPage(1);
  };

  const handlePostsPerPage = (value) => {
    setPostsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="App">
      <Table data={currentPosts} />
      <Pagination
        setCurrentPage={setCurrentPage}
        indexOfFirstPost={indexOfFirstPost}
        indexOfLastPost={indexOfLastPost}
        postsPerPage={postsPerPage}
        totalPosts={orders.length}
        paginateForward={paginateForward}
        paginateFullForward={paginateFullForward}
        paginateBack={paginateBack}
        paginateFullBack={paginateFullBack}
        currentPage={currentPage}
        handlePostsPerPage={handlePostsPerPage}
        pageNumbers={pageNumbers}
      />
    </div>
  );
}
