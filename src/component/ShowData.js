import React from "react";
import "./show-data-style.scss";
import { Container, Table, Button } from "react-bootstrap";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditModel from "./EditModel";
const ShowData = (props) => {
  return (
    <Container>
      <Row>
        <p className="text-start h3">Show data</p>
      </Row>
      <Col>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date Time</th>
                <th>Title</th>
                <th>Location</th>
                <th>Description</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {props.dataList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.dateTime}</td>
                  <td>{item.title}</td>
                  <td>{item.location}</td>
                  <td>{item.description}</td>
                  <td>
                    <img
                      src={`data:image/jpeg;base64,${item.imageUrl}`}
                      alt=""
                      width="50"
                    />
                  </td>
                  <td>
                    <EditModel
                      data={item}
                      onSave={(editItem) => props.editEvent(index, editItem)}
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => props.deleteEvent(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Col>
    </Container>
  );
};

export default ShowData;
