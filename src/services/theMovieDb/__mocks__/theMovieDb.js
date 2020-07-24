import { jest } from "@jest/globals";

const theMovieDb = jest.requireActual("../../theMovieDb/theMovieDb");
import { movies } from "../../../global/tests/fixtures/fixtures";

export const search = (query) => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};

export const getMovieDetails = (id) => {
  return new Promise((resolve) => {
    resolve({
      adult: false,
      backdrop_path: "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
      belongs_to_collection: {
        id: 119,
        name: "The Lord of the Rings Collection",
        poster_path: "/p4UokEk2XnjjRTdXGe6DLYXlbI1.jpg",
        backdrop_path: "/bccR2CGTWVVSZAG0yqmy3DIvhTX.jpg",
      },
      budget: 93000000,
      genres: [
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 14,
          name: "Fantasy",
        },
        {
          id: 28,
          name: "Action",
        },
      ],
      homepage: "http://www.lordoftherings.net/",
      id: 120,
      imdb_id: "tt0120737",
      original_language: "en",
      original_title: "The Lord of the Rings: The Fellowship of the Ring",
      overview:
        "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
      popularity: 48.716,
      poster_path: "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      production_companies: [
        {
          id: 12,
          logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
          name: "New Line Cinema",
          origin_country: "US",
        },
        {
          id: 11,
          logo_path: "/6FAuASQHybRkZUk08p9PzSs9ezM.png",
          name: "WingNut Films",
          origin_country: "NZ",
        },
        {
          id: 5237,
          logo_path: null,
          name: "The Saul Zaentz Company",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "NZ",
          name: "New Zealand",
        },
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2001-12-18",
      revenue: 871368364,
      runtime: 178,
      spoken_languages: [
        {
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline: "One ring to rule them all",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      video: false,
      vote_average: 8.3,
      vote_count: 17172,
    });
  });
};

export const getTrailers = (id) => {
  return new Promise((resolve) => {
    resolve([
      {
        id: "552cd6819251417d35000530",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "V75dMMIW2B4",
        name:
          "The Lord of the Rings: The Fellowship of the Ring Official Trailer #1 - (2001) HD",
        site: "YouTube",
        size: 720,
        type: "Trailer",
      },
      {
        id: "552cd6b0c3a368619000398c",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "aStYWD25fAQ",
        name:
          "The Lord of the Rings: The Fellowship of the Ring Official Trailer #2 - (2001) HD",
        site: "YouTube",
        size: 720,
        type: "Trailer",
      },
      {
        id: "5b95d6870e0a26197302b656",
        iso_639_1: "en",
        iso_3166_1: "US",
        key: "UEXXdpEsmBk",
        name:
          "The Lord of the Rings: The Fellowship of the Ring (2001) Final Trailer",
        site: "YouTube",
        size: 1080,
        type: "Trailer",
      },
    ]);
  });
};

export const getImageUrl = (type, image_width, file_path) => {
  return theMovieDb.getImageUrl(type, image_width, file_path);
};
