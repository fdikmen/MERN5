import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Image, Menu } from "semantic-ui-react";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelpers";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };
  render() {
    const { menuFixed } = this.state;
    return (
      <Menu
        borderless
        fixed={menuFixed ? "top" : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}
      >
        <Container text>
          <Menu.Item>
            <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
          </Menu.Item>
          <Menu.Item header>MovieApp</Menu.Item>
          <Menu.Item as={Link} to="/">
            HomePage
          </Menu.Item>
          <Menu.Item as={Link} to="movies">
            Movies
          </Menu.Item>
          <Menu.Item as={Link} to="movies/new">
            Add New
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}
