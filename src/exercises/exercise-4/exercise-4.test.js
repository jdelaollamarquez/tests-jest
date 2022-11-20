// Usar getUser creada anteriormente para comprobar
// que devuelve de forma asíncrona un usuario dado

const { getUser, user } = require("./exercise-4");

test("Option 1- Check getUser returned value (await)", async () => {
  const userRequested = await getUser("Blob");
  expect(userRequested).toEqual(user);
});

test("Option 2- Check getUser returned value (then)", () => {
  getUser("Blob").then((userRequested) => expect(userRequested).toEqual(user));
});

test("Not to find user", async () => {
  await expect(getUser("Tony")).rejects.toMatch(
    "No se ha encontrado ese usuario"
  );
});
