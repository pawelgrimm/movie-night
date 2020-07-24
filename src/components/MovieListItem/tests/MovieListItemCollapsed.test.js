import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import { movies } from "../../../global/tests/fixtures/fixtures";
import MovieListItemCollapsed from "../MovieListItemCollapsed";
import { Trash2 as TrashIcon } from "react-feather";

test("should render MovieListItemCollapsed correctly with no buttons", () => {
  const movie = movies[2];
  const wrapper = shallow(
    <MovieListItemCollapsed
      title={movie.title}
      rating={movie.rating}
      releaseDate={movie.release_date}
      genres={movie.genres}
      runtime={movie.runtime}
      voteAverage={movie.vote_average}
      posterPath={movie.poster_path}
      onClick={() => {}}
      buttons={undefined}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render MovieListItemCollapsed correctly with buttons", () => {
  const movie = movies[2];
  const buttons = [<button />, <button />];

  const wrapper = shallow(
    <MovieListItemCollapsed
      title={movie.title}
      rating={movie.rating}
      releaseDate={movie.release_date}
      genres={movie.genres}
      runtime={movie.runtime}
      voteAverage={movie.vote_average}
      posterPath={movie.poster_path}
      onClick={() => {}}
      buttons={buttons}
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find("button")).toHaveLength(buttons.length);
});
