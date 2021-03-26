/**
 *
 * Same as invariant but also can use printf.
 *
 * Use verbose() to report practical info which your program assumed.
 *
 * The `verbose` provide a printf-style(only %s is supported) liked API
 * to throw or log a message.
 *
 * The verbose will not use in production mode.
 */

const __PROD__ = process.env.NODE_ENV === "production";

const format = (msgTemp, iterable) => {
  const iterator = iterable[Symbol.iterator]();

  return msgTemp.replace(/%s/g, () => iterator.next().value);
};

function verbose(condition, config) {
  if (__PROD__ || condition) return;

  if (typeof config === "string") {
    config = {
      level: "throw",
      message: config
    };
  }

  const restArgs = Array.prototype.slice.call(arguments, 2);
  const message =
    restArgs.length == 0 ? config.message : format(config.message, restArgs);

  switch (config.level) {
    case "error":
    case "warn":
    case "log": {
      console[config.level](message);
      break;
    }
    default: {
      throw new Error(message);
    }
  }
}

module.exports = verbose;
