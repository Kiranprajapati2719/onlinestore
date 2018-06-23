import React from "react";
import { Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <Segment>
    <h1>404</h1>
    <h3>Error Not Found</h3>
    <Link to="/">Take me home</Link>
  </Segment>
);

export default NotFound;
