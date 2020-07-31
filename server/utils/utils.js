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

/*
 * Take in votes in the format:
 * {
 *  "-MD_WTu29l1EosO2mB02" : {
 *    "user" : "Pawel",
 *    "votes" : {
 *      "yay" : [ 10315, 132344 ],
 *      "nay" : [ 793 ]
 *    }
 *  },
 *  "-MD_WaiS5vfA9eo9nj2s" : {
 *    "user" : "Jackie",
 *    "votes" : {
 *      "yay" : [ 132344 ]
 *    }
 *  }
 * }
 * ...and transforms them to the format:
 * "results": {
            "users": [
                "Pawel",
                "Jackie",
            ],
            "movies": {
                "793": {
                    "yay": 0,
                    "nay": 1
                },
                "10315": {
                    "yay": 1,
                    "nay": 0
                },
                "132344": {
                    "yay": 2
                    "nay": 0
                }
            }
        }
 */
export const convertVotesToResults = (votes) => {
  const results = { users: [], movies: {} };
  Object.entries(votes).forEach(([key, uniqueVote]) => {
    results.users.push(uniqueVote.user);
    Object.entries(uniqueVote.votes).forEach(([yayOrNay, movies]) => {
      movies.forEach((movie) => {
        if (!results.movies[movie]) {
          results.movies[movie] = { yay: 0, nay: 0 };
        }
        results.movies[movie][yayOrNay] = results.movies[movie][yayOrNay] + 1;
      });
    });
  });
  return results;
};
