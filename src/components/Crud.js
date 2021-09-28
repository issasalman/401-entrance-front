import React, { Component } from "react";
import axios from "axios";
import FavFruit from "./FavFruit";
import FavModalForm from "./FavModalForm";
import { withAuth0 } from "@auth0/auth0-react";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFruits: [],
      showModal: false,
      selectedFruits: {},
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER}/fruiting?email=${this.props.auth0.user.email}`)
      .then((result) => {
        this.setState({
          addedFruits: result.data,
        });
      });
  };

  delFav = async (_id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER}/fruiting/${_id}`)
      .then((deleteData) => {
        if (deleteData) {
          const newFruit = this.state.addedFruits.filter(
            (fruit) => fruit._id !== _id
          );
          this.setState({
            addedFruits: newFruit,
          });
        }
      });
    alert("Fruit Deleted")

  };

  handleUpModal = async (e) => {
    e.preventDefault();
    const body = {
      name:e.target.name.value,
      photo: e.target.photo.value,
      price: e.target.price.value,
    };
    await axios
      .put(
        `${process.env.REACT_APP_SERVER}/fruiting/${this.state.selectedFruits._id}`,body
      )
      .then((updateData) => {
        const newFruit = this.state.addedFruits.map((fruit) => {
          if (fruit._id === this.state.selectedFruits._id) {
            fruit = updateData.data;
            return fruit;
          }
          return fruit;
        });

        this.setState({
          addedFruits: newFruit,
        });
      });
    this.handleDisUpModal(this.state.selectedFruits);
    alert("Fruit updated")

  };

  handleDisUpModal = (fruit) => {
    this.setState({
      showModal: !this.state.showModal,
      selectedFruits: fruit,
    });
  };

  render() {
    return (
      <>
        <FavFruit
          addedFruits={this.state.addedFruits}
          handleDisUpModal={this.handleDisUpModal}
          delFav={this.delFav}
        />
        <FavModalForm
          handleDisUpModal={this.handleDisUpModal}
          showModal={this.state.showModal}
          handleUpModal={this.handleUpModal}
          selectedFruits={this.state.selectedFruits}
        />
      </>
    );
  }
}

export default withAuth0(Crud);
