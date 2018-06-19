import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class Homepage extends Component {
  render() {
    return (
      <Segment.Group horizontal>
        <Segment>Hello from segment</Segment>
        <Segment>Hello from segment</Segment>
      </Segment.Group>
    );
  }
}

export default Homepage;
