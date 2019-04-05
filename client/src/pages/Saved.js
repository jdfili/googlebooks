import React, { Component } from "react";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Results from "../components/Results-container";
import API from "../utils/API";

class Saved extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Jumbotron />
          <Results />
        </Container>

      </div>
    )
  }
}

export default Saved;
