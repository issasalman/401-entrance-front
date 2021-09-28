import React from "react";
import { Card, Button, Row } from "react-bootstrap/";

class FavFruit extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.addedFruits.map((item) => {
            return (
              <Card style={{ width: "18rem",margin:"100px"  }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>Fruits</Card.Title>
                  <Card.Text>The name is {item.name}</Card.Text>
                  <Card.Text>the price is {item.price}</Card.Text>
                </Card.Body>
                <Button
                  variant="danger"
                  onClick={() =>
                    this.props.delFav(item._id)
                  }
                >
                 Delete
                </Button>
                <Button
                  variant="warning"
                  onClick={() =>
                    this.props.handleDisUpModal(item)
                  }
                >
                 Update
                </Button>
              </Card>
            );
          })}
        </Row>
      </>
    );
  }
}

export default FavFruit;
