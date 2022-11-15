//Puede combinar async y await con resolves o rejects.
//En estos casos, async y await son simplemente una mejora sintáctica para la misma
//lógica usada en los ejemplos de las promesas.
test("el dato es peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test("el fecth falla con un error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
