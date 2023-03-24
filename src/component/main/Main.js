import React, { useState } from "react";

import "../main/main.scss";

import ShowModal from "./ShowModal";

const Main = ({ dataImg, show, onAnimationEnd }) => {
  //xu ly modal

  const [modalShow, setModalShow] = useState(false);
  const [dataModal, setdataModal] = useState([]);
  const handleClose = () => setModalShow(false);
  const handleShow = (data) => {
    setdataModal(data);
    setModalShow(true);
  };

  return (
    <div className="container">
      <h2 className="heading-text">
        My <span>image gallery</span>
      </h2>
      <div id="gallery-img" className="row">
        <ul className="image-gallery">
          {dataImg.map((item, key) => {
            return (
              <li
                key={key}
                className={
                  "tile all lazyload " + ` ${show ? "scale-anm " : ""}`
                }
                onAnimationEnd={onAnimationEnd}
              >
                <img src={item.src} alt={item.location}></img>
                <div className="overlay" onClick={() => handleShow(item)}>
                  <span>{item.location}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <ShowModal show={modalShow} onHide={handleClose} item={dataModal} />
    </div>
  );
};

export default Main;
