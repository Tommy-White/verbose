var verbose = require('../../');

var browserify = require('browserify');
var envify = require('loose-envify');

test('verbose in development env', () => {
  expect(function() {
    verbose(true);
  }).toThrow();

  expect(function() {
    verbose(false);
  }).toThrow();
});

describe('Tests verbose console', () => {
  global.console = {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn(),
  };

  it('should warning a message', () => {
    verbose(false, 'You may have used it wrong.');

    expect(global.console.warn).toHaveBeenCalledWith('You may have used it wrong.');
  });

  it('should log a message', () => {
    verbose(false, {
      format: 'You may have used it wrong.',
      level: 'log',
    });

    expect(global.console.log).toHaveBeenCalledWith('You may have used it wrong.');
  });
});
