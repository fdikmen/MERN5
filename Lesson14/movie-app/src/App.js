import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import React, { Component } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
};

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
};

export default class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image size="mini" src="/logo.png" />
              </Menu.Item>
              <Menu.Item header>Project Name</Menu.Item>
              <Menu.Item as="a">Blog</Menu.Item>
              <Menu.Item as="a">Articles</Menu.Item>

              <Menu.Menu position="right">
                <Dropdown text="Dropdown" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className="dropdown icon" />
                      <span className="text">Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          App Comp....
          <hr />
          <Link to="/">HomePage</Link> <Link to="movies">Movies</Link>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Container>

        <Segment
          inverted
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
          vertical
        >
          <Container textAlign="center">
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 1" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 2" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 3" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src="/logo.png" centered size="mini" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}
