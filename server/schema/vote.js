import { isArrayOfIntegers, sanitize } from "../utils/utils";

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

export default voteSchema;
