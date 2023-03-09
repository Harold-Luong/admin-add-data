import "./App.scss";
import AddDataForm from "./component/AddDataForm";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import ShowData from "./component/ShowData";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [dataList, setDataList] = useState([
    {
      dateTime: "2023-03-15T19:00",
      title: "Event 1",
      location: "Location 1",
      description: "Description 1",
      imageUrl: "image-url-1",
    },
    {
      dateTime: "2023-03-20T20:00",
      title: "Event 2",
      location: "Location 2",
      description: "Description 2",
      imageUrl: "image-url-2",
    },
    {
      dateTime: "2023-03-20T20:00",
      title: "Event 3",
      location: "Location 3",
      description: "Description 3",
      imageUrl: "image-url-3",
    },
  ]);
  const [events, setEvents] = useState([]);

  const handleDelete = (index) => {
    const newDataList = [...dataList];
    newDataList.splice(index, 1);
    setDataList(newDataList);
    toast.success("Data deleted successfully!");
  };
  const handleEdit = (index, newData) => {
    const newDataList = [...dataList];
    newDataList[index] = newData;
    setDataList(newDataList);
    toast.info("Data updated successfully!");
  };

  const handleSave = (newData) => {
    const newDataList = [...dataList, newData];
    setDataList(newDataList);
    toast.success("Data added successfully!");
  };
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container>
        <Row>
          <Col md={{ span: 12 }} className="my-5">
            <AddDataForm saveEvent={handleSave} />

            <ToastContainer />
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col md={{ span: 12 }} className="my-5">
            <ShowData
              dataList={dataList}
              events={events}
              editEvent={handleEdit}
              deleteEvent={handleDelete}
            />
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  );
}

export default App;
