import { isArrayOfIntegers, sanitize } from "../utils/utils";

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

export default ballotSchema;
