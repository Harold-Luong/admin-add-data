import imageGallery from "../../asset/data";
import "../nav/nav.scss";
import Main from "../main/Main";
import { Pagination } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { convertLocationToSlugTag } from "../../asset/common";

const NavPage = () => {
  const [show, setShow] = useState(true);
  const [imgGallery, setImgGallery] = useState(imageGallery);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClassActive, setSelectedClassActive] = useState("all");

  const uniqueLocations = [
    ...new Set(imageGallery.map((item) => item.location)),
  ];
  const effectFadeInOut = () => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 350);
  };
  const handleClickFilterButton = async (event) => {
    const clickedButton = event.target;
    const valueFilter = clickedButton.dataset.rel;
    setSelectedClassActive(valueFilter);
    const dataFilter = filterGalleryByLocation(valueFilter);
    effectFadeInOut();
    await delay(300);
    if (dataFilter.length > 0) {
      setImgGallery(dataFilter);
      setCurrentPage(1);
    } else {
      setImgGallery(imageGallery);
    }
  };

  const filterGalleryByLocation = (location) => {
    return imageGallery.filter(
      (item) => convertLocationToSlugTag(item.location) === location
    );
  };

  const handlePageChange = async (pageNum) => {
    effectFadeInOut();
    await delay(300);
    setCurrentPage(pageNum);
  };

  const getCurrentItems = () => {
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imgGallery.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  const getPageNumbers = () => {
    const itemsPerPage = 4;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(imgGallery.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <>
      <div className="toolbar">
        <button
          className={`btn-nav nav-filter  ${
            selectedClassActive === "all" ? "btn-nav-active" : ""
          }`}
          data-rel="all"
          onClick={handleClickFilterButton}
        >
          All
        </button>
        {uniqueLocations.map((location, index) => (
          <button
            key={index}
            className={`btn-nav nav-filter ${
              selectedClassActive === convertLocationToSlugTag(location)
                ? "btn-nav-active"
                : ""
            }`}
            data-rel={convertLocationToSlugTag(location)}
            onClick={handleClickFilterButton}
          >
            {location}
          </button>
        ))}
      </div>
      {getCurrentItems() && (
        <Main
          dataImg={getCurrentItems()}
          show={show}
          onAnimationEnd={() => setShow(true)}
        />
      )}
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {getPageNumbers().map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => {
                handlePageChange(pageNumber);
              }}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === getPageNumbers().length}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      </div>
    </>
  );
};

export default NavPage;
