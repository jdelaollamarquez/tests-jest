/* Por ejemplo, digamos que varias pruebas interactúan con la base de 
datos de ciudades. Tienes un método initializeCityDatabase() 
que debe ser llamada antes de cada prueba, y un método 
clearCityDatabase() que debe ser llamado luego de cada prueba. 
Puedes hacer esto con: */

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

/* beforeEach y afterEach pueden manejar código asíncrono en el mismo modo 
que las pruebas manejan código asíncrono - ambos pueden tomar done como 
parámetro o devolver una promesa. Por ejemplo, si 
initializeCityDatabase() devuelve una promesa que es resuelta cuando 
la base de datos es inicializada, nos gustaría que devuelva esa promesa: */

beforeEach(() => {
  return initializeCityDatabase();
});
