// Usar getUser creada anteriormente para comprobar
// que devuelve de forma asíncrona un usuario dado

const { getUser, user } = require("./exercise-4");

test("1- Check getUser returned value", async () => {
  const userRequested = await getUser();
  expect(userRequested).toEqual(user);
});

test("2- Check getUser returned value", () => {
  getUser().then((userRequested) => expect(userRequested).toEqual(user));
});
