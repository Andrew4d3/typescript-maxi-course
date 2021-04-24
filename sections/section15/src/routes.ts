import { Router, RequestHandler } from "express";

const router = Router();

// If we don't want to explicitly declare each parameter, we can just declare the whole function to be of "RequestHandler" type
const helloWorldHandler: RequestHandler = (_req, res) => {
   res.json({ message: "Hello World" });
};

router.get("/hello", helloWorldHandler);

const echoHandler: RequestHandler = (req, res) => {
   // We don't know what body contains so we can just type cast it
   const message = (req.body as { message: string }).message;

   res.json({ message: `Hello ${message}` });
};

router.post("/echo", echoHandler);

router.get("/error", (() => {
   throw new Error("Boom!");
}) as RequestHandler);

// To work with URL params we need to define a generic type containing the params definition
const echoParamsHandler: RequestHandler<{ message: string }> = (req, res) => {
   // Now the message property is available inside the params object
   const message = req.params.message;

   res.json({ message: `Hello ${message}` });
};

router.post("/echo/:message", echoParamsHandler);

export default router;
