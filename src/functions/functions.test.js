const { responseMock, forEach, requestSomething } = require("./functions");
const axios = require("axios");

jest.mock("axios");

describe("Functions tests", () => {
  test("forEach mock tests", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback).toHaveBeenCalledTimes(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback).toHaveBeenCalledWith(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback).toHaveBeenLastCalledWith(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

    // The return value of the second call to the function was 43
    expect(mockCallback.mock.results[1].value).toBe(43);
  });

  test("Mock return values tests", () => {
    const myMock = jest.fn();
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce("x")
      .mockReturnValue(true);

    expect(myMock()).toBe(10);
    expect(myMock()).toBe("x");
    expect(myMock()).toBe(true);
  });

  test("Mock request", () => {
    axios.get.mockResolvedValue(responseMock);
    requestSomething().then((data) => expect(data).toEqual(responseMock));
  });
});
