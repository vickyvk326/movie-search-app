import { Component } from "react";
import Row from "./components/Row";
import Movies from "./components/Movies";

export default class Main extends Component {
  state = {
    loading: true,
    movies: [],
  };
  handleToggleLoaded = () => {
    this.setState({ loaded: !this.state.loaded });
  };
  handleSetMovies = (movies) => {
    this.setState({ movies: movies, loading: false });
  };
  render() {
    const handleSetMovies = this.handleSetMovies;
    return (
      <div className="main">
        <Row handleSetMovies={handleSetMovies} />
        {this.state.loading ? (
          <h1>Loading</h1>
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </div>
    );
  }
}
