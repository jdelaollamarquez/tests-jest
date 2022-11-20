// 1º - Tenemos que comprobar si Valencia pertenece a Andalucía
// 2º - Tenemos que comprobar si Granada pertenece a Andalucía
//

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
  const cityToCheck = "Valencia"; // No está en la lista -> ERROR

  expect(() => isInCommunity(cityToCheck, andaluciaCities)).toThrow(Error);
  expect(() => isInCommunity(cityToCheck, andaluciaCities)).toThrow(
    "City are not in the community"
  );
});

test("Check Granada is in Andalucia", () => {
  const cityToCheck = "Granada"; // Está en la lista

  expect(isInCommunity(cityToCheck, andaluciaCities)).toBeTruthy();
});

test("Check there is no community param", () => {
  const cityToCheck = "Granada";

  expect(() => isInCommunity(cityToCheck)).toThrow(Error);
  expect(() => isInCommunity(cityToCheck)).toThrow(
    "City are not in the community"
  );
});

test("Check there is no city param", () => {
  expect(() => isInCommunity(andaluciaCities)).toThrow(Error);
  expect(() => isInCommunity(andaluciaCities)).toThrow(
    "City are not in the community"
  );
});
