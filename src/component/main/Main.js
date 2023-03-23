import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
// import imageGallery from "../../asset/data";
import "../main/main.scss";
import imgLoad from "../../asset/gg.gif";

const Main = ({ dataImg, show }) => {
  const [shouldRender, setRender] = useState(show);
  const [classFade, setclassFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setclassFade("scale-anm");
    }, 300);
  }, [shouldRender]);

  return (
    <div className="container">
      <h2 className="heading-text">
        My <span>image gallery</span>
      </h2>
      <div id="gallery-img" className="row">
        <ul className="image-gallery">
          {dataImg.map((item, key) => {
            return (
              <li key={key} className={" tile all lazyload " + classFade}>
                <img src={item.src} alt={item.location}></img>
                <div
                  className="overlay"
                  data-bs-toggle="modal"
                  data-bs-target="#showInforModal"
                  data-whatever={item.id}
                >
                  <span>{item.location}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;
