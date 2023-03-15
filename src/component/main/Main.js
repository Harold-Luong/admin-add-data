import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../main/main.scss";

const Main = () => {
  const [show, setShow] = useState({});

  const data = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    location: "Vietnam",
    dateTime: "2022-12-01T10:30:00Z",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur a ",
    srcImg: `https://via.placeholder.com/200x200`,
  }));
  const [width, setWidth] = useState(window.innerWidth);
  const [numArrays, setNumArrays] = useState(4);
  //hande resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  //check wirdth screen
  useEffect(() => {
    if (width > 800) {
      setNumArrays(4);
    } else if (width > 600 && width <= 800) {
      setNumArrays(2);
    } else {
      setNumArrays(1);
    }
  }, [width]);

  const result = data.reduce((acc, item, index) => {
    const subarrayIndex = index % numArrays;
    const subarrayName = "col" + (subarrayIndex + 1);
    acc[subarrayName] = [...(acc[subarrayName] || []), item];
    return acc;
  }, {});
  //handle img
  const handleImgClick = (id) => {
    setShow({ ...show, [id]: true });
  };
  return (
    <Row className="main">
      {[...Array(numArrays)].map((_, i) => (
        <Col className="column" key={i}>
          {result["col" + (i + 1)].map((item, j) => (
            <Image
              className={show[item.id] ? "fade-out" : ""}
              onClick={() => handleImgClick(item.id)}
              key={j}
              src={item.srcImg}
              alt=""
              fluid
              style={{ width: "100%" }}
            />
          ))}
        </Col>
      ))}
    </Row>
  );
};

export default Main;
