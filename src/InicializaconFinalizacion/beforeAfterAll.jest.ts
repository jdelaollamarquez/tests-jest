/* For example, if both initializeCityDatabase() and clearCityDatabase()
 returned promises, and the city database could be reused between 
 tests, we could change our test code to: */

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
