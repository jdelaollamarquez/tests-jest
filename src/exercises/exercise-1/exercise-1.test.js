// 1º - Tenemos que comprobar si Valencia pertenece a Andalucía
// y que dicha ciudad tiene más caracteres que 'Malaga'
// 2º - Tenemos que comprobar si Granada pertenece a Andalucía
// y que dicha ciudad tiene más caracteres que 'Malaga'

const isInCommunity = require("./exercise-1");

const andaluciaCities = [
  "Sevilla",
  "Huelva",
  "Cádiz",
  "Córdoba",
  "Málaga",
  "Granada",
  "Almería",
  "Jaén",
];
const charactersCity = "Malaga";

test("Check Valencia is in Andalucia", () => {
  const cityToCheck = "Valencia";

  expect(isInCommunity(cityToCheck, andaluciaCities)).toBeFalsy();
  expect(cityToCheck.length).toBeGreaterThan(charactersCity.length);
});

test("Check Granada is in Andalucia", () => {
  const cityToCheck = "Granada";

  expect(isInCommunity(cityToCheck, andaluciaCities)).toBeTruthy();
  expect(cityToCheck.length).toBeGreaterThan(charactersCity.length);
});

test("Check there are no cities", () => {
  const cityToCheck = "Granada";

  expect(isInCommunity(cityToCheck)).toBeFalsy();
  expect(cityToCheck.length).toBeGreaterThan(charactersCity.length);
});

test("Check there is no city to check", () => {
  expect(isInCommunity(undefined, andaluciaCities)).toBeFalsy();
});
