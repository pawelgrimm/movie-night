const determineWinner = (movies) => {
  const scores = addUpScores(movies);
  const winners = findHighestScoring(scores);

  if (winners.length === 1) {
    return winners[0];
  }

  const randomNum = Math.floor(Math.random() * winners.length);
  return winners[randomNum];
};

const addUpScores = (movies) => {
  const scores = {};
  for (const movie in movies) {
    if (!movies.hasOwnProperty(movie)) {
      continue;
    }
    scores[movie] = movies[movie].yay - movies[movie].nay;
  }
  return scores;
};

const findHighestScoring = (scores) => {
  let winners = [];
  let highScore = 0;
  for (const movie in scores) {
    if (!scores.hasOwnProperty(movie)) {
      continue;
    }
    const score = scores[movie];
    if (score > highScore) {
      highScore = score;
      winners = [movie];
    } else if (score === highScore) {
      winners.push(movie);
    }
  }
  return winners;
};

export default determineWinner;
