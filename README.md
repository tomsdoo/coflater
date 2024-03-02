# coflater

It flattens a deep object and restores a flattened object.

[![](https://nodei.co/npm/@tomsd/coflater.svg?mini=true)](https://www.npmjs.com/package/@tomsd/coflater)

## Installation
``` shell
npm install @tomsd/coflater
```

# Usage

``` typescript
import { Coflater } from "@tomsd/coflater";

const coflater = new Coflater();
const original = {
  a: {
    b: {
      c: 1,
      d: false,
    }
  },
  z: "s",
};
const deflated = coflater.deflate(original);
console.log(deflated); // {"a.b.c": 1, "a.b.d": false, z: "s" }


const inflated = coflater.inflate(deflated);
console.log(inflated); // equals to original
```
