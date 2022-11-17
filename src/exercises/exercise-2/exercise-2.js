const getAverage = (notes) => {
  const average = notes.reduce((curr, acum) => {
    return (acum += curr);
  }, 0);
  return average / notes?.length;
};

module.exports = getAverage;
