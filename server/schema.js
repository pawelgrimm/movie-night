const DOMPurify = require("./DOMPurifySetup");
const { ballotIdExists } = require("./firebase/api");

const isArrayOfIntegers = (value) => {
  if (!Array.isArray(value)) {
    return false;
  }
  return value.every((value) => Number.isInteger(value));
};

const sanitize = (value) => DOMPurify.sanitize(value);

// movies: getState().ballot.movies,
//   owner: "testId" /* getState().auth.uid */,
//   isVotingOver: false

const ballotSchema = {
  movies: {
    in: "body",
    isEmpty: false,
    custom: {
      options: isArrayOfIntegers,
    },
  },
  owner: {
    in: "body",
    isEmpty: false,
    custom: {
      options: (value) => typeof value === "string",
    },
    customSanitizer: {
      options: sanitize,
    },
  },
};

const voteSchema = {
  user: {
    in: "body",
    trim: true,
    isEmpty: false,
    customSanitizer: {
      options: sanitize,
    },
    custom: {
      // runs after the sanitizer
      options: (value) => value.length > 0,
    },
  },
  "votes.yay": {
    in: "body",
    custom: {
      options: isArrayOfIntegers,
    },
  },
  "votes.nay": {
    in: "body",
    custom: {
      options: isArrayOfIntegers,
    },
  },
};

module.exports = { ballotSchema, voteSchema };
