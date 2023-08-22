import axios from "axios";
import { Component } from "react";

export default class Row extends Component {
  state = {
    text: "",
    category: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSearch = (keyWord, type) => {
    this.props.handleToggleLoading(true);
    axios
      .get(
        `https://www.omdbapi.com/?apikey=ee2f169&s=${keyWord}${
          type && `&type=${type}`
        }`
      )
      .then((res) => {
        this.props.handleSetMovies(res.data.Search);
      });
  };
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleSearch(this.state.text, this.state.category);
    }
  };
  componentDidMount() {
    axios
      .get(`https://www.omdbapi.com/?apikey=ee2f169&s=chennai`)
      .then((res) => {
        this.props.handleSetMovies(res.data.Search);
      });
  }

  render() {
    const handleChange = this.handleChange;
    const handleSearch = this.handleSearch;
    const handleKeyDown = this.handleKeyDown;
    return (
      <div className="row">
        <div className="search-field">
          <input
            type="search"
            placeholder="Search..."
            name="text"
            value={this.state.text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn search-btn"
            onClick={() => {
              this.props.handleToggleLoading(true);
              handleSearch(this.state.text, this.state.category);
            }}
          >
            search
          </button>
        </div>
        <div className="category-field">
          <label htmlFor="all">
            <input
              type="radio"
              name="category"
              id="all"
              value=""
              onChange={handleChange}
              defaultChecked
            />
            All
          </label>
          <label htmlFor="movies">
            <input
              type="radio"
              name="category"
              id="movies"
              value="movie"
              onChange={handleChange}
            />
            Movies only
          </label>
          <label htmlFor="series">
            <input
              type="radio"
              name="category"
              id="series"
              value={"series"}
              onChange={handleChange}
            />
            Series only
          </label>
        </div>
      </div>
    );
  }
}
