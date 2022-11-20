const getAverage = (notes) => {
  //acum -> acumulador
  //curr -> valor actual
  // 0 -> valor inicial
  
  //En el acumulador va sumando el valor actual(las distintas puntuaciones en los exámenes)
  //Por último se devuelve esa suma de puntuaciones / el numero de puntuaciones
  const average = notes.reduce((acum, curr) => acum + curr, 0);
  return average / notes?.length;
};

module.exports = getAverage;
