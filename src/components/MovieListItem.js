import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { removeMovie } from "../actions/movie";
import OutsideClickHandler from "react-outside-click-handler";
import { Trash2 as TrashIcon } from "react-feather";
import ItemCollapsed from "./MovieListItemCollapsed";
import ItemExpanded from "./MovieListItemExpanded";
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem);
