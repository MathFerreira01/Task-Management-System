import { Request, Response } from "express";
import { router } from "./routes/route";
import express from "express";

const app = express();

app.route("/").get((req: Request, res: Response) => {
  res.status(200).send({ title: "task management" });
});

app.use(express.json(), router);

app.listen(4003, () => console.log("Server is running on PORT 4003"));
