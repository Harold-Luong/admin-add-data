import imageGallery from "../../asset/data";
import "../nav/nav.scss";
import Main from "../main/Main";

import React, { useState, useEffect } from "react";
import { convertLocationToSlugTag } from "../../asset/common";
const NavPage = () => {
  const [show, setShow] = useState(true);
  //lấy các location không trung lặp để render btn
  const uniqueLocations = [
    ...new Set(imageGallery.map((item) => item.location)),
  ];
  //state active btn
  const [selectedClassActive, setSelectedClassActive] = useState("all");
  //data img
  const [imgGallery, setImgGallery] = useState(imageGallery);
  //click btn filter
  const handleClick = (event) => {
    const clickedButton = event.target;
    const valueFilter = clickedButton.dataset.rel;
    setSelectedClassActive(valueFilter);
    const dataFilter = imageGallery.filter(
      (item) => convertLocationToSlugTag(item.location) === valueFilter
    );

    if (dataFilter.length > 0) {
      setImgGallery(dataFilter);
    } else {
      setImgGallery(imageGallery);
    }
    setShow(!show);
  };

  return (
    <>
      <div className="toolbar">
        <button
          className={`btn-nav nav-filter  ${
            selectedClassActive === "all" ? "btn-nav-active" : ""
          }`}
          data-rel="all"
          onClick={handleClick}
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
            onClick={handleClick}
          >
            {location}
          </button>
        ))}
      </div>
      <Main dataImg={imgGallery} show={show} />
    </>
  );
};

export default NavPage;
