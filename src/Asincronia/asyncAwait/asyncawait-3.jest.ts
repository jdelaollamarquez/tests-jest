/* Si esperas que una promesa se rechazada, usa el método catch. 
Asegúrate de añadir expect.assertions para verificar que un cierto 
número de afirmaciones están siendo llamadas. 
De lo contrario, una promesa cumplida no hará que el test falle. */
test("el fetch falla con un error", () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("error"));
});
