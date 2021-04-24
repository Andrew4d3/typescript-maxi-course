import express from "express";
import routes from "./routes";
import { json } from "body-parser";

const app = express();

app.use(json());
app.use("/v1", routes);

app.use(
   // When using TS with express we need to declare the type for our middleware parameters
   (
      err: Error,
      _req: express.Request,
      res: express.Response,
      _next: express.NextFunction
   ) => {
      res.status(500).json({ msg: err.message });
   }
);

app.listen(3000);
