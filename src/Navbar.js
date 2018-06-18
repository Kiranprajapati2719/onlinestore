import React, { Component } from "react";
import { Input, Menu, Image } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu primary>
        {/*add stackable for responsive*/}
        <Menu.Item name="logo" onClick={this.handleItemClick}>
          <Image
            size="mini"
            fluid /* src="https://cdn.pixabay.com/photo/2016/08/06/14/11/lion-1574448_960_720.png" */
            src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png"
          />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Shop"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
