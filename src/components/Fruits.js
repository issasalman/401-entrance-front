import React from "react";
import { Card, Button ,Row} from "react-bootstrap/";
class Fruits extends React.Component {
  render() {
    return (
      <>
      <Row>
        {this.props.fruit.map((item) => {
          return (
            <Card style={{ width: "18rem" ,margin:"100px" }}>
              <Card.Img variant="top" src={item.image} style={{ height:"300px"}}/>
              <Card.Body>
                <Card.Title>Fruits</Card.Title>
                <Card.Text>The name is {item.name}</Card.Text>
                <Card.Text>the price is {item.price}</Card.Text>
               
              </Card.Body>
              <Button variant="primary" onClick={()=>this.props.addFav(item.name,item.image,item.price)}>Add to Favorite</Button>
            </Card>
          );
        })}
        </Row>
      </>
    );
  }
}

export default Fruits;
