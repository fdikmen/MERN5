import "./App.css";
import { Routes, Route } from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewMoviePage from "./components/pages/NewMoviePage";
import HomePage from "./components/pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container text>
          Movie Application...
          <hr />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/new" element={<NewMoviePage/>} />
            <Route path="/movies/new/:id" element={<NewMoviePage/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    );
  }
}
