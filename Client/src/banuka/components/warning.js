import React, { Component } from "react";
import { MDBContainer, MDBAlert } from "mdbreact";

export default class ShowItemWarning extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBAlert color="danger">
          Please select an<strong> Item</strong> to add.
        </MDBAlert>
      </MDBContainer>
    );
  }
}
