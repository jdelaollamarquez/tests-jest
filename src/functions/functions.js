const axios = require("axios");

const responseMock = { type: "X", isValid: true };

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

function requestSomething() {
  return axios.get("/ABC/XYZ").then((resp) => responseMock);
}

module.exports = { responseMock, forEach, requestSomething };
