import { expect } from "@jest/globals";
import { getImageUrl } from "../../theMovieDb/theMovieDb";

test("should round up image size", () => {
  // poster_sizes: [92, 154, 185, 342, 500, 780]
  const filePath = "/test.jpg";
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageUrl = getImageUrl("poster", 190, filePath);
  expect(imageUrl).toEqual(`${baseUrl}w342${filePath}`);
});

test("should return given image size if valid", () => {
  // poster_sizes: [92, 154, 185, 342, 500, 780]
  const filePath = "/test.jpg";
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageUrl = getImageUrl("poster", 500, filePath);
  expect(imageUrl).toEqual(`${baseUrl}w500${filePath}`);
});

test("should return original size if requested size is too large", () => {
  // poster_sizes: [92, 154, 185, 342, 500, 780]
  const filePath = "/test.jpg";
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageUrl = getImageUrl("poster", 800, filePath);
  expect(imageUrl).toEqual(`${baseUrl}original${filePath}`);
});

test("should return original size for unknown image type", () => {
  const filePath = "/test.jpg";
  const baseUrl = "https://image.tmdb.org/t/p/";
  const imageUrl = getImageUrl("unknownImageType", 190, filePath);
  expect(imageUrl).toEqual(`${baseUrl}original${filePath}`);
});
