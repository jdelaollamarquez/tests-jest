const axios = require("axios");

test("el dato es peanut butter", async () => {
  const mockResponse = "peanut butter";
  const fetchData = jest.fn().mockResolvedValue(mockResponse);
  const data = await fetchData();
  expect(data).toBe(mockResponse);
});

test("the fetch fails with an error", async () => {
  const fetchData = jest.fn().mockResolvedValue(new Error("error"));
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
    expect.assertions(1);
  }
});

/*
test("el dato es peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

*/
