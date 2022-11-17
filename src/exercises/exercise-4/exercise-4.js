// Tenemos que crear una función que cree una promesa que devuelva un objeto
// como el descrito abajo del enunciado

const user = { name: "Blob", surname: "Foo" };

const getUser = () => {
  return new Promise((resolve) => {
    resolve(user);
  });
};

module.exports = { getUser, user };
