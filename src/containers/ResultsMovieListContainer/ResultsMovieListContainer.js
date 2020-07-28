// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import MovieListItem from "../../../components/MovieListItem/MovieListItem";
// import { Trash2 as TrashIcon } from "react-feather";
// import { fetchMovie } from "../../../services/movie/actions";
// import { openModal } from "../../../containers/VideoModal/service/actions";
// import { hydrateMovies } from "../../../services/movie/api";
// import { removeMovie } from "../../../services/ballot/actions";
// import Loader from "../../../components/Loader/Loader";
//
// const mapStateToProps = ({ movies, ballot }) => ({
//   movies: hydrateMovies(movies, ballot.movies),
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchMovie: (id) => dispatch(fetchMovie(id)),
//   removeMovie: (id) => dispatch(removeMovie(id)),
//   openModal: (videos) => dispatch(openModal(videos)),
// });
//
// export const ResultsMovieListContainer = ({
//   movies,
//   openModal,
//   removeMovie,
//   fetchMovie,
// }) => {
//   return (
//     <div className="card movie-list">
//       {movies.map((movie) => {
//         const id = movie.info.id;
//         fetchMovie(id);
//         return (
//           <MovieListItem
//             key={id}
//             isLoading={!movie.isSaved}
//             movie={movie.info}
//             collapsedButtons={collapsedButtons(id, removeMovie)}
//             expandedButtons={expandedButtons(
//               id,
//               movie.info.trailers,
//               openModal,
//               removeMovie
//             )}
//           />
//         );
//       })}
//     </div>
//   );
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ResultsMovieListContainer);
//
// const collapsedButtons = (movieId, removeMovie) => [
//   <button
//     className="button button--secondary movie-item__button--small"
//     onClick={(event) => {
//       event.stopPropagation();
//       removeMovie(movieId);
//     }}
//   >
//     <TrashIcon />
//   </button>,
// ];
//
// const expandedButtons = (movieId, videos, openModal, removeMovie) => [
//   videos && videos.length > 0 && (
//     <button
//       className="button"
//       onClick={(event) => {
//         event.stopPropagation();
//         openModal(videos);
//       }}
//     >
//       Watch Trailer
//     </button>
//   ),
//   <button
//     className="button button--secondary"
//     onClick={(event) => {
//       event.stopPropagation();
//       removeMovie(movieId);
//     }}
//   >
//     Remove Movie
//   </button>,
// ];

export const ResultsMovieListContainer = () => {
  return null;
};

export default ResultsMovieListContainer;
