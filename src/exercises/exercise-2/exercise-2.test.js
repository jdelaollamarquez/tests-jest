/*
1- Dada una persona se presenta a un examen de oposiciones pero por error, 
no recibe su nota final. Comprueba en una lista de nombres y apellidos 
de personas examinadas si se encuentra el suyo
2- Dada una persona se presenta a un examen de oposiciones y hay que comprobar
que aprueba con su media de notas
*/

const getAverage = require("./exercise-2");
const name = "Miguel";
const surname = "Llano Benitez";

let users = [];
let usersWithNotes = [];

describe("People tests", () => {
  beforeEach(async () => {
    const getUsers = jest
      .fn()
      .mockImplementation(() => [
        "Ana Gonzalez Rodriguez",
        "Jose Casado Marquez",
        "Maria Perez Labrea",
        "Miguel Llano Benitez",
        "Ana Gonzalez Rodriguez",
        "Jose Casado Marquez",
        "Maria Perez Labrea",
        "Miguel Llano Benitez",
      ]);
    users = await getUsers();
    const getUsersWithNotes = jest.fn().mockImplementation(() => [
      { name: "Ana Gonzalez Rodriguez", value: 6 },
      { name: "Jose Casado Marquez", value: 3 },
      { name: "Maria Perez Labrea", value: 8 },
      { name: "Miguel Llano Benitez", value: 2 },
      { name: "Ana Gonzalez Rodriguez", value: 7 },
      { name: "Jose Casado Marquez", value: 3 },
      { name: "Maria Perez Labrea", value: 1 },
      { name: "Miguel Llano Benitez", value: 9 },
    ]);
    usersWithNotes = await getUsersWithNotes();
  });

  test("User name exists in exam users list", () => {
    //OPCION 1: comprobamos si la lista de usuarios creada con mockImplementation contiene a Miguel Llano Benitez
    expect(users).toContain(`${name} ${surname}`);

    //OPCIONM2: Filtramos la lista de usuarios por los apellidos Llano Benitez
    const usersFilteredBySurname = users.filter((u) => u.includes(surname));
    // De esa lista, esperamos que alguno coincida con Miguel Llano Benitez
    usersFilteredBySurname.forEach((user) =>
      expect(user).toMatch(`${name} ${surname}`)
    );
  });
  test("Did the user pass the exam?", () => {
    //Obtenemos los value (nota) de los elementos del listado de notas por alumno cuyo alumno coincida con Miguel.
    const notes = usersWithNotes
      .filter((u) => u.name.includes(`${name} ${surname}`))
      .map((user) => user.value);
    const averageNote = getAverage(notes);
    // Comprobamos si la nota media de todas las obtenidas en un aprobado
    expect(averageNote).toBeGreaterThan(5);
  });
});
