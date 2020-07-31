import DOMPurify from "./DOMPurifySetup";

export const isArrayOfIntegers = (value) => {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((value) => Number.isInteger(value));
};

export const sanitize = (value) => DOMPurify.sanitize(value);

export const convertListToArray = (list) => {
  const array = [];
  for (const key in list) {
    if (list.hasOwnProperty(key)) {
      array.push(list[key]);
    }
  }
  return array;
};

export const convertVotesToResults = (votes) => {
  const results = { users: [], movies: {} };
  Object.entries(votes).forEach(([key, vote]) => {
    results.users.push(vote.user);
    Object.entries(vote.votes).forEach(([yayOrNay, votes]) => {
      votes.forEach((movie) => {
        if (!results.movies[movie]) {
          results.movies[movie] = { yay: 0, nay: 0 };
        }
        results.movies[movie][yayOrNay] = results.movies[movie][yayOrNay] + 1;
      });
    });
  });
  return results;
};
