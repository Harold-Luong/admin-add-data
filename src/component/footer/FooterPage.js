import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

const FooterPage = () => {
  function Time() {
    const currentTime = moment().format("LT");
    return <span>{currentTime}</span>;
  }
  const countDays = () => {
    // Ngày hiện tại
    const today = new Date();

    // Ngày 8/1/2023
    const futureDate = new Date("2023-01-08");

    // Tính toán khoảng cách thời gian giữa hai ngày
    const timeDiff = Math.abs(futureDate.getTime() - today.getTime());

    // Chuyển đổi khoảng cách thời gian sang số ngày
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff - 1;
  };

  return (
    <Container>
      <Row>
        <Col md={6}>© 2023 My Website</Col>
        <Col md={6}>
          <div className="text-md-right">
            <Time />
          </div>

          <div className="text-md-right">{countDays()} days</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterPage;
