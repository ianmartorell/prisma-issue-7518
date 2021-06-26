Repro for issue https://github.com/prisma/prisma/issues/7518

```bash
ian@air ~/Code/ianmartorell/prisma-issue-7518 $ yarn lint
src/index.ts:19:13 - error TS2322: Type '{ product: { include: { latestUpdate: true; }; }; }' is not assignable to type 'ProductInclude'.
  Object literal may only specify known properties, and 'product' does not exist in type 'ProductInclude'.

 19             product: {
                ~~~~~~~~~~
 20               include: {
    ~~~~~~~~~~~~~~~~~~~~~~~~
...
 22               },
    ~~~~~~~~~~~~~~~~
 23             },
    ~~~~~~~~~~~~~


Found 1 error.
```
