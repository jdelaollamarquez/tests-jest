/* let's say that fetchData returns a promise 
that is supposed to resolve to the string 
'peanut butter'. Podríamos testearlo con: */

test("el dato es peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
