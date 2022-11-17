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

  test("Exists name", () => {
    expect(users).toContain(`${name} ${surname}`);
    const usersFilteredBySurname = users.filter((u) => u.includes(surname));
    usersFilteredBySurname.forEach((user) =>
      expect(user).toMatch(`${name} ${surname}`)
    );
  });
  test("Get approved note from user", () => {
    const notes = usersWithNotes
      .filter((u) => u.name.includes(`${name} ${surname}`))
      .map((user) => user.value);
    const averageNote = getAverage(notes);
    expect(averageNote).toBeGreaterThan(5);
  });
});
