/*Hay una forma alternativa de test que soluciona esto. 
En lugar de poner el test en una función con un argumento vacío, 
utilice un solo argumento llamado done. Jest esperará hasta que se 
llame el callback done antes de terminar la prueba.
 */
test("the data is peanut butter", (done) => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

/* Si no se llama la función done(), la prueba fallará 
(por tiempo de espera excedido), que es lo que quieres que ocurra.

Si la sentencia expect falla, lanza un error y done() no es llamada. 
Si queremos ver en el registro de pruebas por qué falló, tenemos que 
envolver el expect en un bloque try y pasar el error en el bloque catch a 
done. De lo contrario, terminamos con un error de tiempo de espera no 
explicativo que no muestra qué valor fue recibido por expect(data). */
