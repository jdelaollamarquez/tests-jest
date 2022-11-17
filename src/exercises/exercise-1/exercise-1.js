// Tenemos que crear una función que compruebe que dada una ciudad cualquiera,
// compruebe que pertenece una comunidad autónoma (lista de ciudades)
// Si no se recibe uno de los parámetros, se deberá volver false

const isInCommunity = (city, community) => {
  const isInCluded = community?.includes(city);
  if (isInCluded) {
    return isInCluded;
  }
  throw new Error("City are not in the community");
};

module.exports = isInCommunity;
