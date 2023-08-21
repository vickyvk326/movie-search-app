import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="footer-wrapper">
          <div className="copyright">
            <span>
              <span>©</span> 2023. Vignesh ravichandran
            </span>
          </div>
          <div className="repo">
            <a
              href="https://github.com/vickyvk326?tab=repositories"
              className="data-tool-tip-container"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
              <p>vickyvk326</p>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
