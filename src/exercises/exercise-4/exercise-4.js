// Tenemos que crear una función que cree una promesa que devuelva un objeto
// como el descrito abajo del enunciado

const user = { name: "Blob", surname: "Foo" };

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    if (name === user.name) {
      resolve(user);
    }
    reject("No se ha encontrado ese usuario");
  });
};

module.exports = { getUser, user };
