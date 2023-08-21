import { Component } from "react";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="empty-space"></div>
        <a href="" className="title">
          Movies search app
        </a>
        <a
          href="https://github.com/vickyvk326?tab=repositories"
          className="data-tool-tip-container"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt=""
          />
          <p>vickyvk326</p>
          <span className="data-tool-tip">visit my github repository</span>
        </a>
      </div>
    );
  }
}
