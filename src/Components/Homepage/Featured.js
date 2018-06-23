import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

class Homepage extends Component {
  render() {
    return (
      <Grid divided="vertical">
        <Grid.Row>
          <Grid.Column>
            <Image
              src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a23246aaf646d6325749091d89a75c76&auto=format&fit=crop&w=500&q=60"
              size="big"
              fluid
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a23246aaf646d6325749091d89a75c76&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://images.unsplash.com/photo-1524135220673-c731600a1a50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a23246aaf646d6325749091d89a75c76&auto=format&fit=crop&w=500&q=60"
              size="small"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Homepage;
