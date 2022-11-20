// Mockear una función que la primera vez que se llame, devuelva un usuario dado
// La segunda vez que se llame debe devolver actualizado ese usuario a admin: (type = 'admin')

const user = { name: "Blob", surname: "Foo", type: "user" };

test("Mock functions", async () => {
  const getUser = jest
    .fn()
    .mockImplementationOnce(() => user)
    .mockImplementationOnce((value) => ({ ...user, type: value }));

    //Actualizará el objeto user con el type pasado por parámetro
  let userRequested = await getUser();
  expect(userRequested.type).toStrictEqual("user");
  userRequested = await getUser("admin");
  expect(userRequested.type).toStrictEqual("admin");
});
