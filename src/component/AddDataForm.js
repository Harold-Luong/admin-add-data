import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal, Button, Form } from "react-bootstrap";

import "./add-data-style.scss";
function AddDataForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const initObject = {
    dateTime: "",
    title: "",
    location: "",
    description: "",
    imageUrl: "",
  };
  const [data, setData] = useState(initObject);
  //const [imageUrl, setImageUrl] = useState("");

  const onDrop = (acceptedFiles) => {
    // Lưu trữ tệp tin hình ảnh vào state `imageUrl`
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      //cắt chuỗi base64 giảm kích thước
      const base64Image = reader.result.split(",")[1];
      //  / setImageUrl(base64Image);
      setData({ ...data, imageUrl: base64Image });
    };
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit data to backend
    props.saveEvent(data);
    console.log(data);
    //clear data cũ
    setData(initObject);

    setShow(false);
  };

  const handleSave = () => {
    // Call parent component's save function with the edited data
    console.log(props);
    // props.onSave(editedData);

    setShow(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    //form
    <>
      <Button variant="primary" type="submit" onClick={handleShow}>
        Add Data
      </Button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add data form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={{ span: 6, offset: 3 }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="dateTime">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      name="dateTime"
                      value={data.dateTime}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={data.title}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="location"
                      value={data.location}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>File</Form.Label>

                    {data.imageUrl ? (
                      <div>
                        <img
                          src={`data:image/jpeg;base64,` + data.imageUrl}
                          alt="Preview"
                          width="100"
                        />
                      </div>
                    ) : (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} accept="image/*" />

                        {isDragActive ? (
                          <div className="form-control pointer">
                            <p>Thả file ảnh vào đây</p>
                          </div>
                        ) : (
                          <div className="form-control pointer">
                            <p>Kéo thả hoặc nhấp để chọn file ảnh vào đây</p>
                          </div>
                        )}
                      </div>
                    )}
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="description"
                      rows={4}
                      value={data.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDataForm;
