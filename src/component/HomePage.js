import ThemeProvider from "react-bootstrap/ThemeProvider";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavPage from "./nav/NavPage";
import FooterPage from "./footer/FooterPage";
import Main from "./main/Main";
const HomePage = () => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container>
        <Row>
          <Col md={{ span: 12 }} className="my-5">
            <NavPage />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col md={{ span: 12 }} className="my-5">
            <Main />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col md={{ span: 12 }} className="my-5">
            <FooterPage />
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
