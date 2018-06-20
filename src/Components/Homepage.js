import React, { Component } from "react";
import { Segment, Grid, Image } from "semantic-ui-react";

class Homepage extends Component {
  render() {
    return (
      <Segment.Group horizontal>
        <Segment>Hello from segment</Segment>
        <Segment>
          <Grid.Row>
            <Image
              src="https://images.unsplash.com/photo-1492374448689-f2b527f2a23b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4c7a040d5f56c356199d7823debf0c57&auto=format&fit=crop&w=500&q=60"
              size="small"
              fluid
            />
          </Grid.Row>
          <Grid.Row>
            <Image
              src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a23246aaf646d6325749091d89a75c76&auto=format&fit=crop&w=500&q=60"
              size="small"
              fluid
            />
          </Grid.Row>
        </Segment>
      </Segment.Group>
    );
  }
}

export default Homepage;
