/* Si esperas que una promesa sea rechazada usa el matcher rejects. 
Actúa análogamente al marcador .resolves. 
Si se cumple la promesa, el test fallará automáticamente. */

test("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});

/* Ninguna de estas formas es particularmente superior a las demás, 
y se pueden mezclar y combinar a través de una base de código o 
incluso en un solo archivo. Depende del estilo que sientas que 
hace tus tests más sencillos. */
