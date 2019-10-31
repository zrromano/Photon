import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
