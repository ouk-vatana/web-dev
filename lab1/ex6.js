const vote= (...votesArray) => {
  const tally = {};
  for (let i = 0; i < votesArray.length; i++) {
    const vote = votesArray[i];
    tally[vote] = (tally[vote] || 0) + 1;
  }
  return tally;
};

console.log(vote('a','b','c','c')); 
