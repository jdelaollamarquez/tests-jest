/* For example, let's say that fetchData, instead of returning 
a promise, expects a callback, i.e. fetches some data and calls 
callback(null, data) when it is complete. Quieres comprobar que
 devuelve 'peanut butter'. */

// ¡No hagas esto!

/* El problema es que el test terminará tan pronto como fetchData 
finalize, antes de llamar a la función callback.*/

test("the data is peanut butter", () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe("peanut butter");
  }

  fetchData(callback);
});
