import React, { useState } from "react";
import { connect } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";
import ItemCollapsed from "./MovieListItemCollapsed";
import ItemExpanded from "./MovieListItemExpanded";
import Loader from "../Loader/Loader";

const mapStateToProps = ({ videoModal }) => ({
  isModalOpen: videoModal.isOpen,
});

export const MovieListItem = ({
  isLoading,
  movie,
  isModalOpen,
  collapsedButtons,
  expandedButtons,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  const [isExpanded, setExpanded] = useState(false);

  // Collapsed
  const expandItem = () => setExpanded(true);
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
    // Don't collapse the item due to a child button click
    if (event.target.tagName === "BUTTON") return;
    setExpanded(false);
  };
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

export default connect(mapStateToProps)(MovieListItem);
