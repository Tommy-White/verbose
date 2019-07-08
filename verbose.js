/**
 *
 * Same as invariant but use console instead of Error.
 *
 * Use verbose() to report practical info which your program assumed.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The verbose will not use in production mode.
 */

/* eslint-disable */
var __PROD__ = process.env.NODE_ENV === 'production';

var verbose = function(condition, config) {
  if (__PROD__) return;

  var format, level, prefix;

  if (config === undefined) {
    throw new Error('verbose requires an error message argument');
  }
  if (typeof config === 'string') {
    format = config;
  } else {
    format = config.format;
    level = config.level;
    prefix = config.prefix;
  }

  if (!condition) {
    var rest = Array.prototype.slice.call(arguments, 2);

    var index = 0,
      info;
    var formatted = format.replace(/%s/g, function() {
      return rest[index++];
    });
    info = prefix ? `${prefix} ${formatted}` : formatted;

    // minify consoloe scope
    switch (level) {
      case 'error':
      case 'warn':
      case 'log': {
        console[level](info);
        break;
      }
      default: {
        console.warn(info);
      }
    }
  }
};

module.exports = verbose;
