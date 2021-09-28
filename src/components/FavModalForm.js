import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
class FavModalForm extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={()=>this.props.handleDisUpModal(this.props.selectedFruits)}>
          <Modal.Header closeButton>
            <Modal.Title>Fruits</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.handleUpModal}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="name" name="name"  defaultValue={this.props.selectedFruits.name}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder="photo" name="photo" defaultValue={this.props.selectedFruits.image}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Price" name="price" defaultValue={this.props.selectedFruits.price}/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Email" name="email" defaultValue={this.props.selectedFruits.email}/>
              </Form.Group>
              <Button variant="warning" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default FavModalForm;
