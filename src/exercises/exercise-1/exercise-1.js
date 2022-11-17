/* Tenemos que crear una función que dada una ciudad cualquiera,
compruebe que pertenece a una comunidad autónoma (lista de ciudades).
Si no se recibe uno de los parámetros, se deberá volver false */

const isInCommunity = (city, community) => {
  return community?.includes(city);
};

module.exports = isInCommunity;
