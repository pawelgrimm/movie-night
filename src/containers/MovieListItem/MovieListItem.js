import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { fetchMovie as fetchMovieAction } from "../../services/movie/actions";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../Modal/ModalContext";
import ExpandedItem from "./components/MovieListItemExpanded";
import CollapsedItem from "./components/MovieListItemCollapsed";

const useMovie = (id, setMovie) => {
  const dispatch = useDispatch();
  const fetchMovie = useCallback(
    (id) => {
      dispatch(fetchMovieAction(id));
    },
    [dispatch, id]
  );
  useEffect(() => {
    fetchMovie(id);
  }, []);

  const movieObject = useSelector(({ movies }) => movies[id]);

  useEffect(() => {
    setMovie(movieObject);
  }, [movieObject]);
};

const useExpandable = () => {
  const [isExpanded, setExpanded] = useState(false);
  return {
    isExpanded,
    setExpanded: () => setExpanded(true),
    setCollapsed: () => setExpanded(false),
  };
};

const MovieListItem = ({
  id,
  renderExpandedItems = () => {},
  renderCollapsedItems = () => {},
}) => {
  const { isExpanded, setExpanded, setCollapsed } = useExpandable();
  const [movie, setMovie] = useState(undefined);
  const { isOpen: isModalOpen } = useModal();

  useMovie(id, setMovie);

  return useMemo(
    () => (
      <li className="movie-list__item">
        {!movie ? (
          <Loader />
        ) : (
          <OutsideClickHandler
            onOutsideClick={setCollapsed}
            disabled={isModalOpen}
          >
            {isExpanded ? (
              <ExpandedItem
                id={id}
                movie={movie.info}
                renderAdditionalItems={renderExpandedItems}
                onClick={setCollapsed}
              />
            ) : (
              <CollapsedItem
                id={id}
                movie={movie.info}
                renderAdditionalItems={renderCollapsedItems}
                onClick={setExpanded}
              />
            )}
          </OutsideClickHandler>
        )}
      </li>
    ),
    [movie, isExpanded, isModalOpen]
  );
};

export default MovieListItem;
