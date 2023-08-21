import { Component } from "react";
import "./app.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
