import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditModal(props) {
  const [show, setShow] = useState(false);
  const [editedData, setEditedData] = useState({
    dateTime: props.data.dateTime,
    title: props.data.title,
    location: props.data.location,
    description: props.data.description,
    imageUrl: props.data.imageUrl,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Call parent component's save function with the edited data
    console.log(props);
    props.onSave(editedData);

    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDateTime">
              <Form.Label>Date Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="dateTime"
                value={editedData.dateTime}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={editedData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={editedData.location}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={editedData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={editedData.imageUrl}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
