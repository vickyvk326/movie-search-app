import { Component } from "react";
import "./movies.scss";
export default class Movies extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movies">
        <div
          className="movies-wrapper"
          style={
            movies?.length <= 2
              ? { display: "flex", flexDirection: "column" }
              : { display: "grid" }
          }
        >
          {movies?.length ? (
            movies?.map((movie) => {
              return (
                <div className="movie-grid" key={movie.imdbID}>
                  <div className="poster-container">
                    <img
                      loading="lazy"
                      src={movie.Poster}
                      onError={(event) => {
                        event.target.src = `https://via.placeholder.com/1200x1230?text=${
                          movie.Title + " movie poster"
                        }`;
                      }}
                    />
                  </div>
                  <div className="card">
                    <p>{movie.Title}</p>
                    <div className="yeargenre">
                      <p>{movie.Year}</p>
                      <p>{movie.Type}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="nothing-found">
              <h1>Oops nothing found.</h1>
              <h3>try searching tamil,avengers,museum.,etc.</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
