## verbose

A fork of Facebook's invariant.

A way to provide descriptive log in development for something that should be used carefully.

## verbose(condition, message)

```js
const verbose = require('vebs');
// import verbose form 'vebs'

verbose(truely, 'You may have used it wrong.');
// ⚠️ >: 1 You may have used it wrong.

verbose(Falsey, 'This will not log');
// nothing happened
```

**Note:** The verbose does not take effect in `production mode`, it is a dummy function.

**Contrary:** Compared to invariant, the message will show only when condition is true.
