import { expect } from "@jest/globals";
import { shallow } from "enzyme";
import React from "react";
import MovieImage from "../../components/MovieImage";
import { movies } from "../fixtures/fixtures";

test("should render poster image correctly", () => {
  const movie = movies[2];
  const wrapper = shallow(
    <MovieImage
      title={movie.title}
      filePath={movie.poster_path}
      imageWidth={300}
      type="poster"
    />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should pass down className correctly", () => {
  const movie = movies[1];
  const wrapper = shallow(
    <MovieImage
      title={movie.title}
      filePath={movie.backdrop_path}
      imageWidth={500}
      type="backdrop"
      className="made-up-class__image"
    />
  );
  expect(wrapper).toMatchSnapshot();
});
