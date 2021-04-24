What TS configuration do we need to set for the correct resolution of nodeJs modules?

---

The config `moduleResolution` should be set to `node`

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section15/tsconfig.json#L9)

===

When declaring middlewares in Express (or any other framework), How should we define the middleware parameters? (using TS)

---

We should declare every parameter with its corresponding TS type

```
req: express.Request,
res: express.Response,
ext: express.NextFunction
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section15/src/app.ts#L13-L16)

===

Declaring each type for our middleware parameters can be cumbersome, do we have an alternative to do this?

---

We can declare our middleware function to be of `RequestHandler` type

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section15/src/routes.ts#L12)

===

When using express, our request body can contain anything, but TS doesn't know what to find there. How can we work around this issue?

---

We can just type cast the `body` property

```
 const message = (req.body as { message: string }).message;
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section15/src/routes.ts#L14)

===

When working with URL params (eg: book/:id) in express, how can we let TS know what keys the params object contains?

---

We declare a generic type in the RequestHandler definition with the expected param keys. For example:

```
RequestHandler<{ id: string }>
```

This means that for the route `/book/:id` it will assossiate the "id" param to the "id" key in the `params` object.

```
const id = req.params.id;
```

[Code](https://github.com/Andrew4d3/typescript-maxi-course/blob/main/sections/section15/src/routes.ts#L25-L28)
