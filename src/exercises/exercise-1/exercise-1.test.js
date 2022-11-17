// 1º - Tenemos que comprobar si Valencia pertenece a Andalucía
// 2º - Tenemos que comprobar si Granada pertenece a Andalucía

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

test("Check Valencia is in Andalucia", () => {
  const cityToCheck = "Valencia";

  expect(() => isInCommunity(cityToCheck, andaluciaCities)).toThrow(Error);
  expect(() => isInCommunity(cityToCheck, andaluciaCities)).toThrow(
    "City are not in the community"
  );
});

test("Check Granada is in Andalucia", () => {
  const cityToCheck = "Granada";

  expect(isInCommunity(cityToCheck, andaluciaCities)).toBeTruthy();
});

test("Check there are no cities", () => {
  const cityToCheck = "Granada";

  expect(() => isInCommunity(cityToCheck)).toThrow(Error);
  expect(() => isInCommunity(cityToCheck)).toThrow(
    "City are not in the community"
  );
});

test("Check there is no city to check", () => {
  expect(() => isInCommunity(undefined, andaluciaCities)).toThrow(Error);
  expect(() => isInCommunity(undefined, andaluciaCities)).toThrow(
    "City are not in the community"
  );
});
