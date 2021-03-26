## verbose

A fork of Facebook's invariant.

The `verbose` provide a printf-style(only %s is supported) liked API to throw or log a message.

## verbose(condition, message)

```js
import verbose from "vebs";

verbose(true, "This will not log");
// nothing happened

verbose(false, "Error message");
// Uncaught Error: Error message ...

verbose(
  false,
  { level: "log", message: "You may have wrong way using [%s]." },
  "vebs"
);
// console.log("You may have wrong way using [vebs].")
```

**Note:**

1. The verbose does not take effect in `production mode`, it is a dummy function.

2. Since 2.x.x, it reverse the condition and is consistent with invariant and warning.

~~**Contrary (1.x.x):** Compared to invariant, the message will show only when condition is true.~~
