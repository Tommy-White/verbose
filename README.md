## verbose

A fork of Facebook's invariant.

A way to provide descriptive log in development for something that should be used carefully.

## verbose(condition, message)

```js
const verbose = require('vebs');

// API.call() => truly | falsely

verbose(truly, 'This will not log');
// nothing happened

verbose(falsely, 'You may have used it wrong.');
// ⚠️ >: 1 You may have used it wrong.
```

**Note:**

1. The verbose does not take effect in `production mode`, it is a dummy function.

2. Since 2.x.x, it reverse the condition and is consistent with invariant and warning.

~~**Contrary (1.x.x):** Compared to invariant, the message will show only when condition is true.~~
