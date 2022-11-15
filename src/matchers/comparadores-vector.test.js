const listaDeCompras = [
  "pañales",
  "pañuelos",
  "bolsas de basura",
  "toallas de papel",
  "leche"
];

test("la leche se encuentra en la lista de compras", () => {
  expect(listaDeCompras).toContain("leche");
  expect(new Set(listaDeCompras)).toContain("leche");
});
