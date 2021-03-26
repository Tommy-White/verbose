test("verbose in production env", () => {
  var verbose = require("../../");

  expect(function () {
    verbose(true);
  }).not.toThrow();

  expect(function () {
    verbose(false);
  }).not.toThrow();
});
