const getAverage = (notes) => {
  const average = notes.reduce((acum, curr) => acum + curr, 0);
  return average / notes?.length;
};

module.exports = getAverage;
