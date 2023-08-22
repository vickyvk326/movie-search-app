import { Component } from "react";
import Row from "./components/Row";
import Movies from "./components/Movies";
import Loader from "./components/Loader";

export default class Main extends Component {
  state = {
    loading: true,
    movies: [],
  };
  handleToggleLoading = (bool) => {
    this.setState({ loading: bool });
  };
  handleSetMovies = (movies) => {
    this.setState({ movies: movies });
    this.handleToggleLoading(false);
  };
  render() {
    const handleSetMovies = this.handleSetMovies;
    return (
      <div className="main">
        <Row
          handleSetMovies={handleSetMovies}
          handleToggleLoading={this.handleToggleLoading}
        />
        {this.state.loading ? (
          <Loader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
