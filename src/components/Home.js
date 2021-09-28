import React from "react";
import axios from "axios";
import Fruits from "./Fruits";
import { withAuth0 } from "@auth0/auth0-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [],
     
    };
  }

  componentDidMount = async () => {
    await axios.get(`${process.env.REACT_APP_SERVER}/fruit`).then((result) => {
      this.setState({
        fruit: result.data,
      });
      console.log(result.data);
    });
  };
  addFav = async (name, image, price) => {
    const body = {
      name: name,
      image: image,
      price: price,
      email:this.props.auth0.user.email
    };
    await axios.post(`${process.env.REACT_APP_SERVER}/fruiting`, body);
    alert("Fruit Added to Favorite")
  };


  render() {
    return (
      <>
        <Fruits fruit={this.state.fruit} addFav={this.addFav}/>
      </>
    );
  }
}

export default withAuth0(Home);
