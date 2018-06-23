import React, { Component } from "react";
import { Input, Menu, Image } from "semantic-ui-react";

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary pointing stackable color="purple" size="big">
        {/*add stackable for responsive*/}
        <Menu.Item name="logo" onClick={this.handleItemClick}>
          <Image
            size="mini"
            src="https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af3fb5171edc0c520c99c8061510f4b8&auto=format&fit=crop&w=531&q=80"
          />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Shop"
          active={activeItem === "Shop"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Looking for something..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
