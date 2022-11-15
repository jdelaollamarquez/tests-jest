test("el dato es peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

/* Asegúrate de devolver la aserción—si omites este return su 
test se completará antes de que la promesa devuelta de fetchData 
sea resuelta y then() ejecutará el callback. */
