import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movie";
import OutsideClickHandler from "react-outside-click-handler";
import { Trash2 as TrashIcon } from "react-feather";
import ItemCollapsed from "./MovieListItemCollapsed";
import ItemExpanded from "./MovieListItemExpanded";
import ReactImageFallback from "react-image-fallback";
import MovieImage from "./MovieImage";
import { formatReleaseYear, getImageUrl } from "../theMovieDb/theMovieDb";
import { openModal } from "../actions/videoModal";

const mapStateToProps = ({ videoModal }) => ({
  isModalOpen: videoModal.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id)),
  openModal: (videos) => dispatch(openModal(videos)),
});

export const MovieListItem = ({
  movie,
  removeMovie,
  openModal,
  isModalOpen,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  // Collapsed
  const expandItem = () => setExpanded(true);
  const collapsedButtons = [
    <button
      className="button button--secondary movie-item__button--small"
      onClick={() => removeMovie(movie.id)}
    >
      <TrashIcon />
    </button>,
  ];
  const CollapsedComponent = (
    <ItemCollapsed
      title={movie.title}
      rating={movie.rating}
      releaseDate={movie.release_date}
      genres={movie.genres}
      runtime={movie.runtime}
      voteAverage={movie.vote_average}
      posterPath={movie.poster_path}
      onClick={expandItem}
      buttons={collapsedButtons}
    />
  );

  // Expanded
  const collapseItem = (event) => {
    if (trailerButtonRef?.current?.contains(event.target)) return;
    setExpanded(false);
  };
  const trailerButtonRef = useRef(null);
  const expandedButtons = [
    movie.trailers && movie.trailers.length > 0 && (
      <button
        className="button"
        ref={trailerButtonRef}
        onClick={() => openModal(movie.trailers)}
      >
        Watch Trailer
      </button>
    ),
    <button
      className="button button--secondary"
      onClick={() => removeMovie(movie.id)}
    >
      Remove Movie
    </button>,
  ];
  const ExpandedComponent = (
    <ItemExpanded
      movie={movie}
      onClick={collapseItem}
      buttons={expandedButtons}
    />
  );

  return (
    <OutsideClickHandler onOutsideClick={collapseItem} disabled={isModalOpen}>
      {isExpanded ? ExpandedComponent : CollapsedComponent}
    </OutsideClickHandler>
  );
};

// export class MovieListItem extends React.Component {
//   state = {
//     selected: false,
//   };
//   setSelected = (newState) => this.setState(() => ({ selected: newState }));
//   trailerButtonRef = React.createRef();
//
//   onTrailerButtonClick = () => {
//     this.props.openModal(this.props.movie.trailers);
//   };
//   onRemoveButtonClick = () => {
//     this.props.removeMovie(this.props.movie.id);
//   };
//   onItemClick = (event) => {
//     if (this.trailerButtonRef?.current?.contains(event.target)) return;
//     this.setSelected(!this.state.selected);
//   };
//
//   render() {
//     return (
//       <div
//         className={
//           "list-item " +
//           (this.state.selected
//             ? "list-item--background-image"
//             : "list-item--hover-effect")
//         }
//         onClick={this.onItemClick}
//         style={{
//           backgroundImage:
//             this.state.selected &&
//             `url(${getImageUrl(
//               "backdrop",
//               500,
//               this.props.movie.backdrop_path
//             )})`,
//         }}
//       >
//         {this.state.selected ? (
//           <div className="movie-item">
//             <MovieImage
//               title={this.props.movie.title}
//               type="poster"
//               imageWidth={250}
//               filePath={this.props.movie.poster_path}
//               className="movie-item__poster"
//             />
//             <div className="movie-item__info">
//               <h2 className="movie-item__title">{this.props.movie.title}</h2>
//               <div className="movie-item__meta">
//                 {/*<span>{this.props.movie.rating}</span>*/}
//                 <span>{formatReleaseYear(this.props.movie.release_date)}</span>
//                 <span>
//                   {this.props.movie.genres
//                     .map((genre) => genre.name)
//                     .join(", ")}
//                 </span>
//                 <span>{this.props.movie.runtime} m</span>
//                 <span>{this.props.movie.vote_average}/10</span>
//               </div>
//               <p className="movie-item__tagline">{this.props.movie.tagline}</p>
//               <h3 className="movie-item__overview-heading">Overview</h3>
//               <p className="movie-item__overview">
//                 {this.props.movie.overview}
//               </p>
//               <div className="movie-item__button-group">
//                 {this.props.movie.trailers &&
//                   this.props.movie.trailers.length > 0 && (
//                     <button
//                       className="button"
//                       ref={this.trailerButtonRef}
//                       onClick={this.onTrailerButtonClick}
//                     >
//                       Watch Trailer
//                     </button>
//                   )}
//                 <button
//                   className="button button--secondary"
//                   onClick={this.onRemoveButtonClick}
//                 >
//                   Remove Movie
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className="movie-item">
//             <ReactImageFallback
//               src={`https://image.tmdb.org/t/p/w92${this.props.movie.poster_path}`}
//               fallbackImage="/images/default_poster.png"
//               initialImage="/images/loader.gif"
//               alt={`poster image for ${this.props.movie.title}`}
//               className="movie-item__poster movie-item__poster--small"
//             />
//             <div className="movie-item__info--small">
//               <h3>{this.props.movie.title}</h3>
//               <span>{formatReleaseYear(this.props.movie.release_date)}</span>
//               <p>{this.props.movie.overview}</p>
//             </div>
//             <div className="search-result-item__button">
//               <button
//                 className="button button--secondary"
//                 onClick={this.onRemoveButtonClick}
//               >
//                 -
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
