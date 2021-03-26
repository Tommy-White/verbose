var verbose = require("../../");

var browserify = require("browserify");
var envify = require("loose-envify");

test("verbose in development env", () => {
  expect(function () {
    verbose(true);
  }).not.toThrow();
  expect(function () {
    verbose(false);
  }).toThrow();
});

describe("Tests verbose console", () => {
  global.console = {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  };

  it("Should throw an error by default", () => {
    expect(function () {
      verbose(false, "You may have used it wrong.");
    }).toThrow();
  });

  it("Should throw a message", () => {
    verbose(false, {
      level: "warn",
      message: "You may have used it wrong."
    });

    expect(global.console.warn).toHaveBeenCalledWith(
      "You may have used it wrong."
    );
  });

  it("should log a message", () => {
    verbose(false, {
      message: "You may have used it wrong.",
      level: "log"
    });

    expect(global.console.log).toHaveBeenCalledWith(
      "You may have used it wrong."
    );
  });
});
